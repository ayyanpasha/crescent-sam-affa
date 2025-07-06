"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Building, Settings, Phone, MessageCircle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const services = {
  "ehv-works": {
    title: "EHV WORKS",
    icon: Zap,
    description: "Extra High Voltage electrical systems and infrastructure",
    services: [
      "Approvals from BESCOM, KPTCL and CEIG",
      "Preparation of the Construction Site and Earthwork",
      "Transmission and Distribution of Electricity",
      "Assembly and Installation of Electrical Capital Equipments",
      "Installation and Configuration of Auxiliary Systems",
      "Landscaping and Cleaning Construction Waste",
      "Testing and Commissioning",
      "Wiring Materials",
      "Light Fittings",
      "Earthing Materials",
      "Upgradation Works",
      "Control Cabling Works",
      "Lightning Arrestor Installation",
    ],
  },
  "ht-works": {
    title: "HT WORKS",
    icon: Building,
    description: "High Tension electrical installations and maintenance",
    services: [
      "Approvals from BESCOM, KPTCL and CEIG",
      "HT Installations",
      "HT Breakers - Supply, Installation, Testing & Commissioning",
      "HT Equipments",
      "HT Structures and Sub Stations",
      "HT Power Distribution Systems",
      "Preventive Maintenance",
      "Reactive Maintenance",
      "Annual Maintenance",
      "Transformer Oil Filtration & Testing of Relays",
      "Testing and Quality Check Services",
      "Electrical Commissioning Services",
    ],
  },
  "lt-works": {
    title: "LT WORKS",
    icon: Settings,
    description: "Low Tension electrical systems and solutions",
    services: [
      "Approvals from BESCOM, KPTCL and CEIG",
      "LT Installations",
      "LT Breakers - Supply, Installation, Testing & Commissioning",
      "LT Equipments",
      "LT Structures and Sub Stations",
      "LT Power Distribution Systems",
      "Preventive Maintenance",
      "Reactive Maintenance",
      "Annual Maintenance",
      "Transformer Oil Filtration & Testing of Relays",
      "Testing and Quality Check Services",
      "Electrical Commissioning Services",
    ],
  },
}

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("ehv-works")

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#002D62] to-[#004080] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-[#FFB000]/20 text-[#FFB000] border-[#FFB000]/30 mb-6">
                Professional Services
              </Badge>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">Our Electrical Services</h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Comprehensive electrical contracting solutions from EHV to LT systems, backed by government
                certifications and 40+ years of expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Services Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-2">
                  {Object.entries(services).map(([key, service]) => (
                    <button
                      key={key}
                      onClick={() => setActiveService(key)}
                      className={cn(
                        "w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center space-x-3",
                        activeService === key
                          ? "bg-[#002D62] text-white shadow-lg"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100",
                      )}
                    >
                      <service.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{service.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {Object.entries(services).map(([key, service]) => (
                  <div
                    key={key}
                    className={cn("transition-all duration-300", activeService === key ? "block" : "hidden")}
                  >
                    <Card className="border-0 shadow-lg">
                      <CardHeader className="pb-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-xl">
                            <service.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="font-poppins font-bold text-2xl text-[#002D62]">
                              {service.title}
                            </CardTitle>
                            <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {service.services.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-[#FFB000] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="bg-gradient-to-r from-[#002D62] to-[#004080] rounded-lg p-6 text-white">
                          <h3 className="font-poppins font-semibold text-xl mb-3">Need {service.title} Services?</h3>
                          <p className="text-gray-200 mb-6">
                            Get in touch with our experts for a detailed consultation and quote tailored to your
                            specific requirements.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                              variant="secondary"
                              className="bg-[#FFB000] hover:bg-[#FFB000]/90 text-[#002D62] font-semibold"
                              asChild
                            >
                              <a href="tel:+918048544548" className="flex items-center justify-center">
                                <Phone className="w-4 h-4 mr-2" />
                                Call +91-80-48544548
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              className="bg-transparent border-white text-white hover:bg-white hover:text-[#002D62]"
                              asChild
                            >
                              <a
                                href="https://wa.me/918048544548"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center"
                              >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                WhatsApp
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl text-[#002D62] mb-4">Why Choose Our Services?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Four decades of excellence in electrical contracting with unmatched expertise and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Government Certified",
                  description: "Licensed Super Grade Electrical Contractor with all necessary approvals",
                  icon: "🏛️",
                },
                {
                  title: "Safety First",
                  description: "Zero safety incidents with strict adherence to safety protocols",
                  icon: "🛡️",
                },
                {
                  title: "Quality Assured",
                  description: "ISO standards compliance with rigorous quality control processes",
                  icon: "✅",
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock maintenance and emergency support services",
                  icon: "🕐",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="font-poppins font-semibold text-lg text-[#002D62] mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
