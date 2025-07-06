"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MessageCircle, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Awards", href: "/awards" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > -1)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-poppins font-semibold text-lg text-[#002D62] leading-tight">Crescent Sam Affa</h1>
              <p className="text-sm text-gray-600 -mt-1">Enterprises</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#FFB000]",
                  pathname === item.href ? "text-[#002D62] border-b-2 border-[#FFB000] pb-1" : "text-gray-700",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">


            {/* Contact Buttons */}
            <div className="hidden sm:flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white text-[#002D62] border-[#002D62] hover:bg-[#002D62] hover:text-white"
                asChild
              >
                <a href="tel:+918048544548" className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-80-48544548</span>
                </a>
              </Button>
              <Button size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                <a
                  href="https://wa.me/918048544548"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        pathname === item.href ? "text-[#002D62] font-semibold" : "text-gray-700 hover:text-[#002D62]",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-6 border-t border-gray-200 space-y-4">
                    <Button variant="outline" className="w-full bg-white text-[#002D62] border-[#002D62]" asChild>
                      <a href="tel:+918048544548" className="flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>+91-80-48544548</span>
                      </a>
                    </Button>
                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                      <a
                        href="https://wa.me/918048544548"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
