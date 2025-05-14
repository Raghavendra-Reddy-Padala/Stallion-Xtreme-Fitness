"use client"

import Image from "next/image"
import ScrollAnimation, { HoverCard } from "../ui/ScrollAnimation"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Paul K",
      title: "Fitness Influencer",
      image: "/images/testimonials/jake.png",
      quote: "Lost 28lbs of fat in 12 weeks. The trainers don't let you cheat – even when you want to.",
      stars: 5,
    },
    {
      name: "Syra",
      title: "Make up artist",
      image: "/images/testimonials/syra.png",
      quote: "I spend 10-hour days making others look fierce—Stallion Extreme is where I unleash my own strength.",
      stars: 5,
    },
    {
      name: "Krishna",
      title: "Footballer",
      image: "/images/testimonials/krishna.png",
      quote:
        "This gym took my game from good to lethal. Coach explosive leg circuits added 3 yards to my sprint speed.",
      stars: 5,
    },
  ]

  // Calculate aspect ratio class for the cards (418:527)
  const aspectRatio = 418 / 527

  return (
    <section className="py-12 md:py-20 bg-[url('/images/testimonials/bg.png')] bg-cover bg-center relative px-4 md:px-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center text-white mb-2 font-['AkiraExpanded']">
            Don&apos;t take our word for it
          </h2>
          <p className="text-center text-white mb-6 tracking-wider text-base md:text-lg font-['Degular']">Hear from the Stallion herd.</p>

          <div className="flex flex-col justify-start px-4 md:px-12 mb-8 md:mb-12">
            <div className="bg-[#e71b4b] px-4 md:px-6 md:pl-8 py-2 text-white font-semibold inline-block w-auto md:w-54">Client Testimonials</div>
            <div className="w-0 h-0 ml-4 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#e71b4b]"></div>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={0.2 * (index + 1)}>
              <HoverCard className="h-full">
                <div
                  className="border border-white/30 bg-white/10 p-4 md:p-6 flex flex-col h-full"
                  style={{ 
                    backdropFilter: "blur(40px)",
                    aspectRatio: `${aspectRatio}`,
                    width: "100%"
                  }}
                >
                  <div className="mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 md:mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-white text-base md:text-lg">-{testimonial.name}</h4>
                    <p className="text-sm md:text-md text-gray-300">{testimonial.title}</p>
                  </div>

                  <div className="mb-auto">
                    <span className="text-6xl md:text-9xl font-bold text-white font-serif leading-none block -mb-4 md:-mb-8">&ldquo;</span>
                    <p className="text-white text-lg md:text-2xl leading-relaxed">{testimonial.quote}</p>
                  </div>

                  <div className="flex pb-2 md:pb-4">
                    {Array(testimonial.stars)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl md:text-4xl">
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              </HoverCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
