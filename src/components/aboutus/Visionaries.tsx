"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "../ui/ScrollAnimation";
import { motion } from "framer-motion";

export default function VisionariesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#1e1e1e] text-white px-8">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">
            MEET THE VISIONARIES
          </h2>
          <p className="text-center text-gray-300 mb-10 md:mb-16 font-[Degular] tracking-wider text-lg ">
            Driven by Passion, Built on Grit.
          </p>
        </ScrollAnimation>

        {/* First Founder - Abhilash */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-12 md:mb-16">
          <ScrollAnimation delay={0.2}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-1 font-['AkiraExpanded'] ">
                ABHILASH
              </h3>
              <p className="text-gray-400 mb-4 md:mb-6 font-[Degular] ">
                The Relentless Visionary
              </p>

              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed font-[Degular] tracking-wider text-lg ">
                From training clients on the gym floor to building one of
                India&rsquo;s fastest-growing fitness empires, Abhilash&rsquo;s
                journey is fueled by pure determination. What started as a dream
                during his days as a gym trainer has now grown into Stallion
                Xtreme Fitness &ndash; a powerhouse with 6 thriving branches, a
                nationwide fitness movement, and a legacy that inspires
                thousands. Abhilash didn&rsquo;t just build a gym &mdash; he
                created a platform for transformation, community, and
                excellence. His commitment to the grind laid the foundation for
                what Stallion is today.
              </p>

              {/* <blockquote className="italic text-gray-300 border-l-4 border-[#e71b4b] pl-4 mb-4 md:mb-6 text-lg ">
                &ldquo;A gym should be judged by the transformations it creates, not the chai it serves.&rdquo;
              </blockquote> */}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="relative w-full aspect-[4/3] md:aspect-[638/467] mx-auto">
              <Image
                src="/images/aboutus/abhi.JPG"
                alt="Abhilash - Stallion xtreme Fitness Founder"
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
                src="/images/aboutus/suresh.JPG"
                alt="Suresh - Stallion Xtreme Fitness Founder"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4} className="order-1 md:order-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-white mb-1 font-['AkiraExpanded']">
                SURESH Goyal
              </h3>
              <p className="text-gray-400 mb-4 md:mb-6 font-[Degular] tracking-wider">
                 The Backbone of the Brand
              </p>

              <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed font-[Degular] tracking-wider text-lg">
                Not just an investor &mdash; Suresh Goyal is the driving force
                behind the rise of Stallion. With unmatched work ethic, business
                instinct, and a hands-on approach, Suresh has been in the
                trenches from day one. He&rsquo;s strategized, hustled, and
                built shoulder-to-shoulder with Abhilash. Suresh&rsquo;s
                leadership, discipline, and vision played an equal role in
                shaping Stallion Xtreme Fitness into a dominant brand &mdash;
                not just in fitness, but in business culture. He isn&rsquo;t
                behind the scenes &mdash; he&rsquo;s in the spotlight, earning
                every bit&nbsp;of&nbsp;the&nbsp;success.
              </p>

              {/* <blockquote className="italic text-gray-300 border-l-4 border-[#e71b4b] pl-4 mb-4 md:mb-6 text-lg">
                &ldquo;A gym should be judged by the transformations it creates, not the chai it serves.&rdquo;
              </blockquote> */}
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
  );
}
