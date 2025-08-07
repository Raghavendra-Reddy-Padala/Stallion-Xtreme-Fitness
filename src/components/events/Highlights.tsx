export default function Highlights() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#1a1a1a] text-white px-4 sm:px-6 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-center text-white mb-4 md:mb-6 lg:mb-10 font-['AkiraExpanded']">
          PAST EVENTS HIGHLIGHTS
        </h2>
        
        {/* YouTube Videos Section */}
        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
          <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video w-full">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/55Hdc81F-9s?si=RHKkt7had7u2lJrZ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video w-full">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/-jPO-V0e5Cs?si=MjTTPMIDUql8G8Qn" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video w-full">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/JeiLNTFxkl0?si=3WEUTnFH7YKUFzY1" 
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

        {/* Instagram Reels Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* First Instagram Reel */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/reel/DLaH9egzkiZ/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                  margin: '1px',
                  maxWidth: '100%',
                  minWidth: '280px',
                  padding: 0,
                  width: '100%'
                }}
              >
                {/* Instagram embed content placeholder */}
                <div style={{padding: '16px'}}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    color: '#666'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '48px', marginBottom: '10px'}}>📸</div>
                      <div>Instagram Reel</div>
                      <div style={{fontSize: '12px', marginTop: '5px'}}>Yoga Event Highlight</div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Second Instagram Reel - Dance Night */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/reel/DJjm8VLzskf/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                  margin: '1px',
                  maxWidth: '100%',
                  minWidth: '280px',
                  padding: 0,
                  width: '100%'
                }}
              >
                <div style={{padding: '16px'}}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    color: '#666'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '48px', marginBottom: '10px'}}>🕺</div>
                      <div>Instagram Reel</div>
                      <div style={{fontSize: '12px', marginTop: '5px'}}>Stallion Dance Night</div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>

          {/* Third Instagram Reel - Powerlifting Event */}
          <div className="flex justify-center md:col-span-2 lg:col-span-1">
            <div className="w-full max-w-sm">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink="https://www.instagram.com/reel/DIQd8XJNMjo/?utm_source=ig_embed&utm_campaign=loading" 
                data-instgrm-version="14" 
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
                  margin: '1px',
                  maxWidth: '100%',
                  minWidth: '280px',
                  padding: 0,
                  width: '100%'
                }}
              >
                <div style={{padding: '16px'}}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    color: '#666'
                  }}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '48px', marginBottom: '10px'}}>🏋️</div>
                      <div>Instagram Reel</div>
                      <div style={{fontSize: '12px', marginTop: '5px'}}>Stallion Powerlifting Event</div>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Instagram Script */}
        <script async src="//www.instagram.com/embed.js"></script>
      </div>
    </section>
  )
}