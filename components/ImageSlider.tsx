'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface SlideImage {
  id: number
  src: string
  alt: string
}

const slides: SlideImage[] = [
  { id: 1, src: '/images/V_10.jpg', alt: 'Gideon Peprah Ministries' },
  { id: 2, src: '/images/V_13.jpg', alt: 'Ministry service' },
  { id: 3, src: '/images/V_23.jpg', alt: 'Worship gathering' },
  { id: 4, src: '/images/V_26.jpg', alt: 'Worship and ministry' },
  { id: 5, src: '/images/V_44.jpg', alt: 'Church fellowship' },
  { id: 6, src: '/images/V_45.jpg', alt: 'Ministry gathering' },
  { id: 7, src: '/images/V_56.jpg', alt: 'Community event' },
  { id: 8, src: '/images/V_62.jpg', alt: 'Church service' },
  { id: 9, src: '/images/V_85.jpg', alt: 'Kingdom work' },
  { id: 10, src: '/images/V_111.jpg', alt: 'Community fellowship' },
  { id: 11, src: '/images/V_114.jpg', alt: 'Praise and worship' },
  { id: 12, src: '/images/V_132.jpg', alt: 'Ministry outreach' },
  { id: 13, src: '/images/V_143.jpg', alt: 'Church gathering' },
  { id: 14, src: '/images/V_165.jpg', alt: 'Ministry event' },
  { id: 15, src: '/images/V_172.jpg', alt: 'Fellowship and worship' },
  { id: 16, src: '/images/V_188.jpg', alt: 'Gospel outreach' },
  { id: 17, src: '/images/V_190.jpg', alt: 'Community impact' },
  { id: 18, src: '/images/V_199.jpg', alt: 'Kingdom service' },
  { id: 19, src: '/images/V_203.jpg', alt: 'Advancing the Kingdom' },
  { id: 20, src: '/images/V_204.jpg', alt: 'Ministry in action' },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const goToSlide = useCallback((index: number, dir?: 'next' | 'prev') => {
    if (isTransitioning) return
    setDirection(dir || (index > currentSlide ? 'next' : 'prev'))
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [currentSlide, isTransitioning])

  const goToNext = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length, 'next')
  }, [currentSlide, goToSlide])

  const goToPrevious = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length, 'prev')
  }, [currentSlide, goToSlide])

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay, goToNext])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      setIsAutoPlay(false)
      if (diff > 0) goToNext()
      else goToPrevious()
    }
  }

  // Only render current + neighbors for performance
  const visibleIndices = new Set([
    currentSlide,
    (currentSlide - 1 + slides.length) % slides.length,
    (currentSlide + 1) % slides.length,
  ])

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-950"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="relative h-[75vh] min-h-[420px] max-h-[700px]">
        {slides.map((slide, index) => {
          if (!visibleIndices.has(index)) return null

          const isActive = index === currentSlide
          const slideDirection = direction === 'next' ? 1 : -1

          return (
            <div
              key={slide.id}
              className="absolute inset-0"
              style={{
                zIndex: isActive ? 2 : 1,
                opacity: isActive ? 1 : 0,
                transform: isActive
                  ? 'scale(1) translateX(0)'
                  : `scale(0.95) translateX(${slideDirection * 8}%)`,
                transition: 'opacity 700ms ease-in-out, transform 700ms ease-in-out',
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
                loading={index === 0 ? 'eager' : 'lazy'}
                quality={90}
                sizes="100vw"
              />
            </div>
          )
        })}

        {/* Navigation Arrows */}
        <button
          onClick={() => { setIsAutoPlay(false); goToPrevious() }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20
            w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
            bg-black/30 hover:bg-black/60 backdrop-blur-sm
            border border-white/15 hover:border-white/40
            rounded-full transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => { setIsAutoPlay(false); goToNext() }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20
            w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center
            bg-black/30 hover:bg-black/60 backdrop-blur-sm
            border border-white/15 hover:border-white/40
            rounded-full transition-all duration-300 group"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom: dots + progress */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="flex justify-center gap-2 pb-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setIsAutoPlay(false); goToSlide(index) }}
                className={`rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'w-8 h-2.5 shadow-lg'
                    : 'w-2.5 h-2.5 hover:bg-white/60'
                }`}
                style={{
                  background: index === currentSlide ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="h-1 bg-white/10">
            <div
              className="h-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
                background: 'linear-gradient(90deg, var(--gold-dark), var(--gold-light))',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
