"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollAnimation from "../ui/ScrollAnimation"
import { motion } from "framer-motion"

export default function VisionariesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#1e1e1e] text-white px-8">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">
            MEET THE VISIONARIES
          </h2>
          <p className="text-center text-gray-300 mb-10 md:mb-16 font-[Degular] tracking-wider text-lg ">Driven by Passion, Built on Grit.</p>
        </ScrollAnimation>

        {/* First Founder - Abhilash */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16">
          <ScrollAnimation delay={0.2}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-1 font-['AkiraExpanded'] ">ABHILASH</h3>
              <p className="text-gray-400 mb-4 md:mb-6 font-[Degular] ">IFBB Pro Founder</p>
  
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed font-[Degular] tracking-wider text-lg ">
                Abhilash didn&apos;t just win bodybuilding titles – he rewrote the rules. Frustrated by &apos;aesthetic-focused&apos;
                gyms, he designed Stallion&apos;s brutal hypertrophy programs. His signature leg day has made grown men cry
                (and squat PRs soar). A lifelong fitness enthusiast, Abhilash transformed his passion into Hyderabad&apos;s
                most disruptive gym chain. After training at over 20 gyms across India, he identified a critical gap in
                the market – facilities that prioritized real results over luxury amenities.
              </p>
  
              <blockquote className="italic text-gray-300 border-l-4 border-[#e71b4b] pl-4 mb-4 md:mb-6 text-lg ">
                &ldquo;A gym should be judged by the transformations it creates, not the chai it serves.&rdquo;
              </blockquote>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.4}>
            <div className="relative w-full aspect-[4/3] md:aspect-[638/467] mx-auto">
              <Image
                src="/images/aboutus/abhi.png"
                alt="Abhilash - IFBB Pro Founder"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>

        {/* Second Founder - Suresh */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16">
          <ScrollAnimation delay={0.2} className="order-2 md:order-1">
            <div className="relative w-full aspect-[4/3] md:aspect-[638/467] mx-auto">
              <Image
                src="/images/aboutus/suresh.png"
                alt="Suresh - IFBB Pro Founder"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.4} className="order-1 md:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-1 font-['AkiraExpanded']">SURESH</h3>
              <p className="text-gray-400 mb-4 md:mb-6 font-[Degular] tracking-wider">IFBB Pro Founder</p>
  
              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed font-[Degular] tracking-wider text-lg">
                Abhilash didn&apos;t just win bodybuilding titles – he rewrote the rules. Frustrated by &apos;aesthetic-focused&apos;
                gyms, he designed Stallion&apos;s brutal hypertrophy programs. His signature leg day has made grown men cry
                (and squat PRs soar). A lifelong fitness enthusiast, Abhilash transformed his passion into Hyderabad&apos;s
                most disruptive gym chain. After training at over 20 gyms across India, he identified a critical gap in
                the market – facilities that prioritized real results over luxury amenities.
              </p>
  
              <blockquote className="italic text-gray-300 border-l-4 border-[#e71b4b] pl-4 mb-4 md:mb-6 text-lg">
                &ldquo;A gym should be judged by the transformations it creates, not the chai it serves.&rdquo;
              </blockquote>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom tagline and CTA */}
        <ScrollAnimation delay={0.2}>
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-6 md:mb-8 font-['AkiraExpanded']">
              TWO MEN. ONE OBSESSION. ZERO COMPROMISES.
            </h3>
  
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#e71b4b] text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-none hover:bg-opacity-90 transition text-sm sm:text-base"
              >
                JOIN NOW <ArrowRight className="ml-1.5 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </motion.div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
