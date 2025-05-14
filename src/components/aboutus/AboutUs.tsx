"use client";

import ScrollAnimation from "../ui/ScrollAnimation";

export default function AboutUsSection() {
    return (
      <section className="py-20 bg-[#f1f1f1] overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-2xl md:text-2xl font-bold uppercase tracking-wider text-center text-black mb-3 font-['AkiraExpanded']">
              ABOUT US
            </h2>
    
            <p className="text-center text-gray-800 text-xl mb-10 max-w-4xl mx-auto font-[Degular] ">
              At Stallion Xtreme Fitness, we&apos;re not just building bodies — we&apos;re building lifestyles.
            </p>
          </ScrollAnimation>
  
          <div className="flex justify-end mb-8 relative -mr-10 ">
            <div className="w-[20vw] h-0.5 bg-[#0f4166]"></div>
          </div>
  
          <ScrollAnimation delay={0.2}>
            <div className="max-w-6xl mx-auto font-[Degular] tracking-wider text-lg font-semibold ">
              <p className="text-center text-gray-800 mb-10 leading-relaxed">
                Founded by Mr. Abhilash and Mr. Suresh, Stallion Xtreme Fitness began in 2018 as a 1,500 sq ft battleground
                in Gajularamaram — no AC, no chai breaks, just raw iron and relentless effort. Today, our six branches host
                10,000+ members who share one belief: comfort is the enemy of growth.
              </p>
    
              <p className="text-center text-gray-800 leading-relaxed">
                This isn&apos;t a gym chain; it&apos;s a sweat-drenched proving ground where national powerlifters, corporate
                warriors, and future champions train side-by-side. Every rack, kettlebell, and battle rope is battle-tested
                to deliver one result: transformation. But what truly sets us apart isn&apos;t our 24/7 access or premium
                equipment — it&apos;s how we&apos;ve redefined fitness culture itself.
              </p>
            </div>
          </ScrollAnimation>
  
          <div className="flex mt-12 relative">
            <div className="w-[20vw] h-0.5 bg-[#e71b4b] -ml-10"></div>
          </div>
        </div>
      </section>
    )
  }
