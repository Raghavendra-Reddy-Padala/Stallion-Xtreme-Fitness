"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "../layout/Header"; // Using your improved Header component
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // Check if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  // State for promo banner
  const [showPromo, setShowPromo] = useState(true);
  
  useEffect(() => {
    // Set mobile state on client-side
    setIsMobile(window.innerWidth < 768);
    
    // Update on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Auto-hide promo after 15 seconds
    const promoTimer = setTimeout(() => {
      setShowPromo(false);
    }, 15000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(promoTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with bodybuilder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.png"
          alt="Bodybuilder showing muscular back in gym"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Invisible anchor for smooth scrolling */}
      <div id="next-section" className="absolute bottom-0"></div>

      {/* Header - Using your improved Header component */}
      <Header />

      {/* Hero Content - Mobile optimized */}
      <div className="container mx-auto px-4 md:px-6 z-20 text-center mt-24 md:mt-0">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="font-['AkiraExpanded'] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase tracking-wider mb-3 md:mb-4 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {isMobile ? (
              <>
                Unleash<br />your inner<br />stallion
              </>
            ) : (
              <>
                Unleash your inner<br />stallion
              </>
            )}
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-['Degular'] text-white max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Train Like an Athlete, Look Like a Champion
          </motion.p>
          
          <motion.div 
            className={`flex ${isMobile ? 'flex-col w-full' : 'flex-wrap'} justify-center gap-4 md:gap-6`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={isMobile ? "w-full" : ""}
            >
              <Link
                href="/contact"
                className={`bg-[#e71b4b] text-white px-6 py-3 flex items-center ${isMobile ? 'justify-center w-full' : ''} hover:bg-opacity-90 transition text-sm sm:text-base`}
              >
                Join now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={isMobile ? "w-full" : ""}
            >
              <Link 
                href="#next-section" 
                className={`border border-white text-white px-6 py-3 flex items-center ${isMobile ? 'justify-center w-full' : ''} hover:bg-white/10 transition text-sm sm:text-base`}
                onClick={(e) => {
                  e.preventDefault();
                  const nextSection = document.getElementById('next-section');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore now
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Mobile-only quick access cards */}
          {isMobile && (
            <motion.div 
              className="w-full mt-12 grid grid-cols-2 gap-3 px-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/events" className="bg-black/70 backdrop-blur-sm border border-white/20 p-3 text-center hover:bg-black/80 transition">
                <span className="text-xs uppercase tracking-wider text-white/80">Upcoming</span>
                <h3 className="text-base font-medium text-white">Events</h3>
              </Link>
              
              <Link href="/branches" className="bg-black/70 backdrop-blur-sm border border-white/20 p-3 text-center hover:bg-black/80 transition">
                <span className="text-xs uppercase tracking-wider text-white/80">Our</span>
                <h3 className="text-base font-medium text-white">Branches</h3>
              </Link>
             
            </motion.div>
          )}
          
          {/* Mobile swipe indicator */}
          {isMobile && (
            <motion.div 
              className="absolute bottom-6 left-0 right-0 flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                delay: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {/* <div className="flex flex-col items-center">
                <span className="text-xs text-white/70 mb-1">Swipe for more</span>
                <svg width="36" height="12" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L18 10L35 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div> */}
            </motion.div>
          )}
          
          {
  showPromo && (
    <motion.div 
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4 bg-white border border-gray-200 rounded-lg shadow-xl z-30 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        delay: 3
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      key="promo-banner"
    >
      {/* Close button positioned absolutely at top-right */}
      <button 
        onClick={() => setShowPromo(false)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-all duration-200 z-10"
        aria-label="Close promotion"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Accent bar */}
      <div className="h-1 bg-[#e71b4b] w-full"></div>
      
      {/* Content */}
      <div className="p-5 pr-10">
        <div className="mb-4">
          <h3 className="text-gray-900 font-semibold text-lg mb-2">
            Stallion Yoga Event
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Join us for an exceptional yoga experience. Limited seats available.
          </p>
        </div>
        
        <Link 
          href="/events/yoga-event" 
          className="inline-block bg-[#e71b4b] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#d1163f] transition-colors duration-200 shadow-sm"
        >
          Register Now
        </Link>
      </div>
    </motion.div>
  )
}
        </motion.div>
      </div>
    </section>
  );
}