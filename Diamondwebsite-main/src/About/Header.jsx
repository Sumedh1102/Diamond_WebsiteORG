import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function AboutHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.3) saturate(0.8)',
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-4xl">

          {/* Label */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#B88A6A]" />
              <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase font-light">
                About NavKar Diamonds
              </p>
            </div>
          </div>

          {/* Heading */}
          <h1
            className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] mb-8 sm:mb-10 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            Where Science
            <br />
            Meets{' '}
            <span className="font-semibold">Brilliance</span>
          </h1>

          {/* Description */}
          <p
            className={`text-white/40 text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-2xl mb-12 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            A celebrated manufacturer specializing in Type IIA lab-grown diamonds,
            crafted through advanced CVD technology — where beauty meets
            sustainability and ethics.
          </p>

          {/* Stats Row */}
          <div
            className={`flex flex-wrap gap-8 sm:gap-12 lg:gap-16 transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {[
              { value: '2020', label: 'Established' },
              { value: '50+', label: 'Global Partners' },
              { value: '35ct', label: 'Max Carat Size' },
              { value: '100%', label: 'Conflict Free' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <span className="block text-white text-2xl sm:text-3xl lg:text-4xl font-light group-hover:text-[#B88A6A] transition-colors duration-300">
                  {stat.value}
                </span>
                <span className="block text-white/20 text-[11px] sm:text-xs tracking-[0.2em] uppercase mt-2 font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-3">
        <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/20 animate-bounce" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#1A1A1A] to-transparent z-[2]" />
    </section>
  );
}