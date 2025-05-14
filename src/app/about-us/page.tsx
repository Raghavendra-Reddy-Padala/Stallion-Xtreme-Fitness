import AboutHeroSection from "@/components/aboutus/HeroSection";
import React from "react";
import AboutUsSection from "@/components/aboutus/AboutUs";
import VisionariesSection from "@/components/aboutus/Visionaries";
import PartnersSection from "@/components/sections/PartnersSection";
import WhyChooseUsSection from "@/components/aboutus/WhyChooseUs";
import FaqSection from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

function AboutUs() {
  return (
    <div>
      <AboutHeroSection />
      <AboutUsSection/>
      <VisionariesSection/>
      <PartnersSection/>
      <WhyChooseUsSection/>
      <FaqSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default AboutUs;
