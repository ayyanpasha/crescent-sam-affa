"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { InfiniteCarousel } from "@/components/ui/infinite-carousel"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const totalImages = 43

  const openModal = (index: number) => {
    setSelectedImage(`/gallery_images/${index + 1}.webp`)
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
    setSelectedImage(`/gallery_images/${newIndex + 1}.webp`)
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
                Visual Portfolio
              </Badge>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">Project Gallery</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Explore our extensive portfolio showcasing 40+ years of electrical excellence across Karnataka's
                industrial and commercial landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <div className="text-center mb-12">
              <h2 className="font-poppins font-semibold text-2xl text-[#002D62] mb-4">Our Recognition Gallery</h2>
              <p className="text-gray-600">A showcase of our awards and certifications over the years</p>
            </div> */}

            <InfiniteCarousel speed={10} className="py-4">
              {Array.from({ length: totalImages }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-96 h-[500px] bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  onClick={() => openModal(i)}  // Open modal on image click
                >
                  <div className="relative h-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={`/gallery_images/${i + 1}.webp`}
                      alt={`Award ${i + 1}`}
                      className="h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </InfiniteCarousel>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black">
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                onClick={() => setSelectedImage(null)}  // Close the modal
              >
                <X className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                onClick={() => navigateImage("prev")}  // Navigate to previous image
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                onClick={() => navigateImage("next")}  // Navigate to next image
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <img
                src={selectedImage}
                alt={`Selected Image`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  )
}
