"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  icon: string
  count: number
  color: string
}

interface CategoryScrollerProps {
  categories: Category[]
  scrollSpeed?: number
  pauseOnHover?: boolean
}

export default function CategoryScroller({
  categories,
  scrollSpeed = 35,
  pauseOnHover = true,
}: CategoryScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef<number>(0)
  const lastTimestampRef = useRef<number>(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const remainderRef = useRef(0)

  
  // Store the current scroll speed in a ref to access it in the animation loop
  const currentSpeedRef = useRef(scrollSpeed)
  
  // Update the ref when the prop changes
  useEffect(() => {
    currentSpeedRef.current = scrollSpeed;
  }, [scrollSpeed]);

  // Check if mobile based on window width
  const isMobile = windowWidth > 0 && windowWidth < 768

  // Update window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Toggle auto-scrolling pause state
  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  // Handle manual scrolling
  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 200 : 300
      scrollRef.current.scrollLeft -= scrollAmount
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 200 : 300
      scrollRef.current.scrollLeft += scrollAmount
    }
  }

  // Clone categories for infinite scrolling effect
  const extendedCategories = [...categories, ...categories]

  // Continuous scrolling animation
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Reset scroll position when reaching the end
    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        // When we reach the cloned section, jump back to the beginning without animation
        scrollContainer.scrollLeft = 0
      }
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation loop for smooth continuous scrolling
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    // Reset timestamp to ensure smooth transition when props change
    lastTimestampRef.current = 0

    const shouldPause = isPaused || (pauseOnHover && isHovering)

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp
      }
    
      const elapsed = timestamp - lastTimestampRef.current
      lastTimestampRef.current = timestamp
    
      if (!shouldPause && scrollContainer) {
        const speed = currentSpeedRef.current
        const pixelsToScrollFloat = (speed * elapsed) / 1000 + remainderRef.current
    
        const pixelsToScroll = Math.floor(pixelsToScrollFloat)
        remainderRef.current = pixelsToScrollFloat - pixelsToScroll
    
        if (pixelsToScroll > 0) {
          scrollContainer.scrollLeft += pixelsToScroll
        }
      }
    
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
      lastTimestampRef.current = 0
    }
  }, [isPaused, isHovering, pauseOnHover, scrollSpeed]) // Include scrollSpeed in dependencies

  // Debug output to console
  useEffect(() => {
    console.log(`CategoryScroller: scrollSpeed set to ${scrollSpeed}px/s`)
  }, [scrollSpeed])

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "auto", // Disable smooth scrolling for the reset
        }}
        aria-label="Categories"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {extendedCategories.map((category, index) => (
          <Link
            key={`${category.id}-${index}`}
            href={`/catalog/${category.name.toLowerCase()}`}
            className="flex flex-col items-center min-w-[90px] hover:scale-105 transition-transform"
            aria-label={`${category.name} category`}
          >
            <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-2", category.color)}>
              <span className="text-2xl" aria-hidden="true">
                {category.icon}
              </span>
            </div>
            <span className="text-sm text-center font-medium">{category.name}</span>
            <span className="text-xs text-gray-500">{category.count} ta</span>
          </Link>
        ))}
      </div>

      <div className="absolute left-0 bottom-0 flex gap-2">
        <button
          onClick={togglePause}
          className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white"
          aria-label={isPaused ? "Resume auto-scrolling" : "Pause auto-scrolling"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      </div>

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white"
        aria-label="Scroll categories left"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:bg-white"
        aria-label="Scroll categories right"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
