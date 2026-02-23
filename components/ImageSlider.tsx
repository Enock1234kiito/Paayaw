'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SlideImage {
  id: number
  src: string
  alt: string
  title?: string
  description?: string
}

const slides: SlideImage[] = [
  {
    id: 1,
    src: '/images/logo.jpg',
    alt: 'Gideon Peprah Ministries',
    title: 'Advancing the Kingdom',
    description: 'Growing together in faith and purpose',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1920&q=85',
    alt: 'People in worship',
    title: 'Our Mission',
    description: 'Mobilising the Body of Christ',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1920&q=85',
    alt: 'Ministry event',
    title: 'Ministry Events',
    description: 'Connecting communities in worship',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=85',
    alt: 'Community event',
    title: 'Community Impact',
    description: 'Making a difference together',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&q=85',
    alt: 'Service work',
    title: 'Kingdom Work',
    description: 'Serving with love and purpose',
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            
            {/* Gradient Overlay - Top to Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

            {/* Text Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <div className="animate-fade-in">
                {slide.title && (
                  <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-3 drop-shadow-lg">
                    {slide.title}
                  </h2>
                )}
                {slide.description && (
                  <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-2xl">
                    {slide.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-all duration-300 p-3 rounded-full shadow-lg hover:shadow-2xl"
          aria-label="Previous slide"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 transition-all duration-300 p-3 rounded-full shadow-lg hover:shadow-2xl"
          aria-label="Next slide"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-10 h-3 shadow-lg'
                  : 'bg-white/40 hover:bg-white/70 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>
    </div>
  )
}
