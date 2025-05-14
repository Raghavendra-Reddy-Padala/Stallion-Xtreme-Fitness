"use client";

import ScrollAnimation from "../ui/ScrollAnimation";

export default function AboutStallions() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f1f1f1] overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-xl sm:text-2xl md:text-2xl font-bold uppercase tracking-wider text-center text-black mb-2 sm:mb-3 font-['AkiraExpanded']">
            ABOUT STALLION CLASSIC
          </h2>
        </ScrollAnimation>
        
        <div className="flex justify-end mb-6 sm:mb-8 relative -mr-4 sm:-mr-6 md:-mr-10">
          <div className="w-[15vw] sm:w-[18vw] md:w-[20vw] h-0.5 bg-[#0f4166]"></div>
        </div>

        <ScrollAnimation delay={0.2}>
          <div className="max-w-6xl mx-auto font-[Degular] tracking-wider text-base sm:text-lg font-semibold">
            <p className="text-center text-gray-800 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Stallion Classic is Hyderabad&apos;s premier elite physique competition,
              where raw discipline meets the spotlight. Founded under the Stallion
              Xtreme Fitness legacy, this pro-level showdown elevates amateur
              athletes into champions across Bodybuilding, Fitness Modeling,
              Figure, and Physique divisions.
            </p>

            <p className="text-center text-gray-800 leading-relaxed">
              With judges from the IFBB and national magazines, it&apos;s the only
              stage in India where conditioning, symmetry, and stage presence are
              tested under championship lights. Winners don&apos;t just take home
              trophies—they earn sponsorships, media features, and a ticket to the
              pros. Whether you&apos;re sculpted for the camera or built for the
              platform, Stallion Classic separates the dedicated from the
              dreamers.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex mt-8 sm:mt-10 md:mt-12 relative">
          <div className="w-[15vw] sm:w-[18vw] md:w-[20vw] h-0.5 bg-[#e71b4b] -ml-4 sm:-ml-6 md:-ml-10"></div>
        </div>
      </div>
    </section>
  );
}
