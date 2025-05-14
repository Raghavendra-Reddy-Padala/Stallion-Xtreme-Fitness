"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"

export default function MoreThanGymSection() {
  return (
    <section className="py-10 sm:py-0 bg-[#f4f4f4] px-4 md:px-8">
      <div className="mx-auto px-2 md:px-4 py-6 md:py-0">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <ScrollAnimation>
              <div className="flex flex-col relative">
                {/* Top div with red vertical bars */}
                <div className="h-[20vh] w-full relative">
                  <div className="absolute left-0 bottom-0 w-10 md:w-16 flex space-x-1 md:space-x-2">
                    <div className="bg-[#e71b4b] w-5 md:w-10  h-[20vh] "></div>
                    <div className="bg-[#e71b4b] w-5 md:w-10 h-[20vh]"></div>
                  </div>
                </div>
                
                {/* Middle div with text content */}
                <div className="w-full">
                  <h2 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-wider mb-1 pt-6 md:pt-8 font-['AkiraExpanded'] ">More than a gym</h2>
                  <h3 className="text-2xl md:text-4xl font-bold font-['AkiraExpanded'] uppercase tracking-wider mb-4 md:mb-6 text-outline-transparent">
                    A home for champion
                  </h3>

                  <p className="text-gray-800 mb-6 md:mb-8 text-base md:text-xl font-['Degular']">
                    Founded by Mr. Abhilash and, Stallion Xtreme Fitness began in 2018 as a 1,500 sq ft battleground in
                    Gajularamaram - no AC, no chai breaks, just raw iron and relentless effort. Today, our six branches host
                    10,000+ members who share one belief: comfort is the enemy of growth. This isn&apos;t a gym chain; it&apos;s a
                    sweat-drenched proving ground where national powerlifters, corporate warriors, and future champions
                    train side-by-side. Every rack, kettlebell, and battle rope is battle-tested to deliver one result:
                    transformation. But what truly sets us apart isn&apos;t our 24/7 access or premium equipment - it&apos;s how we&apos;ve
                    redefined fitness culture itself.
                  </p>
                </div>
                
                {/* Bottom div with blue vertical bars */}
                <div className="h-[20vh] w-full relative">
                  <div className="absolute left-0 top-0 w-10 md:w-16 flex space-x-1 md:space-x-2">
                    <div className="bg-[#0f4166] w-5 md:w-10 h-[20vh]"></div>
                    <div className="bg-[#0f4166] w-5 md:w-10 h-[20vh]"></div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
    
            {/* Right column remains unchanged */}
            <ScrollAnimation delay={0.2}>
              <div className="relative py-6">
                {/* Know More button positioned above the image */}
                <div className="flex justify-end mb-4">
                  <HoverCard>
                    <Link
                      href="/about-us"
                      className="bg-[#e71b4b] text-white px-6 md:px-8 py-2 flex items-center hover:bg-opacity-90 transition text-sm md:text-base"
                    >
                      Know More <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
                    </Link>
                  </HoverCard>
                </div>
                
                {/* Modern Z-shaped image layout */}
                <div className="relative h-[350px] md:h-[600px] w-full">
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/about/two.png"
                      alt="Fitness training collage"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
