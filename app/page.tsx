import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { MetricsBar } from "@/components/home/metrics-bar"
import { ClientLogos } from "@/components/home/client-logos"
import { ServicesPreview } from "@/components/home/services-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main>
        <HeroSection />
        <MetricsBar />
        <ClientLogos />
        <ServicesPreview />
      </main>
      <Footer />
    </div>
  )
}
