"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Logo from "../ui/Logo"
import { Menu, X, Phone, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll effect for header and auto-close menu
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Close mobile menu if it's open when user scrolls
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  // Add touch move event to close menu when swiping
  useEffect(() => {
    if (!mobileMenuOpen) return;
    
    const handleTouchMove = () => {
      // Close the menu when user swipes (touchmove event)
      setMobileMenuOpen(false);
    };
    
    // Add event listener for touch devices
    document.addEventListener('touchmove', handleTouchMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Animation variants
  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-sm" : ""}`}>
      <div className="mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none relative z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-white">
            <Link href="/" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base font-[modernist]">
              Home
            </Link>
            <Link href="/about-us" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base font-[modernist]">
              About Us
            </Link>
            <Link href="/events" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base font-[modernist]">
              Events
            </Link>
            <Link href="/branches" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base font-[modernist]">
              Branches
            </Link>
            <Link href="/stallions" className="text-white hover:text-[#e71b4b] transition text-xs md:text-base font-[modernist]">
              Stallion Classic
            </Link>
          </nav>

          {/* Contact Button - Desktop Only */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#e71b4b] text-white px-4 py-2 hover:bg-opacity-90 transition md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 top-0 z-40 bg-black/95 overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen py-16">
              {/* Logo in Mobile Menu */}
              <div className="mb-8">
                <Logo />
              </div>
              
              <motion.div 
                className="flex flex-col items-center gap-5"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/" 
                    className="text-white hover:text-[#e71b4b] transition text-xl font-[modernist]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/about-us" 
                    className="text-white hover:text-[#e71b4b] transition text-xl font-[modernist]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/events" 
                    className="text-white hover:text-[#e71b4b] transition text-xl font-[modernist]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Events
                  </Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/branches" 
                    className="text-white hover:text-[#e71b4b] transition text-xl font-[modernist]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Branches
                  </Link>
                </motion.div>
                
                <motion.div variants={menuItemVariants}>
                  <Link 
                    href="/stallions" 
                    className="text-white hover:text-[#e71b4b] transition text-xl font-[modernist]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Stallion Classic
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="pt-6 flex flex-col gap-4 items-center w-full"
                  variants={menuItemVariants}
                >
                  <Link
                    href="/contact"
                    className="bg-[#e71b4b] text-white px-8 py-3 flex items-center justify-center hover:bg-opacity-90 transition text-base font-[modernist] w-64"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  
                  <Link
                    href="tel:+123456789"
                    className="border border-white text-white px-8 py-3 flex items-center justify-center hover:bg-white/10 transition text-base w-64"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="mr-2 h-4 w-4" /> Call Us
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e71b4b] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e71b4b] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                
                {/* Twitter/X */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#e71b4b] transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  )
}