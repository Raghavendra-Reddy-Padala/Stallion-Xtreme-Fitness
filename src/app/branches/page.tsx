import HeroSection from '@/components/branches/HeroSection'
import Locations from '@/components/branches/Locations'
import Footer from '@/components/layout/Footer'
import ContactSection from '@/components/sections/ContactSection'
import FaqSection from '@/components/sections/FAQ'
import React from 'react'

function Branches() {
  return (
    <div>
      <HeroSection/>
      <Locations/>
      <FaqSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Branches