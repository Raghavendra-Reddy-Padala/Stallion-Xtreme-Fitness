"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "../layout/Header"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with bodybuilder */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/branches/hero.png"
          alt="Bodybuilder showing muscular back in gym"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.h1 
          className="font-['AkiraExpanded'] text-4xl sm:text-5xl md:text-7xl lg:text-5xl font-extrabold uppercase tracking-wider mb-4 leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FIND YOUR NEAREST
          <br />
          IRON TEMPLE
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-10 font-['Degular'] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pro athletes train here . So should you
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/contact"
              className="bg-[#e71b4b] text-white px-6 sm:px-8 py-2 flex items-center hover:bg-opacity-90 transition text-sm sm:text-base"
            >
              Join now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="/next-section" 
              className="border border-white text-white px-6 sm:px-8 py-2 flex items-center hover:bg-white/10 transition text-sm sm:text-base"
            >
              Explore now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
