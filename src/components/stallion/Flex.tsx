"use client";

import React from 'react'
import Image from "next/image"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"
import CountTicker from "../ui/CountTicker"

function Flex() {
  const galleryImages = [
    {
      src: "/images/stallion/first.png",
      alt: "Bodybuilder front pose on competition stage",
    },
    {
      src: "/images/stallion/second.png",
      alt: "Bodybuilder double bicep pose with gold skin",
    },
    {
      src: "/images/stallion/third.png",
      alt: "Bodybuilder back double bicep pose with red lighting",
    },
    {
      src: "/images/stallion/fourth.png",
      alt: "Bodybuilder front double bicep pose with blue posing trunks",
    },
    {
      src: "/images/stallion/fifth.png",
      alt: "Bodybuilder side chest pose on competition stage",
    },
    {
      src: "/images/stallion/sixth.png",
      alt: "Bodybuilder victory pose with arms raised",
    },
  ]

  const stats = [
    { label: "EVENTS", value: "100+", numericValue: 100 },
    { label: "PARTICIPANTS", value: "1000+", numericValue: 1000 },
    { label: "TEAM MEMBERS", value: "500+", numericValue: 500 },
    { label: "COLLABORATIONS", value: "50+", numericValue: 50 },
  ]

  return (
    <section className="py-6 sm:py-8 md:py-10 bg-[#1a1a1a] relative px-4 sm:px-6 md:px-8">
      <div className="container mx-auto px-2 sm:px-3 md:px-4 py-4 sm:py-5 md:py-6">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <ScrollAnimation key={index} delay={0.1 * index}>
              <HoverCard className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats Bar */}
        <ScrollAnimation delay={0.3} className="relative z-10">
          <div className="bg-white/10 py-5 sm:py-6 md:py-8 rounded-lg mt-4 sm:-mt-8 md:-mt-16 backdrop-blur-xl shadow-lg font-['AkiraExpanded']">
            <div className="container mx-auto px-2 sm:px-3 md:px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
                {stats.map((stat, index) => (
                  <ScrollAnimation key={index} delay={0.1 * (index + 1)}>
                    <div className="text-white">
                      <div className="text-sm sm:text-base md:text-lg uppercase tracking-wider mb-1 sm:mb-2">{stat.label}</div>
                      <CountTicker
                        end={stat.numericValue}
                        suffix="+"
                        duration={2}
                        delay={0.5 + (index * 0.15)}
                        className="text-xl sm:text-2xl md:text-3xl font-bold"
                      />
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Flex