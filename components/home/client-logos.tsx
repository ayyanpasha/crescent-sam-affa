"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Dynamically generate client data
const clients = Array.from({ length: 36 }, (_, i) => ({
  name: `Client ${i + 1}`,
  logo: `/clients_images/client_${i + 1}.webp`,
}))

export function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const intervalId = setInterval(scroll, 15)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-semibold text-3xl text-[#002D62] mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with government agencies, multinational corporations, and leading industrial groups across Karnataka.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex space-x-8 overflow-hidden" style={{ scrollBehavior: "auto" }}>
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group w-64 h-32" // Increased size
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160} // Increased size
                  height={120} // Increased size
                  className="w-auto group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group w-64 h-32" // Increased size
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160} // Increased size
                  height={120} // Increased size
                  className="w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
