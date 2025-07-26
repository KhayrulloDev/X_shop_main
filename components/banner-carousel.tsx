"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface Banner {
  title: string
  subtitle: string
  promo: string
  ctaText: string
  bgColor: string
  textColor: string
}

interface BannerCarouselProps {
  banners: Banner[]
}

export default function BannerCarousel({ banners }: BannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMobile()

  // Reset autoplay timer when index changes
  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [currentIndex])

  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  const nextBanner = () => {
    stopAutoPlay()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }

  const prevBanner = () => {
    stopAutoPlay()
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)
  }

  // Touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoPlay()
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextBanner()
    } else if (isRightSwipe) {
      prevBanner()
    }

    setTouchStart(null)
    setTouchEnd(null)
    startAutoPlay()
  }

  return (
    <section className="relative overflow-hidden pt-4 px-4">
      <div className="relative">
        <div
          className="overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            aria-live="polite"
          >
            {banners.map((banner, index) => (
              <div
                key={index}
                className={cn("min-w-full rounded-xl text-white flex-shrink-0", banner.bgColor, banner.textColor)}
                aria-hidden={index !== currentIndex}
              >
                <div className="p-6 md:p-8 lg:p-10 relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{banner.title}</h2>
                  <p className="text-base md:text-lg mb-4">{banner.subtitle}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span>Promokod:</span>
                    <Badge className="bg-teal-400 text-black font-bold px-3 py-1">{banner.promo}</Badge>
                  </div>
                  <Button className="bg-white text-rose-600 hover:bg-gray-100">{banner.ctaText}</Button>
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-20">
                  <ShoppingCart className="h-32 w-32 md:h-40 md:w-40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows - hidden on mobile */}
        {!isMobile && (
          <>
            <button
              onClick={prevBanner}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md z-10 hover:bg-white"
              aria-label="Previous banner"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={nextBanner}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-md z-10 hover:bg-white"
              aria-label="Next banner"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoPlay()
                setCurrentIndex(index)
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentIndex === index ? "bg-rose-600 w-4" : "bg-gray-300",
              )}
              aria-label={`Go to banner ${index + 1}`}
              aria-current={currentIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
