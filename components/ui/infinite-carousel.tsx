"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface InfiniteCarouselProps {
  children: ReactNode[]
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
  className?: string
}

export function InfiniteCarousel({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startScrolling = () => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = scrollContainer.scrollLeft

    const scroll = () => {
      if (direction === "left") {
        scrollPosition += 1
        if (scrollPosition >= scrollWidth / 2) {
          scrollPosition = 0
        }
      } else {
        scrollPosition -= 1
        if (scrollPosition <= 0) {
          scrollPosition = scrollWidth / 2
        }
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    intervalRef.current = setInterval(scroll, speed)
  }

  const stopScrolling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    startScrolling()
    return () => stopScrolling()
  }, [speed, direction])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={pauseOnHover ? stopScrolling : undefined}
      onMouseLeave={pauseOnHover ? startScrolling : undefined}
    >
      <div ref={scrollRef} className="flex space-x-6 overflow-hidden" style={{ scrollBehavior: "auto" }}>
        {/* First set */}
        {children}
        {/* Duplicate set for seamless loop */}
        {children}
      </div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  )
}
