import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/sections/ContactSection'
import FaqSection from '@/components/sections/FAQ'
import AboutStallions from '@/components/stallion/AboutStallions'
import ClassicCtaSection from '@/components/stallion/CTA'
import Flex from '@/components/stallion/Flex'
import HeroSection from '@/components/stallion/HeroSection'
import React from 'react'

function Stallions() {
  return (
    <div>
        <HeroSection/>
        <AboutStallions/>
        <Flex/>
        <ClassicCtaSection/>
        <FaqSection/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default Stallions