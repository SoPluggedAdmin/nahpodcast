export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <h1
              className="text-[#1A1A1A] mb-4 leading-[1.1]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 400, letterSpacing: '-0.01em' }}
            >
              Nina, Alma & the Holy Spirit.
            </h1>
            <p
              className="text-[#1A1A1A]/60 mb-12"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 300, fontStyle: 'italic' }}
            >
              (just say, nah.)
            </p>
              <div className="space-y-8 pt-6 border-t border-[#1A1A1A]/10">
                <div className="flex flex-wrap items-center gap-8">
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#1DB954]">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </div>
                    <span
                      className="text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#1DB954]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em' }}
                    >
                      Listen on Spotify
                    </span>
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF0000]">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <span
                      className="text-[#1A1A1A] transition-colors duration-300 group-hover:text-[#FF0000]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.02em' }}
                    >
                      Watch Live
                    </span>
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[#A0522D] mt-1">●</span>
                    <p
                      className="text-[#1A1A1A]/70"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}
                    >
                      Live on YouTube, Sundays at 6pm
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#A0522D] mt-1">●</span>
                    <p
                      className="text-[#1A1A1A]/70"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}
                    >
                      Audio podcast drops Wednesdays
                    </p>
                  </div>
                </div>
              </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/hero.png?v=8"
                alt="Nina and Alma"
                className="w-full h-full object-cover grayscale-0 contrast-100 brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
