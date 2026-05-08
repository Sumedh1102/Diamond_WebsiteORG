import React, { useState } from 'react';
import { Target, Eye, Gem, ArrowRight } from 'lucide-react';

export default function MissionVisionValues() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      id: 1,
      icon: Target,
      label: 'Purpose',
      heading: 'Our Mission',
      description: "To satisfy customer's demand and build trust by providing ethically sourced and environmentally friendly diamonds. We aim to provide the jewellery industry with eco-friendly diamonds that are more accessible and affordable for everyone.",
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&h=1000&fit=crop',
    },
    {
      id: 2,
      icon: Eye,
      label: 'Ambition',
      heading: 'Our Vision',
      description: 'The dream of owning a diamond will come true for anyone with our sustainable, ethical, and best quality diamonds. We are building one of the biggest distribution networks to make premium diamonds accessible globally.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      icon: Gem,
      label: 'Commitment',
      heading: 'Our Values',
      description: 'Uncompromising quality, total transparency, and a deep commitment to protecting our planet. Every diamond we create represents the pinnacle of human ingenuity fused with ethical responsibility.',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop',
    },
  ];

  const activeData = cards[activeCard];
  const Icon = activeData.icon;

  return (
    <section className="w-full bg-[#1A1A1A] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
            What Drives Us
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Mission, Vision
            <br />
            & <span className="font-semibold">Values</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* LEFT — Card Selector */}
          <div className="lg:col-span-5 border-t border-white/10">
            {cards.map((card, index) => {
              const CardIcon = card.icon;
              const isActive = activeCard === index;

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(index)}
                  className={`
                    group relative flex items-center justify-between
                    px-5 sm:px-8 py-7 sm:py-9
                    cursor-pointer transition-all duration-500
                    border-b border-white/10
                    ${isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'}
                  `}
                >
                  {/* Active indicator bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#B88A6A] transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                  />

                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Number */}
                    <span className={`text-xs font-light tracking-widest transition-colors duration-300 ${isActive ? 'text-[#B88A6A]' : 'text-white/20'
                      }`}>
                      0{card.id}
                    </span>

                    {/* Icon */}
                    <div className={`
                      p-3 rounded-xl transition-all duration-300
                      ${isActive
                        ? 'bg-[#B88A6A]/15 shadow-lg shadow-[#B88A6A]/5'
                        : 'bg-white/5 group-hover:bg-white/10'}
                    `}>
                      <CardIcon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${isActive ? 'text-[#B88A6A]' : 'text-white/40 group-hover:text-white/60'
                        }`} />
                    </div>

                    {/* Text */}
                    <div>
                      <span className={`block text-base sm:text-lg font-light transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                        }`}>
                        {card.heading}
                      </span>
                      <span className={`block text-[11px] sm:text-xs tracking-wider uppercase mt-1 transition-colors duration-300 ${isActive ? 'text-[#B88A6A]/80' : 'text-white/20'
                        }`}>
                        {card.label}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className={`
                    rounded-full p-2.5 sm:p-3 transition-all duration-300
                    ${isActive
                      ? 'bg-[#B88A6A] text-white shadow-lg shadow-[#B88A6A]/20'
                      : 'bg-white/5 text-white/25 group-hover:bg-white/10 group-hover:text-white/40'}
                  `}>
                    <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isActive ? 'translate-x-0.5' : ''
                      }`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — Detail Panel */}
          <div className="lg:col-span-7 relative overflow-hidden border-t lg:border-t border-white/10 lg:border-l">

            {/* Background subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B88A6A]/[0.03] via-transparent to-transparent" />

            {/* Background image (faded) */}
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                backgroundImage: `url('${activeData.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.08,
              }}
            />

            <div className="relative flex flex-col items-center justify-center p-10 sm:p-14 lg:p-20 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">

              {/* Large faded number */}
              <div className="absolute top-6 right-8 sm:top-8 sm:right-12 text-white/[0.03] text-[120px] sm:text-[160px] lg:text-[200px] font-bold leading-none select-none pointer-events-none">
                0{activeData.id}
              </div>

              {/* Content */}
              <div className="text-center max-w-lg relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88A6A]/30 rounded-full mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B88A6A]" />
                  <span className="text-[#B88A6A] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-light">
                    {activeData.label}
                  </span>
                </div>

                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#B88A6A]/10 border border-[#B88A6A]/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#B88A6A]" />
                  </div>
                </div>

                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 leading-tight">
                  {activeData.heading}
                </h3>

                <p className="text-white/50 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                  {activeData.description}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}