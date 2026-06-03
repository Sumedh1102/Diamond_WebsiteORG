import React, { useEffect, useState } from 'react';
import diamondShapesData from '../data/diamondShapesData';
import { useNavigate } from 'react-router-dom';

const AllDiamonds = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'classicShapes', label: 'Classic Shapes' },
    { key: 'accentStones', label: 'Accent Stones' },
    { key: 'bespokeCreations', label: 'Bespoke Creations' },
  ];

  return (
    <div className="bg-[#1A1A1A] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[45vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(184, 138, 106, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]" />
        
        <div className="relative text-center px-6 z-10">
          <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
            Luxury Collections
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light tracking-widest mb-4">
            ALL DIAMONDS
          </h1>
          <p className="text-white/40 text-sm sm:text-base font-light max-w-xl mx-auto">
            Explore our curated catalog of shapes, meticulously sorted and cut to perfection.
          </p>
        </div>
      </div>

      {/* Category Navigation Pills */}
      <div className="sticky top-0 z-20 bg-[#1A1A1A]/85 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`
                px-2 py-1 rounded-full text-xs sm:text-sm font-light tracking-wider whitespace-nowrap min-w-max
                transition-all duration-500
                ${
                  activeCategory === cat.key
                    ? 'bg-white text-[#1A1A1A] shadow-lg shadow-white/5'
                    : 'text-white/50 hover:text-white border border-white/10 hover:border-white/30'
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <div className="space-y-16">
          {Object.entries(diamondShapesData)
            .filter(([key]) => activeCategory === 'all' || key === activeCategory)
            .map(([key, category]) => (
              <div key={key} className="space-y-6">
                {/* Category Header */}
                <div className="border-b border-white/5 pb-4">
                  <h2 className="text-[#B88A6A] text-lg sm:text-xl font-light tracking-widest uppercase">
                    {category.title}
                  </h2>
                  <p className="text-white/45 text-xs sm:text-sm font-light mt-1">
                    {category.subtitle}
                  </p>
                </div>

                {/* Diamond Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.diamonds.map((diamond, idx) => (
                    <div
                      key={idx}
                      className="group relative bg-gradient-to-b from-white/[0.03] to-white/[0.005] rounded-2xl border border-white/[0.05] hover:border-[#B88A6A]/30 transition-all duration-500 p-5 hover:shadow-[0_8px_30px_rgba(184,138,106,0.05)] hover:-translate-y-1"
                    >
                      <div className="relative aspect-square flex items-center justify-center p-3">
                        {/* Soft glow on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-gradient pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(184, 138, 106, 0.05) 0%, transparent 70%)',
                          }}
                        />
                        <img
                          src={diamond.image}
                          alt={diamond.name}
                          loading="lazy"
                          className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
                        />
                      </div>
                      <h3 className="text-white/60 text-xs sm:text-sm text-center mt-4 tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                        {diamond.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all duration-500 tracking-wider text-xs sm:text-sm uppercase"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default AllDiamonds;
