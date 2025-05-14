"use client";

import Image from "next/image"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#1a1a1a] text-white px-2 sm:px-8 ">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-white mb-4 font-['AkiraExpanded'] ">
            WHY CHOOSE US
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto font-[Degular] tracking-wider text-lg ">
            We only work with brands that match our extreme standards.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
          <ScrollAnimation delay={0.1} className="md:col-span-2">
            <HoverCard className="relative overflow-hidden rounded-sm h-[600px] md:h-[565px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/whychooseus/first.png"
                  alt="Certified Trainers"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10"></div>
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 text-center font-['AkiraExpanded'] ">
                  CERTIFIED TRAINERS WHO ACTUALLY TRAIN
                </h3>
                  <p className="text-gray-200 text-sm leading-relaxed text-center font-[Degular] tracking-wider text-lg ">
                  Our coaches sweat beside you. Every trainer completes 500 hours of in-gym apprenticeship before leading
                  sessions. They&apos;ll spot your deadlift at 6AM and celebrate your PR at midnight.
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>

          <div className="md:col-span-2 space-y-6">
            <ScrollAnimation delay={0.2}>
              <HoverCard className="relative overflow-hidden rounded-sm h-[300px] md:h-[270px]">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/whychooseus/second.png"
                    alt="Advanced Equipment"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10"></div>
                <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 text-center font-['AkiraExpanded']">
                    ADVANCED EQUIPMENT
                    <br />
                    THAT PUSHES BACK
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed text-center font-[Degular] tracking-wider ">
                    Olympic Eleiko bars. Competition-grade racks. Sleds with real tires – not plastic imitations. We
                    invest in tools that force adaptation, not just movement.
                  </p>
                </div>
              </HoverCard>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <HoverCard className="relative overflow-hidden rounded-sm h-[300px] md:h-[270px]">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/whychooseus/third.png"
                    alt="Post-Workout Recovery"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10"></div>
                <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 text-center font-['AkiraExpanded']">
                    POST-WORKOUT
                    <br />
                    RECOVERY SANCTUARY
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed text-center font-[Degular] tracking-wider ">
                    Our steam baths aren&apos;t spas - they&apos;re strategic tools. Lowers injury risk by 22%. Boosts next-day
                    performance. Included in all memberships
                  </p>
                </div>
              </HoverCard>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.4} className="md:col-span-2">
            <HoverCard className="relative overflow-hidden rounded-sm h-[600px] md:h-[565px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/whychooseus/fourth.png"
                  alt="Goal-Blue Printed Programs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10"></div>
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 text-center font-['AkiraExpanded']">
                  GOAL-BLUE PRINTED
                  <br />
                  PROGRAMS
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed text-center font-[Degular] tracking-wider ">
                  Whether it&apos;s 10kg fat loss or a 150kg squat, our 8-phase system tracks Progressive overload, Recovery
                  quality, Nutrition compliance
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation delay={0.1}>
            <HoverCard className="relative overflow-hidden rounded-sm h-[350px] md:h-[400px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/whychooseus/fifth.png"
                  alt="Powerlifting Meets Functional Training"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10"></div>
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 text-center font-['AkiraExpanded']">
                  POWERLIFTING MEETS
                  <br />
                  FUNCTIONAL TRAINING
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed text-center font-[Degular] tracking-wider ">
                  Our training zone is where classic powerlifting collides with brutal, functional movement. From heavy
                  compound lifts to explosive full-body circuits, we train you to dominate inside the gym
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <HoverCard className="relative overflow-hidden rounded-sm h-[350px] md:h-[400px]">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/whychooseus/sixth.png"
                  alt="Group Classes That Deliver Results"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10"></div>
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-3 text-center font-['AkiraExpanded']">
                  GROUP CLASSES THAT
                  <br />
                  DELIVER RESULTS
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed text-center font-[Degular] tracking-wider ">
                  Our group classes blend energy, community, and expert coaching to keep you motivated and moving. From
                  fat-burning Zumba to strength-building HIIT and mind-centering yoga
                </p>
              </div>
            </HoverCard>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
