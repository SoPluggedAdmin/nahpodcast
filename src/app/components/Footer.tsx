export function Footer() {
  return (
    <footer className="bg-[#F9F8F6] py-20 px-8 md:px-16 lg:px-24 border-t border-[#1A1A1A]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Brand & Copyright */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h2 
              className="text-[#1A1A1A] mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 400, letterSpacing: '-0.02em' }}
            >
              NAH.
            </h2>
            <p
              className="text-[#1A1A1A]/30"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 400, letterSpacing: '0.05em' }}
            >
              © 2026 Just Say, Nah.
            </p>
          </div>

          {/* Subscription */}
          <div className="lg:col-span-5 px-4">
            <form className="relative group max-w-sm mx-auto lg:mx-0">
              <input 
                type="email" 
                placeholder="Join the newsletter"
                className="w-full bg-transparent border-b border-[#1A1A1A]/10 py-2 focus:outline-none focus:border-[#A0522D] transition-colors duration-500 pr-10 text-[#1A1A1A]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 400 }}
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[#1A1A1A]/30 group-hover:text-[#A0522D] transition-all duration-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col items-center lg:items-end gap-6 lg:gap-4">
            <div className="flex gap-8">
              <a href="https://youtube.com" className="text-[#1A1A1A]/60 hover:text-[#A0522D] transition-colors text-[10px] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Watch</a>
              <a href="https://open.spotify.com" className="text-[#1A1A1A]/60 hover:text-[#A0522D] transition-colors text-[10px] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Listen</a>
              <a href="https://instagram.com" className="text-[#1A1A1A]/60 hover:text-[#A0522D] transition-colors text-[10px] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>Connect</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
