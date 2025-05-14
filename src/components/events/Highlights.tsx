import Image from "next/image"

export default function Highlights() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-white mb-4 md:mb-6 lg:mb-10 font-['AkiraExpanded']">
          PAST EVENTS HIGHLIGHTS
        </h2>
        <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video w-full">
            <Image
              src="/images/events/vid.png"
              alt="Bodybuilder showing muscular back in gym"
              className="object-cover rounded-lg"
              width={1200}
              height={675}
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
