import React, { useEffect, useRef, useState } from 'react';

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'NavKar Diamonds was founded with a bold vision — to make premium, ethically crafted lab-grown diamonds accessible to the world.',
    },
    {
      year: '2021',
      title: 'CVD Mastery',
      description: 'Advanced our Chemical Vapor Deposition technology to produce Type IIA diamonds, the rarest and most chemically pure category of diamonds.',
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded our distribution network to serve jewellers, designers, and retailers across multiple continents with certified IGI & GIA diamonds.',
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Established ourselves as a trusted name in the lab-grown diamond industry, delivering up to 35-carat stones with impeccable quality standards.',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#1A1A1A] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16 sm:mb-20 lg:mb-24">
          <div>
            <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
              Our Journey
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              A Story of
              <br />
              <span className="font-semibold">Innovation</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/40 text-base sm:text-lg leading-relaxed font-light max-w-lg">
              From a passionate startup to a globally recognized name in sustainable luxury,
              our journey is built on precision, ethics, and an unwavering commitment
              to crafting the perfect diamond.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16 sm:mb-20" />

        {/* Image + Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 sm:mb-28">

          {/* Left — Images */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main Image */}
              <div
                className={`relative z-10 overflow-hidden rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1975&auto=format&fit=crop"
                  alt="NavKar Diamonds Laboratory"
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000"
                />
                {/* Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <span className="text-white/60 text-xs tracking-[0.3em] uppercase font-light">Since 2020</span>
                  <h3 className="text-white text-xl sm:text-2xl font-light mt-1">NavKar Diamonds</h3>
                </div>
              </div>

              {/* Floating secondary image */}
              <div
                className={`absolute -bottom-8 -right-4 lg:-right-8 z-20 w-2/5 overflow-hidden rounded-xl shadow-2xl border-4 border-[#1A1A1A] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop"
                  alt="Diamond Close-up"
                  className="w-full aspect-square object-cover"
                />
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#B88A6A]/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right — Story Text */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-8">
            <div
              className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <p className="text-white/50 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                NavKar Diamonds is a prime manufacturer and supplier of lab-grown diamonds.
                We have partnered with trusted sources for manufacturing diamonds with highly
                trained professionals who ensure rigorous quality checks at every stage.
              </p>

              <p className="text-white/50 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light">
                Our lab diamonds represent the future of conflict-free diamonds while maintaining
                the highest standards of worker safety and environmental sustainability.
              </p>

              {/* Quote */}
              <div className="relative pl-6 border-l-2 border-[#B88A6A]/40">
                <p className="text-white text-lg sm:text-xl font-light italic leading-relaxed">
                  "Our diamonds are not just stones — they are a testament to human
                  ingenuity and our respect for the Earth."
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div>
                  <span className="text-[#B88A6A] text-xl sm:text-2xl font-light">Type IIA</span>
                  <p className="text-white/20 text-xs tracking-[0.2em] uppercase mt-1 font-light">Diamond Purity</p>
                </div>
                <div>
                  <span className="text-[#B88A6A] text-xl sm:text-2xl font-light">CVD & HPHT</span>
                  <p className="text-white/20 text-xs tracking-[0.2em] uppercase mt-1 font-light">Growth Methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {milestones.map((m, index) => (
            <div
              key={index}
              className={`group relative p-8 sm:p-10 transition-all duration-500 hover:bg-white/[0.03]
                ${index < milestones.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''}
                ${index === 1 ? 'sm:border-r-0 lg:border-r border-white/10' : ''}
                ${index < 2 ? 'sm:border-b lg:border-b-0 border-white/10' : ''}
              `}
            >
              {/* Background Number */}
              <span className="text-white/[0.04] text-[80px] sm:text-[100px] font-bold absolute top-2 right-4 leading-none select-none pointer-events-none">
                {m.year}
              </span>

              {/* Year pill */}
              <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88A6A]/30 rounded-full mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B88A6A]" />
                <span className="text-[#B88A6A] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-light">
                  {m.year}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white text-lg sm:text-xl font-light mb-4 leading-snug">
                  {m.title}
                </h3>
                <p className="text-white/35 text-sm sm:text-[15px] leading-relaxed font-light">
                  {m.description}
                </p>
              </div>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B88A6A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}