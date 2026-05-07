import React from 'react';

export function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 160; // Approximate height of the stacked navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="w-full bg-[#F9F8F6] pt-12 pb-6 border-b border-[#1A1A1A]/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        {/* Logo Mark Section */}
        <a 
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="mb-10 group cursor-pointer"
        >
          <div className="relative w-20 h-20 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center transition-all duration-700 group-hover:border-[#A0522D]/40 group-hover:scale-105">
            <div className="absolute inset-1 rounded-full border border-[#1A1A1A]/5"></div>
            <span 
              className="text-[#1A1A1A] text-2xl tracking-tighter relative z-10"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              NAH.
            </span>
          </div>
        </a>

        {/* Horizontal Divider Line (Subtle) */}
        <div className="w-full h-[1px] bg-[#1A1A1A]/5 mb-8"></div>

        {/* Links Section */}
        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center">
          {[
            { name: 'Philosophy', id: 'philosophy' },
            { name: '#NAHFAM', id: 'junk-mail' },
            { name: 'Events', id: 'sessions' },
            { name: 'YouTube', id: 'youtube', external: 'https://youtube.com' },
            { name: 'Spotify', id: 'spotify', external: 'https://open.spotify.com' },
            { name: 'Voicemail', id: 'junk-mail' },
          ].map((link, index, array) => (
            <React.Fragment key={link.name}>
              <a
                href={link.external || `#${link.id}`}
                onClick={(e) => !link.external && scrollToSection(e, link.id)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-all duration-300 text-[10px] tracking-[0.25em] uppercase font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.name}
              </a>
              {index < array.length - 1 && (
                <span className="text-[#1A1A1A]/20 text-[8px]">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
