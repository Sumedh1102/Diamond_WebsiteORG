import React from 'react';
import { Leaf, ShieldCheck, Zap, Globe, Heart, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const strengths = [
  {
    icon: Zap,
    title: 'CVD Technology',
    description: 'Advanced Chemical Vapor Deposition for creating diamonds of exceptional purity and brilliance.',
  },
  {
    icon: ShieldCheck,
    title: 'IGI & GIA Certified',
    description: 'Every diamond is independently graded and certified by the world\'s most trusted gemological institutes.',
  },
  {
    icon: Globe,
    title: 'Global Distribution',
    description: 'Serving jewellers, designers, and retailers across continents with reliable supply and premium quality.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Zero-mining production with minimal carbon footprint — diamonds that are as kind to the earth as they are beautiful.',
  },
  {
    icon: Heart,
    title: 'Conflict Free',
    description: 'Every stone is ethically produced with full traceability from laboratory to showroom.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Multi-point quality checks by trained professionals ensure only the finest diamonds reach our clients.',
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#1A1A1A] overflow-hidden">

      {/* ── Why Choose Us Grid ── */}
      <div className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16 sm:mb-20 lg:mb-24">
            <div>
              <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
                Why NavKar
              </p>
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                The Benchmark
                <br />
                of <span className="font-semibold">Excellence</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-white/40 text-base sm:text-lg leading-relaxed font-light max-w-lg">
                With cutting-edge technology, uncompromising standards, and a passion
                for sustainable luxury, we deliver diamonds that exceed expectations
                at every touchpoint.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-16 sm:mb-20" />

          {/* Strengths Grid — mirrors CSR grid pattern */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 sm:p-10 transition-all duration-500 hover:bg-white/[0.03]
                    border-b border-white/10 last:border-b-0
                    ${index % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0'}
                    ${index >= 4 ? 'sm:border-b-0' : ''}
                    ${index % 3 !== 2 ? 'lg:border-r' : 'lg:border-r-0'}
                    ${index >= 3 ? 'lg:border-b-0' : 'lg:border-b'}
                  `}
                >
                  {/* Background Number */}
                  <span className="text-white/[0.04] text-[80px] sm:text-[100px] font-bold absolute top-2 right-4 leading-none select-none pointer-events-none">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-[#B88A6A]/10 border border-[#B88A6A]/20 flex items-center justify-center mb-8 group-hover:bg-[#B88A6A]/20 group-hover:border-[#B88A6A]/40 transition-all duration-500">
                    <Icon className="w-5 h-5 text-[#B88A6A]" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-white text-lg sm:text-xl font-light mb-4 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/35 text-sm sm:text-[15px] leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B88A6A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CTA Banner ── */}
      <div className="px-4 sm:px-6 lg:px-12 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden group">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop"
              alt="Diamond Collection"
              className="w-full h-[400px] sm:h-[450px] lg:h-[500px] object-cover brightness-[0.35] group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-light">
                Start Your Journey
              </p>
              <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
                Ready to Discover Your
                <br />
                <span className="font-semibold">Perfect Diamond?</span>
              </h3>
              <p className="text-white/40 text-base sm:text-lg font-light max-w-xl mb-10">
                Connect with our experts and explore our premium collection of
                lab-grown diamonds, tailored to your exact specifications.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => navigate('/Contact')}
                  className="px-8 py-4 bg-[#B88A6A] text-white rounded-full font-light text-sm tracking-wider
                             hover:bg-[#A67958] transition-all duration-300 shadow-lg shadow-[#B88A6A]/20 hover:scale-105
                             flex items-center gap-3"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/loose-diamonds')}
                  className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-light text-sm tracking-wider
                             hover:bg-white/5 transition-all duration-300 hover:scale-105"
                >
                  Explore Diamonds
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}