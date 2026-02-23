'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Video {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
  channelName: string
}

export default function MediaPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube')
        const data = await response.json()
        
        if (data.videos) {
          setVideos(data.videos)
        } else if (data.error) {
          setError(data.error)
        }
      } catch (err) {
        setError('Failed to load videos')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  useEffect(() => {
    if (selectedVideo) {
      setTimeout(() => {
        const playerElement = document.getElementById('video-player')
        if (playerElement) {
          const startTime = Date.now()
          const duration = 1400
          const startPosition = window.scrollY
          const targetPosition = playerElement.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2 - 100)

          // Smooth cubic bezier easing for elegant motion
          const easeInOutCubic = (t: number) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
          }

          const scroll = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeProgress = easeInOutCubic(progress)
            
            const distance = targetPosition - startPosition
            window.scrollTo(0, startPosition + distance * easeProgress)

            if (progress < 1) {
              requestAnimationFrame(scroll)
            }
          }

          requestAnimationFrame(scroll)
        }
      }, 100)
    }
  }, [selectedVideo])

  return (
    <>
      {/* Header */}
      <section
        className="relative flex items-center justify-center text-white text-center px-6 py-20"
        style={{ background: 'linear-gradient(160deg, var(--green-dark) 0%, #2d7a3e 100%)' }}
      >
        <div className="relative z-10">
          <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-4">Media</h1>
          <div className="w-16 h-1 mx-auto" style={{ background: 'var(--gold)' }} />
        </div>
      </section>
      <div className="gold-bar" />

      {/* Videos Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-gray-300" style={{ borderTopColor: 'var(--green-main)' }} />
              <p className="mt-4 text-gray-600">Loading videos...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <p className="text-sm text-gray-600 mb-4">
                Make sure you have set NEXT_PUBLIC_YOUTUBE_API_KEY and NEXT_PUBLIC_YOUTUBE_CHANNEL_ID in your .env.local file
              </p>
              <Link
                href="https://www.youtube.com/@gideonpeprah/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold text-white"
                style={{ background: '#FF0000' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Visit YouTube
              </Link>
            </div>
          </div>
        ) : videos.length > 0 ? (
          <div className="flex flex-col gap-12">
            {/* Dynamic Video Grid with Player */}
            {(() => {
              const selectedIndex = selectedVideo ? videos.findIndex(v => v.id === selectedVideo.id) : -1
              
              return (
                <>
                  {/* Videos before player */}
                  {selectedIndex >= 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {videos.slice(0, selectedIndex + 1).map((video) => (
                        <button
                          key={video.id}
                          onClick={() => setSelectedVideo(video)}
                          className="group cursor-pointer text-left"
                        >
                          {/* Video Card */}
                          <div className="rounded-xl overflow-hidden bg-black">
                            {/* Thumbnail */}
                            <div className="relative w-full bg-gray-900" style={{ paddingBottom: '56.25%' }}>
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                              />
                              {/* Play overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                                <div
                                  className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                  style={{ background: '#FF0000' }}
                                >
                                  <svg className="w-7 h-7 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-3 bg-white">
                              <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-2" style={{ color: 'var(--green-dark)' }}>
                                {video.title}
                              </h3>
                              <p className="text-xs text-gray-600 mb-1">{video.channelName}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(video.publishedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Video Player */}
                  {selectedVideo && (
                    <div
                      id="video-player"
                      className="px-6 bg-white animate-in fade-in slide-in-from-bottom-4 duration-1000"
                    >
                      <div className="max-w-7xl mx-auto">
                        {/* Video Embed */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=0`}
                            title={selectedVideo.title}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Videos after player */}
                  {selectedIndex >= 0 && selectedIndex < videos.length - 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {videos.slice(selectedIndex + 1).map((video) => (
                        <button
                          key={video.id}
                          onClick={() => setSelectedVideo(video)}
                          className="group cursor-pointer text-left"
                        >
                          {/* Video Card */}
                          <div className="rounded-xl overflow-hidden bg-black">
                            {/* Thumbnail */}
                            <div className="relative w-full bg-gray-900" style={{ paddingBottom: '56.25%' }}>
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                              />
                              {/* Play overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                                <div
                                  className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                  style={{ background: '#FF0000' }}
                                >
                                  <svg className="w-7 h-7 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-3 bg-white">
                              <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-2" style={{ color: 'var(--green-dark)' }}>
                                {video.title}
                              </h3>
                              <p className="text-xs text-gray-600 mb-1">{video.channelName}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(video.publishedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* All videos when no selection */}
                  {!selectedVideo && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {videos.map((video) => (
                        <button
                          key={video.id}
                          onClick={() => setSelectedVideo(video)}
                          className="group cursor-pointer text-left"
                        >
                          {/* Video Card */}
                          <div className="rounded-xl overflow-hidden bg-black">
                            {/* Thumbnail */}
                            <div className="relative w-full bg-gray-900" style={{ paddingBottom: '56.25%' }}>
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                              />
                              {/* Play overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                                <div
                                  className="w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                  style={{ background: '#FF0000' }}
                                >
                                  <svg className="w-7 h-7 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-3 bg-white">
                              <h3 className="font-semibold text-sm leading-snug line-clamp-2 mb-2" style={{ color: 'var(--green-dark)' }}>
                                {video.title}
                              </h3>
                              <p className="text-xs text-gray-600 mb-1">{video.channelName}</p>
                              <p className="text-xs text-gray-500">
                                {new Date(video.publishedAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )
            })()}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600">No videos found</p>
          </div>
        )}
      </section>

      {/* View All Button */}
      <section className="py-12 px-6 text-center">
        <Link
          href="https://www.youtube.com/@gideonpeprah/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold text-white transition-all hover:shadow-lg"
          style={{ background: 'var(--green-main)' }}
        >
          View All Videos
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </section>
    </>
  )
}
