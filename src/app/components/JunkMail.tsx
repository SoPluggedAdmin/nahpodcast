const mailList = [
  {
    from: "Chioma, Lagos",
    subject: "When God says wait but your biological clock is ticking",
    date: "Mar 2026",
  },
  {
    from: "Temi, Toronto",
    subject: "How to keep your faith when nothing seems to be working",
    date: "Feb 2026",
  },
  {
    from: "Yinka, London",
    subject: "The prosperity gospel vs. actual prosperity",
    date: "Feb 2026",
  },
  {
    from: "Amara, New York",
    subject: "Setting boundaries with family without the guilt",
    date: "Jan 2026",
  },
];

export function JunkMail() {
  return (
    <section id="junk-mail" className="py-24 md:py-48 px-8 md:px-16 lg:px-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
          <div className="lg:col-span-5">
            <span
              className="text-[#A0522D] block mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              #NAHFAM
            </span>
            <h2
              className="text-[#1A1A1A] mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, letterSpacing: '-0.01em', lineHeight: 1.1 }}
            >
              Junk mail.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p
              className="text-[#1A1A1A] leading-relaxed max-w-xl"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 300, letterSpacing: '0.01em', lineHeight: 1.6 }}
            >
              Taking all the things we think we know, and unpacking them to see what’s actually true and what’s just... junk.
            </p>
          </div>
        </div>

        {/* Staggered Editorial Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {mailList.map((mail, index) => (
            <div
              key={index}
              className={`group bg-white p-10 md:p-14 transition-all duration-700 hover:shadow-2xl border border-[#1A1A1A]/5 relative overflow-hidden ${index % 2 === 1 ? 'md:translate-y-16' : ''
                }`}
            >
              {/* Subtle background number */}
              <div className="absolute -right-4 -top-8 text-[#F9F8F6] select-none pointer-events-none group-hover:text-[#A0522D]/5 transition-colors duration-700" style={{ fontSize: '12rem', fontFamily: "'Cormorant Garamond', serif" }}>
                {index + 1}
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#1A1A1A]/5">
                  <span
                    className="text-[#A0522D] font-bold"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    Mail
                  </span>
                  <span
                    className="text-[#1A1A1A]/30"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 400 }}
                  >
                    {mail.date}
                  </span>
                </div>

                <h3
                  className="text-[#1A1A1A] mb-8 transition-colors duration-300 group-hover:text-[#A0522D]"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.875rem', fontWeight: 400, lineHeight: 1.2 }}
                >
                  "{mail.subject}"
                </h3>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#A0522D]/40"></div>
                  <p
                    className="text-[#1A1A1A]/60 italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.125rem', fontWeight: 400 }}
                  >
                    From {mail.from}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circular CTA Style */}
        <div className="mt-32 md:mt-48 flex justify-center">
          <button
            className="group flex flex-col items-center gap-6"
          >
            <div className="relative flex items-center justify-center w-24 h-24 rounded-full border border-[#1A1A1A]/10 group-hover:border-[#A0522D] group-hover:bg-[#A0522D] transition-all duration-500">
              <svg className="w-10 h-10 transition-transform duration-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span
              className="text-[#1A1A1A] group-hover:text-[#A0522D] transition-colors duration-500"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}
            >
              Leave us a voicemail
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
