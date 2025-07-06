"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const heroSlides = [
  {
    id: 1,
    image: "homeslider_images/homeslider_16.webp?height=800&width=1200&text=EHV+Substation+Project",
    title: "Powering Karnataka Since 1984",
    subtitle: "Class 1 Licensed Electrical Contractor • 190,670 kVA Projects Executed",
    description:
      "Leading electrical contracting services with 40+ years of excellence in EHV, HT, LT, and Government projects across Karnataka's industrial landscape.",
    cta: "Explore Our Work",
    stats: "500+ Projects Completed",
  },
  {
    id: 2,
    image: "/homeslider_images/homeslider_3.webp?height=800&width=1200&text=Government+Infrastructure",
    title: "Excellence in Electrical Engineering",
    subtitle: "Government Certified • BESCOM & KPTCL Approved",
    description:
      "Trusted by major industries and government organizations for complex electrical infrastructure projects with zero safety incidents and 100% quality assurance.",
    cta: "View Projects",
    stats: "Zero Safety Incidents",
  },
  {
    id: 3,
    image: "/homeslider_images/homeslider_10.webp?height=800&width=1200&text=Industrial+Complex",
    title: "Innovation Meets Reliability",
    subtitle: "40+ Years Experience • ISO Certified Quality",
    description:
      "Combining cutting-edge technology with proven expertise to deliver exceptional electrical solutions for Karnataka's growing industrial and commercial sectors.",
    cta: "Get Quote",
    stats: "40+ Years Excellence",
  },
  {
    id: 4,
    image: "homeslider_images/homeslider_15.webp?height=800&width=1200&text=Team+Excellence",
    title: "Your Trusted Electrical Partner",
    subtitle: "Super Grade Contractor • Advanced Technology Solutions",
    description:
      "From concept to commissioning, we deliver comprehensive electrical contracting services with unmatched technical expertise and customer satisfaction.",
    cta: "Contact Us",
    stats: "100% Client Satisfaction",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000) // Changed from 6000 to 8000
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/90 via-[#002D62]/70 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#FFB000]/20 backdrop-blur-sm rounded-full border border-[#FFB000]/30 mb-6">
                <span className="text-[#FFB000] font-medium text-sm">Established 1984</span>
              </div>
            </div>

            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#FFB000] font-medium mb-6">{heroSlides[currentSlide].subtitle}</p>

            <p className="text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>

            {/* Stats Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="text-white font-medium text-sm">{heroSlides[currentSlide].stats}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#FFB000] hover:bg-[#FFB000]/90 text-[#002D62] font-semibold px-8 py-4 text-lg"
                asChild
              >
                <a href="/projects" className="flex items-center">
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#002D62] px-8 py-4 text-lg"
                asChild
              >
                <a href="/contact">Get Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide ? "bg-[#FFB000] w-8" : "bg-white/50 hover:bg-white/70",
                )}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 rounded-full p-2"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
