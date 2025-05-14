import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import LocationsSection from "@/components/sections/LocationSection";
import MoreThanGymSection from "@/components/sections/MoreThanGym";
import PartnersSection from "@/components/sections/PartnersSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TextimonialsSection";
import TransformationSection from "@/components/sections/TransformationSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <MoreThanGymSection />
      <TransformationSection />
      <PartnersSection />
      <LocationsSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
