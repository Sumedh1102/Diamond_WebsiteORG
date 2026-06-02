import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import diamondShapesData from '../data/diamondShapesData';

const DiamondShapes = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const categories = [
    { key: 'all', label: 'All Shapes' },
    { key: 'classicShapes', label: 'Classic' },
    { key: 'accentStones', label: 'Accent' },
    { key: 'bespokeCreations', label: 'Bespoke' },
  ];

  const filteredCategories =
    activeCategory === 'all'
      ? Object.entries(diamondShapesData)
      : Object.entries(diamondShapesData).filter(([key]) => key === activeCategory);

  return (
    <div className="bg-[#1A1A1A] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(184, 138, 106, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(184, 138, 106, 0.05) 0%, transparent 50%)',
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />

        <div className="relative text-center px-6">
          <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-light animate-fadeIn">
            Explore Our Collection
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-light tracking-widest mb-4">
            DIAMOND SHAPES
          </h1>
          <p className="text-white/50 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto">
            Discover our complete range of diamond cuts — from timeless classics to bespoke artistry.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-20 bg-[#1A1A1A]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`
                  px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-light tracking-wider
                  transition-all duration-500 whitespace-nowrap flex-shrink-0
                  ${
                    activeCategory === cat.key
                      ? 'bg-white text-[#1A1A1A]'
                      : 'text-white/50 hover:text-white border border-white/10 hover:border-white/30'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Diamond Categories */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
          {filteredCategories.map(([key, category], catIndex) => {
            const isVisible = visibleSections.has(catIndex);
            return (
              <div
                key={key}
                ref={(el) => (sectionRefs.current[catIndex] = el)}
                className={`
                  transition-all duration-1000
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
                `}
              >
                {/* Category Header */}
                <div className="text-center mb-12 sm:mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-transparent to-[#B88A6A]/40" />
                    <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase font-light">
                      {key === 'classicShapes'
                        ? '01 — Classic'
                        : key === 'accentStones'
                        ? '02 — Accent'
                        : '03 — Bespoke'}
                    </p>
                    <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-transparent to-[#B88A6A]/40" />
                  </div>
                  <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-4">
                    {category.title}
                  </h2>
                  <p className="text-white/40 text-base sm:text-lg font-light max-w-xl mx-auto">
                    {category.subtitle}
                  </p>
                </div>

                {/* Diamond Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
                  {category.diamonds.map((diamond, index) => (
                    <div
                      key={diamond.name}
                      className="group relative"
                      style={{
                        animationDelay: `${index * 60}ms`,
                      }}
                    >
                      <div
                        className="
                          relative overflow-hidden rounded-2xl
                          bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                          border border-white/[0.06]
                          hover:border-[#B88A6A]/30
                          transition-all duration-500
                          hover:shadow-[0_8px_40px_rgba(184,138,106,0.08)]
                          hover:-translate-y-1
                        "
                      >
                        {/* Image container */}
                        <div className="relative aspect-square p-5 sm:p-6 md:p-8 flex items-center justify-center">
                          {/* Subtle glow on hover */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-gradient pointer-events-none"
                            style={{
                              background: 'radial-gradient(circle at 50% 50%, rgba(184, 138, 106, 0.06) 0%, transparent 70%)',
                            }}
                          />
                          <img
                            src={diamond.image}
                            alt={diamond.name}
                            loading="lazy"
                            className="
                              w-full h-full object-contain
                              transition-all duration-700
                              group-hover:scale-110
                              filter
                              drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]
                            "
                          />
                        </div>

                        {/* Name */}
                        <div className="px-3 pb-4 sm:pb-5 text-center">
                          <h3 className="text-white/70 text-xs sm:text-sm font-light tracking-[0.15em] uppercase group-hover:text-white transition-colors duration-500">
                            {diamond.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full pb-20 sm:pb-28 lg:pb-32 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 p-10 sm:p-14 lg:p-16 text-center">
            {/* Decorative elements */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(184, 138, 106, 0.15) 0%, transparent 70%)',
              }}
            />
            <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light relative">
              Custom Orders
            </p>
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-light mb-6 relative">
              Can't find your shape?
              <br />
              <span className="font-semibold">We'll craft it for you.</span>
            </h3>
            <p className="text-white/40 text-base sm:text-lg font-light mb-10 max-w-lg mx-auto relative">
              Our artisans can create any diamond shape you envision. From concept to finished stone in 30 days.
            </p>
            <button
              onClick={() => navigate('/Contact')}
              className="
                relative px-10 sm:px-12 py-4 bg-white text-[#1A1A1A] rounded-full
                font-medium text-sm sm:text-base tracking-wider uppercase
                hover:bg-[#B88A6A] hover:text-white
                transition-all duration-500
                hover:shadow-[0_4px_30px_rgba(184,138,106,0.3)]
              "
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DiamondShapes;
