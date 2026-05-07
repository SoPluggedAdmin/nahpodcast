const sessions = [
  {
    city: "Toronto",
    date: "June 2026",
    status: "Tickets Available",
  },
  {
    city: "Lagos",
    date: "December 2026",
    status: "Waitlist Open",
  },
  {
    city: "London",
    date: "TBD",
    status: "Coming Soon",
  },
];

export function LivingRoomSessions() {
  return (
    <section id="sessions" className="py-24 md:py-48 px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <span 
              className="text-[#A0522D] block mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              events
            </span>
            <h2
              className="text-[#1A1A1A] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              The living room <br /> sessions.
            </h2>
            <p
              className="text-[#1A1A1A] leading-relaxed max-w-md"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}
            >
              We're bringing the conversation to your city. A beautifully curated space for us to gather, unlearn, and yap.  
            </p>
            
            {/* Subtle brand mark */}
            <div className="mt-16 hidden lg:block">
              <div className="w-12 h-12 rounded-full border border-[#A0522D]/20 flex items-center justify-center text-[#A0522D] text-xs font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                NAH
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-20">
            <div className="space-y-0">
              {sessions.map((session, index) => (
                <div
                  key={index}
                  className="group relative flex items-center justify-between py-10 md:py-14 border-b border-[#1A1A1A]/10 transition-all duration-500 hover:px-6 cursor-pointer overflow-hidden"
                >
                  {/* Hover Background Slide */}
                  <div className="absolute inset-0 bg-[#F9F8F6] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

                  <div className="relative z-10 flex items-center gap-8 md:gap-24">
                    <div className="flex flex-col">
                      <span
                        className="text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#A0522D]"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1 }}
                      >
                        {session.city}
                      </span>
                      <span
                        className="text-[#1A1A1A]/40 mt-2"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                      >
                        {session.date}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-6">
                    <span
                      className="hidden md:block text-[#1A1A1A]/40 transition-colors duration-300 group-hover:text-[#A0522D]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      {session.status}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#A0522D] group-hover:border-[#A0522D] group-hover:text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#A0522D]"></div>
              <p
                className="text-[#1A1A1A]/60 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.125rem', fontWeight: 300 }}
              >
                Limited capacity. In-person only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
