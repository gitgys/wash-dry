'use client'

import { useRef, useEffect } from 'react'

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPercentage = window.scrollY / (window.innerHeight / 2)
        scrollRef.current.style.opacity = Math.max(1 - scrollPercentage * 0.5, 0).toString()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles for visual interest */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Animated Washing Machine SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-40 hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
          <g className="washing-machine">
            {/* Machine Body */}
            <rect x="40" y="30" width="120" height="140" rx="10" fill="none" stroke="#3b82f6" strokeWidth="2"/>
            
            {/* Door */}
            <circle cx="100" cy="100" r="45" fill="none" stroke="#3b82f6" strokeWidth="2" className="animate-spin-slow"/>
            
            {/* Door details */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const x = 100 + Math.cos(angle) * 35
              const y = 100 + Math.sin(angle) * 35
              return (
                <circle key={i} cx={x} cy={y} r="3" fill="#3b82f6" opacity="0.6"/>
              )
            })}
            
            {/* Control panel buttons */}
            <rect x="55" y="120" width="15" height="15" rx="2" fill="#10b981"/>
            <rect x="80" y="120" width="15" height="15" rx="2" fill="#ef4444"/>
            <rect x="105" y="120" width="15" height="15" rx="2" fill="#3b82f6"/>
          </g>
        </svg>
      </div>

      {/* Content Overlay */}
      <div 
        ref={scrollRef}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          Fresh, Clean, Ready
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl text-balance">
          Professional laundry services that care for your clothes like we care for our business. Fast, reliable, and affordable.
        </p>
        <button
          onClick={() => {
            const element = document.getElementById('services')
            element?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
        >
          Explore Our Services
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
