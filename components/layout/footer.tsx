import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, QrCode } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#002D62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#FFB000] rounded-lg flex items-center justify-center">
                <span className="text-[#002D62] font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-xl">Crescent Sam Affa Enterprises</h3>
                <p className="text-gray-300 text-sm">Licensed Super Grade Electrical Contractors & Engineers</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Powering Karnataka since 1984 with 40+ years of trusted electrical contracting services. Class 1 licensed
              contractor specializing in EHV, HT, LT, and Government electrical works.
            </p>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#002D62]"
                asChild
              >
                <a href="tel:+918048544548">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="sm" className="bg-[#25D366] hover:bg-[#128C7E]" asChild>
                <a href="https://wa.me/918048544548" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Projects", "Awards", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" us", "")}`}
                    className="text-gray-300 hover:text-[#FFB000] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#FFB000] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Bengaluru, Karnataka
                    <br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FFB000] flex-shrink-0" />
                <a href="tel:+918048544548" className="text-gray-300 hover:text-white transition-colors">
                  +91-80-48544548
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FFB000] flex-shrink-0" />
                <a href="mailto:info@crescentsamaffa.com" className="text-gray-300 hover:text-white transition-colors">
                  info@crescentsamaffa.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#FFB000] flex-shrink-0" />
                <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Crescent Sam Affa Enterprises. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <QrCode className="w-4 h-4" />
              <span>Scan for Location</span>
            </div>
            <p className="text-gray-400 text-sm">
              Designed by <a href="https://www.crescentslab.com/" target="_blank" rel="noopener noreferrer" className="text-[#FFB000]">Crescent's Lab</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
