"use client"

import { Check } from "lucide-react"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Stallion Basic",
      price: "₹ 2499",
      originalPrice: "₹3000",
      period: "/month",
      features: [
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "1 month",
      ctaText: "Join Classes",
      ctaLink: "/Plans",
    },
    {
      name: "Stallion Pro",
      price: "₹ 4499",
      originalPrice: "₹7500",
      period: "/month",
      features: [
        "Free 1 month extension",
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "3 months",
      ctaText: "Go Pro",
      ctaLink: "/plans",
    },
    {
      name: "Stallion Elite",
      price: "₹ 7999",
      originalPrice: "₹9000",
      period: "/month",
      features: [
        "Free 1.5 month extension",
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "6 months",
      ctaText: "Go Elite",
      ctaLink: "#",
    },
    {
      name: "Stallion Legacy",
      price: "₹ 11499",
      originalPrice: "₹14630",
      period: "/month",
      features: [
        "Free 2 month extension",
        "Certified Trainers",
        "Advance Equipment",
        "Powerlifting + Functional Training",
        "Goal - Oriented Training Programs",
        "Steam bath",
        "Group classes (Zumba, yoga & more)",
      ],
      duration: "12 months",
      ctaText: "Join Now",
      ctaLink: "#",
    },
  ]

  return (
    <section className="py-10 md:py-20 bg-[#262626] relative px-4 md:px-8">
      <div className="container mx-auto px-2 md:px-4 relative">
        <ScrollAnimation>
          <p className="text-xl md:text-2xl uppercase tracking-wider text-center text-white mb-1 md:mb-2 font-['AkiraExpanded'] ">
            Invest in your strongest self
          </p>
          <p className="text-center text-gray-300 mb-6 md:mb-16 font-['Degular'] tracking-wide text-sm md:text-base">No hidden fees. Cancel anytime. Results guaranteed</p>

          <div className="text-[50px] md:text-[150px] font-bold text-white uppercase text-center leading-none mb-4 md:mb-8 tracking-wider font-['AkiraExpanded']">
            Pricing
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative -mt-0 md:-mt-20 z-10">
          {pricingPlans.map((plan, index) => (
            <ScrollAnimation
              key={index}
              delay={0.1 * (index + 1)}
            >
              <HoverCard
                className="border border-white/20 bg-white/7 backdrop-blur-md rounded-lg overflow-hidden flex flex-col h-full"
                scale={1.03}
              >
                <div className="p-3 md:p-6 flex flex-col flex-grow font-['AkiraExpanded'] ">
                  <h3 className="text-base md:text-xl uppercase tracking-wider text-white mb-2 md:mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-2 md:mb-6">
                    <span className="text-lg md:text-2xl text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                    <span className="text-gray-500 ml-2 line-through text-xs md:text-sm">{plan.originalPrice}</span>
                  </div>

                  <div className="space-y-1 md:space-y-3 mb-3 md:mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center font-[Degular] tracking-wider text-xl">
                        <Check className="h-3 w-3 md:h-5 md:w-5 text-white mr-1 md:mr-2 flex-shrink-0" />
                        <span className="text-gray-300 text-xs md:text-sm my-3">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-white mb-2 md:mb-6 text-base font-[Degular] tracking-wider md:text-2xl">
                    <span className="">Duration : </span>
                    {plan.duration}
                  </div>

                  <a
                    href={plan.ctaLink}
                    className="bg-[#e71b4b] text-white py-1.5 md:py-3 px-4 rounded text-center block hover:bg-opacity-90 transition text-xs md:text-base"
                  >
                    {plan.ctaText}
                  </a>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
