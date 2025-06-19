export default function Highlights() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-white mb-4 md:mb-6 lg:mb-10 font-['AkiraExpanded']">
          PAST EVENTS HIGHLIGHTS
        </h2>
        <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video w-full">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/B5qSKp4cBik?si=Q3VtPR6iyn5LWkBv" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}