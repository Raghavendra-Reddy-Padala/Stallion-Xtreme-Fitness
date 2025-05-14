import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import ContactSection from '@/components/sections/ContactSection'
import FaqSection from '@/components/sections/FAQ'
import React from 'react'

function Contact() {
  return (
    <div>
        <Header/>
        <ContactSection/>
        <FaqSection/>
        <Footer/>
    </div>
  )
}

export default Contact