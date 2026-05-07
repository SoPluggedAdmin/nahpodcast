export function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-[#F9F8F6] overflow-hidden">
      {/* Brand Watermark - Vertical Sidebar Placement */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 select-none pointer-events-none opacity-[0.04] z-0 hidden lg:block">
        <h2
          className="rotate-90 origin-center whitespace-nowrap"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20vw', fontWeight: 400, letterSpacing: '0.1em' }}
        >
          NAH.
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="relative z-10">
          {/* Top Label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-[#A0522D]"></div>
            <span
              className="text-[#A0522D]"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase' }}
            >
              The Podcast
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Left: The Pillars Typography */}
            <div className="lg:col-span-5">
              <div className="relative">
                <h2
                  className="text-[#1A1A1A] leading-[0.9] mb-12"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: 400, letterSpacing: '-0.03em' }}
                >
                  <span className="block italic">Culture,</span>
                  <span className="block translate-x-8 lg:translate-x-16">Ambition</span>
                  <span className="block text-[#A0522D] -translate-x-2">& Faith.</span>
                </h2>

                {/* Tertiary CTA - Editorial Style */}
                <div className="mt-16 lg:mt-24">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 text-[#1A1A1A]/80 transition-all duration-500"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 400, fontStyle: 'italic' }}
                  >
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-[#1A1A1A]/10 group-hover:border-[#A0522D] group-hover:bg-[#A0522D] transition-all duration-500">
                      <svg className="w-5 h-5 transition-transform duration-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <span className="relative">
                      Catch up on the latest episode
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#A0522D] transition-all duration-500 group-hover:w-full"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: The Narrative & Visual Spread */}
            <div className="lg:col-span-7">
              <div className="max-w-xl mb-24 lg:ml-auto">
                <p
                  className="text-[#1A1A1A] mb-10"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.5 }}
                >
                  On this show, we explore what it looks like to carry our beliefs into the modern world with excellence.
                </p>
                <p
                  className="text-[#1A1A1A]/60"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.8 }}
                >
                  We’re tired of the idea that you have to be struggling or "boring" to be a believer. So we’re here to talk about it all—our lives, our passions and our walk with God—with honesty and a lot of banter.
                </p>
              </div>

              {/* Overlapping Image Composition */}
              <div className="relative pt-12">
                {/* Main Large Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm group shadow-sm transition-all duration-700">
                  <img
                    src="philosophy-1.png"
                    alt="Nina and Alma conversation"
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>

                {/* Secondary Inset Image */}
                <div className="absolute -bottom-16 -left-8 lg:-left-24 w-1/2 aspect-square overflow-hidden rounded-sm shadow-2xl border-[12px] border-[#F9F8F6] z-20 group">
                  <img
                    src="philosophy-2.png"
                    alt="Candid moment"
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>

                {/* Decorative Brand Accent */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 border border-[#A0522D]/10 rounded-full pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
