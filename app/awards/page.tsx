"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, Medal, Star } from "lucide-react"
import { InfiniteCarousel } from "@/components/ui/infinite-carousel"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function AwardsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const totalImages = 43 // Total number of images in the carousel

  const openModal = (index: number) => {
    setSelectedImage(`/award_images/image_${index + 1}.webp`)
    setCurrentImageIndex(index)
  }

  const navigateImage = (direction: "prev" | "next") => {
    let newIndex = currentImageIndex

    if (direction === "next") {
      newIndex = (currentImageIndex + 1) % totalImages
    } else {
      newIndex = (currentImageIndex - 1 + totalImages) % totalImages
    }

    setCurrentImageIndex(newIndex)
    setSelectedImage(`/award_images/image_${newIndex + 1}.webp`)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#002D62] to-[#004080] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-[#FFB000]/20 text-[#FFB000] border-[#FFB000]/30 mb-6">
                Recognition & Excellence
              </Badge>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">Awards & Recognition</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Four decades of excellence recognized by government agencies, industry associations, and leading
                organizations across Karnataka.
              </p>
            </div>
          </div>
        </section>

        {/* Awards Carousel */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-semibold text-2xl text-[#002D62] mb-4">Our Recognition Gallery</h2>
              <p className="text-gray-600">A showcase of our awards and certifications over the years</p>
            </div>

            <InfiniteCarousel speed={10} className="py-4">
              {Array.from({ length: totalImages }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-96 h-[500px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  onClick={() => openModal(i)} // Open modal on image click
                >
                  <div className="relative h-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={`/award_images/image_${i + 1}.webp`}
                      alt={`Award ${i + 1}`}
                      className="h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </InfiniteCarousel>
          </div>
        </section>

        {/* Recognition Stats */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl text-[#002D62] mb-4">Recognition by Numbers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence reflected in industry recognition and certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "15+",
                  label: "Industry Awards",
                  description: "Recognition from leading organizations",
                  icon: Trophy,
                },
                {
                  number: "40+",
                  label: "Years of Excellence",
                  description: "Consistent quality since 1984",
                  icon: Award,
                },
                {
                  number: "100%",
                  label: "Safety Record",
                  description: "Zero safety incidents maintained",
                  icon: Medal,
                },
                {
                  number: "500+",
                  label: "Successful Projects",
                  description: "Delivered with excellence",
                  icon: Star,
                },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-full mb-4">
                      <stat.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="font-poppins font-bold text-3xl text-[#002D62] mb-2">{stat.number}</h3>
                    <p className="font-semibold text-gray-900 mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black">
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-y-scroll">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                onClick={() => setSelectedImage(null)} // Close modal
              >
                <X className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                onClick={() => navigateImage("prev")} // Navigate to previous image
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                onClick={() => navigateImage("next")} // Navigate to next image
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image wrapper with scroll */}
              <div className="max-w-full max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#FFB000] scrollbar-track-[#002D62] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                <img
                  src={selectedImage}
                  alt={`Selected Image`}
                  className="w-full object-contain"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  )
}
