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
          src="/images/stallion/hero.png"
          alt="Bodybuilder showing muscular back in gym"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="container mx-auto px-3 sm:px-4 z-20 text-center">
        <motion.h1 
          className="font-['AkiraExpanded'] text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase tracking-wider mb-3 sm:mb-4 leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          STAGE SHOT WITH 
          <br className="block md:hidden" />
          SPOTLIGHTS
          <br />
          ON POSEDOWN
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-5 sm:mb-6 md:mb-8 lg:mb-10 font-['Degular'] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Pro athletes train here . So should you
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
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
              href='/contact'
              className="bg-[#e71b4b] text-white px-4 sm:px-6 md:px-8 py-2 flex items-center hover:bg-opacity-90 transition text-xs sm:text-sm md:text-base"
            >
              Join now <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href="https://stallionclassic.com" 
              className="border border-white text-white px-4 sm:px-6 md:px-8 py-2 flex items-center hover:bg-white/10 transition text-xs sm:text-sm md:text-base"
            >
              Stallion Classic            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
