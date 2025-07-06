"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Download,
  Globe,
  Send,
  CheckCircle,
  Building,
  User,
  MessageSquare,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    alert(`
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Service: ${formData.service}
      Message: ${formData.message}
    `)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
                Get In Touch
              </Badge>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">Contact Us</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Ready to power your next project? Get in touch with Karnataka's leading electrical contractors for
                expert consultation and competitive quotes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-[#002D62] mb-6">Get In Touch</h2>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Have a project in mind? We're here to help you with expert electrical contracting services. Reach
                    out to us through any of the channels below.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#002D62] p-3 rounded-lg">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-lg text-[#002D62] mb-2">Phone</h3>
                          <a
                            href="tel:+918048544548"
                            className="text-gray-600 hover:text-[#002D62] transition-colors text-lg"
                          >
                            +91-80-48544548
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#25D366] p-3 rounded-lg">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-lg text-[#002D62] mb-2">WhatsApp</h3>
                          <a
                            href="https://wa.me/918048544548"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-[#25D366] transition-colors text-lg"
                          >
                            +91-80-48544548
                          </a>
                          <p className="text-sm text-gray-500 mt-1">Quick response guaranteed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#FFB000] p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-lg text-[#002D62] mb-2">Email</h3>
                          <a
                            href="mailto:info@crescentsamaffa.com"
                            className="text-gray-600 hover:text-[#002D62] transition-colors text-lg"
                          >
                            info@crescentsamaffa.com
                          </a>
                          <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#002D62] p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-semibold text-lg text-[#002D62] mb-2">Office</h3>
                          <p className="text-gray-600 text-lg">
                            Crescent Sam Affa Building
                            <br />
                            Bengaluru, Karnataka
                            <br />
                            India - 560001
                          </p>
                          <p className="text-sm text-gray-500 mt-1">Visit us for detailed consultations</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <Button className="w-full bg-[#002D62] hover:bg-[#002D62]/90 text-white py-6 text-lg" asChild>
                    <a href="tel:+918048544548" className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-3" />
                      Call Now for Immediate Support
                    </a>
                  </Button>

                  <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-lg" asChild>
                    <a
                      href="https://wa.me/918048544548"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      Chat on WhatsApp
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-[#FFB000] text-[#FFB000] hover:bg-[#FFB000] hover:text-white py-6 text-lg"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Company Brochure
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="font-poppins font-bold text-2xl text-[#002D62] flex items-center">
                      <MessageSquare className="w-6 h-6 mr-3" />
                      Send Us a Message
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you with a detailed quote and consultation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            Full Name *
                          </label>
                          <Input
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            Phone Number *
                          </label>
                          <Input
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            Service Required *
                          </label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleInputChange("service", value)}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ehv-works">EHV Works</SelectItem>
                              <SelectItem value="ht-works">HT Works</SelectItem>
                              <SelectItem value="lt-works">LT Works</SelectItem>
                              <SelectItem value="government-works">Government Works</SelectItem>
                              <SelectItem value="maintenance">Maintenance Services</SelectItem>
                              <SelectItem value="consultation">Consultation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Project Details *
                        </label>
                        <Textarea
                          placeholder="Please describe your project requirements, timeline, and any specific details..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                          rows={6}
                          className="resize-none"
                        />
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div className="text-sm text-gray-600">
                            <p className="font-medium mb-1">What happens next?</p>
                            <ul className="space-y-1 text-xs">
                              <li>• We'll review your requirements within 24 hours</li>
                              <li>• Our technical team will prepare a detailed quote</li>
                              <li>• We'll schedule a site visit if needed</li>
                              <li>• You'll receive a comprehensive project proposal</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#FFB000] hover:bg-[#FFB000]/90 text-[#002D62] font-semibold py-6 text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-[#002D62] border-t-transparent rounded-full animate-spin mr-3" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Send Message & Get Quote
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-3xl text-[#002D62] mb-4">Find Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Bengaluru, we serve clients across Karnataka and neighboring states.
              </p>
            </div>

            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="w-full h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.5700146074355!2d77.607998!3d12.999331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16590cdf21d3%3A0x3e0067b1375e9899!2sCrescent%20Sam%20Affa%20Building!5e0!3m2!1sen!2sus!4v1750954913778!5m2!1sen!2sus"
                    width="100%"
                    height="384"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Crescent Sam Affa Enterprises Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Directions Button */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a
                  href="https://www.google.com/maps/dir//Crescent+Sam+Affa+Building/@12.999331,77.607998,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Get Directions to Our Office
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
