"use client";

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollAnimation from "../ui/ScrollAnimation"
import { motion } from "framer-motion"

export default function ClassicCtaSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-[#f1f1f1]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-xl sm:text-2xl md:text-2xl font-bold uppercase tracking-wider text-black mb-3 md:mb-4 font-['AkiraExpanded']">
              &ldquo; TO ENTER THE STAGE, VISIT STALLION CLASSIC &rdquo;
            </h2>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="text-gray-700 mb-6 sm:mb-8 md:mb-10 font-[Degular] tracking-wider text-base sm:text-lg">
              Stallion Classic operates on a dedicated platform for competitors. To register, view rules, or see prize
              details, visit our official competition website. This is where dreams become trophies.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href="https://stallionclassic.com"
                  target="_blank"
                  className="inline-flex items-center bg-[#e71b4b] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 hover:bg-opacity-90 transition font-[Degular] tracking-wider text-sm sm:text-base md:text-lg"
                >
                  GO TO STALLION CLASSIC WEBSITE <ArrowRight className="ml-1 sm:ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                </Link>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 sm:mt-12 md:mt-16">
        <div className="border-t-2 border-gray-300"></div>
      </div>
    </section>
  )
}
