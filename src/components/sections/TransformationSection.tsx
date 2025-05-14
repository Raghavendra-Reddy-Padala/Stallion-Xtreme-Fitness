"use client"

import Image from "next/image"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"

export default function TransformationSection() {
  return (
    <section className="py-16 md:py-20 bg-[#262626] px-4 md:px-6 pb-20 md:pb-30">
      <div className="container mx-auto px-2 md:px-4">
        <ScrollAnimation>
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider text-center text-white mb-3 font-['AkiraExpanded']">
            Your transformation starts here
          </h2>
          <p className="text-center text-gray-300 mb-10 md:mb-16 max-w-2xl mx-auto font-[Degular] text-base md:text-lg tracking-wider">
            Tailored programs for every fitness level—from first-timers to elite athletes.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* Program 1 - Stallion Strength */}
          <ScrollAnimation delay={0.1}>
            <HoverCard className="relative overflow-hidden group aspect-[418/532]">
              <Image src="/images/transformation/strength.png" alt="Stallion Strength" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">Stallion Strength</h3>
                <p className="text-gray-200 text-sm md:text-lg tracking-wider font-[Degular]">
                  Build raw power with Olympic lifts, deadlifts, and our signature strength protocols
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>

          {/* Program 2 - HIIT Inferno */}
          <ScrollAnimation delay={0.2}>
            <HoverCard className="relative overflow-hidden group aspect-[418/532]">
              <Image src="/images/transformation/inferno.png" alt="HIIT Inferno" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">HIIT Inferno</h3>
                <p className="text-gray-200 text-sm md:text-lg tracking-wider font-[Degular]">
                  Torch fat in 30 mins with battle ropes, sled pushes, and metabolic conditioning
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>

          {/* Program 3 - Functional Warrior */}
          <ScrollAnimation delay={0.3}>
            <HoverCard className="relative overflow-hidden group aspect-[418/532]">
              <Image
                src="/images/transformation/warrior.png"
                alt="Functional Warrior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">Functional Warrior</h3>
                <p className="text-gray-200 text-sm md:text-lg tracking-wider font-[Degular]">
                  Train like an athlete—agility drills, sandbag work, and real-world mobility
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>

          {/* Program 4 - Boxing Conditioning */}
          <ScrollAnimation delay={0.4}>
            <HoverCard className="relative overflow-hidden group aspect-[418/532]">
              <Image
                src="/images/transformation/boxing.png"
                alt="Boxing Conditioning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">Boxing Conditioning</h3>
                <p className="text-gray-200 text-sm md:text-lg tracking-wider font-[Degular]">
                  Combines heavy bag work, footwork drills, and fight-ready endurance training
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>

          {/* Program 5 - Mobility Mastery */}
          <ScrollAnimation delay={0.5}>
            <HoverCard className="relative overflow-hidden group aspect-[418/532]">
              <Image src="/images/transformation/mobility.png" alt="Mobility Mastery" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">Mobility Mastery</h3>
                <p className="text-gray-200 text-sm md:text-lg tracking-wider font-[Degular]">
                  Recover smarter with guided stretching, yoga flows, and injury prevention
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>

          {/* Program 6 - Elite 1:1 Coaching */}
          <ScrollAnimation delay={0.6}>
            <HoverCard className="relative overflow-hidden group aspect-[418/532]">
              <Image src="/images/transformation/coaching.png" alt="Elite 1:1 Coaching" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">Elite 1:1 Coaching</h3>
                <p className="text-gray-200 text-sm md:text-lg tracking-wider font-[Degular]">
                  Fully customized plans with your dedicated trainer (nutrition included)
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
