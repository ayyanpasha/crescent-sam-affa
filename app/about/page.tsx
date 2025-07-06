import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Calendar, Target, Eye, User, MessageCircle, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#002D62] to-[#004080] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="bg-[#FFB000]/20 text-[#FFB000] border-[#FFB000]/30 mb-6">
                Established 1984
              </Badge>
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
                About Crescent Sam Affa Enterprises
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Four decades of electrical excellence, powering Karnataka's industrial growth with unwavering commitment
                to quality, safety, and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-poppins font-bold text-3xl text-[#002D62] mb-6">Who We Are</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Crescent Sam Affa Enterprises is an electrical contracting and engineering firm, established in 1984
                    and based in Bengaluru. From our humble beginnings, we have developed into one of the eminent
                    electrical contractors in Karnataka.
                  </p>
                  <p>
                    The word "Crescent" has been originated from our ancestral business, giving fundamental purpose to
                    our name. We are registered under the Government as Licensed Super Grade Electrical Contractors &
                    Engineers.
                  </p>
                  <p>
                    Our company aims to help people adapt to the needs of a changing world. We continuously strive to
                    provide our clients with the highest level of excellence in quality, integrity, and safety through
                    productivity, teamwork, effective communication, and execution of projects by a high-quality team of
                    professionals.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-poppins font-bold text-2xl text-[#002D62]">40+</h3>
                    <p className="text-sm text-gray-600">Years of Excellence</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-poppins font-bold text-2xl text-[#002D62]">Class 1</h3>
                    <p className="text-sm text-gray-600">Licensed Contractor</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Crescent Sam Affa Enterprises Office"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#FFB000] text-[#002D62] p-6 rounded-lg shadow-lg">
                  <h4 className="font-poppins font-bold text-lg">Since 1984</h4>
                  <p className="text-sm">Powering Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl text-[#002D62] mb-4">Our Mission & Vision</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Guided by our core values and commitment to excellence in electrical engineering
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-full mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-poppins font-semibold text-xl text-[#002D62]">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 leading-relaxed">
                    To employ technological innovations with services exceeding clients' expectations at the most
                    economical method, ensuring safety, quality, and reliability in every project.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFB000] to-[#FF8C00] rounded-full mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-poppins font-semibold text-xl text-[#002D62]">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 leading-relaxed">
                    We envision a world where all mankind, even in the most remote areas, hold the power to create
                    opportunity for themselves and others through reliable energy access.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Mr. Syed Afzal - Founder"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -top-6 -right-6 bg-[#002D62] text-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-poppins font-bold text-lg">Mr. Syed Afzal</h4>
                  <p className="text-sm text-gray-300">Founder & Chairman</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <User className="w-8 h-8 text-[#FFB000] mr-3" />
                  <h2 className="font-poppins font-bold text-3xl text-[#002D62]">About Our Founder</h2>
                </div>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Mr. Syed Afzal</strong>, born in 1961, began his journey at the young age of 9, supporting
                    his elder brother Haji Syed Ismail Saheb's Madeena Bakery at No. 27, Shivaji Road, Shivaji Nagar,
                    Bangalore, while attending school.
                  </p>
                  <p>
                    In 1979, alongside the bakery, he used to home deliver bottled milk. Seeing the hardship and
                    determination of this young and dynamic individual, Late Abdul Peeran Saheb, father of P Abdul
                    Rehman Saheb (A R Electricals), suggested and enrolled him to pursue his career in electrical works.
                  </p>
                  <p>
                    He started his studies with the Industrial Training Institute and successfully completed the
                    Electrical Wireman certification in 1984. From 1984 to 1988, he worked as an Assistant Electrician,
                    gaining valuable hands-on experience.
                  </p>
                  <p>
                    His technical notes, written in a single font with black ink throughout, featuring beautiful
                    sketches and artistic handwriting, remain an inspiration to future generations. In 1989, Syed Afzal
                    started his dream career in electrical works and obtained his Class 1 Electrical Contractor License
                    from the Department of Electrical Inspectorate.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-[#FFB000]/10 rounded-lg border-l-4 border-[#FFB000]">
                  <p className="text-[#002D62] font-medium italic">
                    "From humble beginnings delivering milk to becoming a Class 1 electrical contractor - a testament to
                    determination, hard work, and the pursuit of excellence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-3xl text-[#002D62] mb-4">Visit Our Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Located in the heart of Bengaluru, we welcome you to visit our office for detailed consultations and
                project discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-poppins font-semibold text-xl text-[#002D62] flex items-center">
                      <MapPin className="w-6 h-6 text-[#FFB000] mr-3" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-[#002D62] p-3 rounded-lg flex-shrink-0">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#002D62] mb-2">Office Address</h4>
                          <p className="text-gray-600 leading-relaxed">
                            Crescent Sam Affa Building
                            <br />
                            Bengaluru, Karnataka
                            <br />
                            India - 560001
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#FFB000] p-3 rounded-lg flex-shrink-0">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#002D62] mb-2">Phone</h4>
                          <a href="tel:+918048544548" className="text-gray-600 hover:text-[#002D62] transition-colors">
                            +91-80-48544548
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#25D366] p-3 rounded-lg flex-shrink-0">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#002D62] mb-2">Email</h4>
                          <a
                            href="mailto:info@crescentsamaffa.com"
                            className="text-gray-600 hover:text-[#002D62] transition-colors"
                          >
                            info@crescentsamaffa.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-[#002D62] p-3 rounded-lg flex-shrink-0">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#002D62] mb-2">Business Hours</h4>
                          <p className="text-gray-600">
                            Monday - Saturday: 9:00 AM - 6:00 PM
                            <br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="bg-[#002D62] hover:bg-[#002D62]/90 text-white py-4 font-semibold" asChild>
                    <a href="tel:+918048544548" className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white py-4 font-semibold" asChild>
                    <a
                      href="https://wa.me/918048544548"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Directions Button */}
                <Button
                  variant="outline"
                  className="w-full border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white py-4 font-semibold"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/dir//Crescent+Sam+Affa+Building/@12.999331,77.607998,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>

              {/* Google Maps Embed */}
              <div>
                <Card className="border-0 shadow-lg h-full overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <div className="w-full h-full min-h-[500px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.5700146074355!2d77.607998!3d12.999331!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16590cdf21d3%3A0x3e0067b1375e9899!2sCrescent%20Sam%20Affa%20Building!5e0!3m2!1sen!2sus!4v1750954913778!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                        title="Crescent Sam Affa Enterprises Location"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
