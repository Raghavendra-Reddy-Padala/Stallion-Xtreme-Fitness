import HeroSection from "@/components/events/HeroSection";
import Highlights from "@/components/events/Highlights";
import EventsSection from "@/components/events/UpcomingEvents";
import WhyJoinUs from "@/components/events/WhyJoinUs";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FAQ";
import React from "react";

function Events() {
  return (
    <div>
      <HeroSection />
      <EventsSection />
      <Highlights/>
      <WhyJoinUs/>
      <FaqSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default Events;
