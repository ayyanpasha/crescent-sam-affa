import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Building, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Zap,
    title: "EHV Works",
    description:
      "Extra High Voltage installations, 220kV GIS substations, and transmission systems with BESCOM & KPTCL approvals.",
    features: ["220kV GIS Substations", "Power Transformers", "Transmission Lines", "Testing & Commissioning"],
    href: "/services#ehv-works",
  },
  {
    icon: Building,
    title: "HT & LT Works",
    description: "High Tension and Low Tension electrical systems for industrial and commercial applications.",
    features: ["HT/LT Installations", "Distribution Systems", "Preventive Maintenance", "Quality Testing"],
    href: "/services#ht-works",
  },
  {
    icon: Settings,
    title: "Government Projects",
    description: "Specialized electrical contracting services for government and public sector organizations.",
    features: ["Government Approvals", "Compliance Standards", "Public Infrastructure", "Safety Protocols"],
    href: "/services#government-works",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-[#002D62] mb-6">Our Electrical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical contracting solutions from design to commissioning, backed by 40+ years of
            expertise and government certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group flex flex-col h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-poppins font-semibold text-xl text-[#002D62] group-hover:text-[#FFB000] transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              {/* CardContent as flex container with auto margin for the button */}
              <CardContent className="pt-0 flex flex-col flex-grow">
                <div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-[#FFB000] rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button at the bottom */}
                <Button
                  variant="outline"
                  className="w-full bg-white text-[#002D62] border-[#002D62] hover:bg-[#002D62] hover:text-white group-hover:bg-[#002D62] group-hover:text-white transition-all duration-300 mt-auto"
                  asChild
                >
                  <Link href={service.href} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-[#FFB000] hover:bg-[#FFB000]/90 text-[#002D62] font-semibold px-8" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
