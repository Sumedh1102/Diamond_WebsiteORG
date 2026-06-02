import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const colorsData = [
  {
    id: "pink",
    name: "Pink Diamond",
    color: "Pink",
    geology: "Rare and romantic, formed by plastic deformation",
    description: "Less than 0.01% of all gem-quality diamonds are fancy pink, which makes them highly coveted. The hue is created by intense heat and pressure deep within the Earth causing the diamond's crystal lattice to deform, absorbing green light and reflecting a beautiful range of romantic pinks.",
    styles: {
      "--color-primary": "#FF8DA1",
      "--color-secondary": "#FF4B72",
      "--color-tertiary": "#D02C50",
      "--color-light": "#FFF0F2",
      "--color-dark": "#A81837",
      "--color-stroke": "#FFAEC1",
      "--glow-color": "rgba(255, 75, 114, 0.45)",
      "background": "radial-gradient(circle, rgba(255,141,161,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "blue",
    name: "Blue Diamond",
    color: "Blue",
    geology: "Caused by boron impurities, extremely valuable",
    description: "Extremely rare and prestigious. The exquisite blue hue is caused by tiny amounts of boron trapped in the carbon structure during formation, absorbing red, yellow, and green light while refracting deep ocean blues and sky reflections.",
    styles: {
      "--color-primary": "#7DD3FC",
      "--color-secondary": "#2563EB",
      "--color-tertiary": "#1D4ED8",
      "--color-light": "#E0F2FE",
      "--color-dark": "#1E3A8A",
      "--color-stroke": "#93C5FD",
      "--glow-color": "rgba(37, 99, 235, 0.45)",
      "background": "radial-gradient(circle, rgba(125,211,252,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "yellow",
    name: "Yellow Diamond",
    color: "Yellow",
    geology: "Most common fancy color, caused by nitrogen",
    description: "Also known as Canary diamonds. Their bright, cheerful tone is caused by nitrogen atoms substituting for carbon in the crystal structure, absorbing blue light and yielding a magnificent, sunny spectrum of fancy colors.",
    styles: {
      "--color-primary": "#FDE047",
      "--color-secondary": "#EAB308",
      "--color-tertiary": "#CA8A04",
      "--color-light": "#FEF9C3",
      "--color-dark": "#854D0E",
      "--color-stroke": "#FEF08A",
      "--glow-color": "rgba(234, 179, 8, 0.45)",
      "background": "radial-gradient(circle, rgba(253,224,71,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "green",
    name: "Green Diamond",
    color: "Green",
    geology: "Natural radiation exposure creates this color",
    description: "Formed when diamonds are exposed to natural alpha, beta, or gamma radiation from radioactive rocks near the Earth's surface during the final stages of geological cooling. This knocks carbon atoms out of place, creating a gorgeous green hue.",
    styles: {
      "--color-primary": "#6EE7B7",
      "--color-secondary": "#10B981",
      "--color-tertiary": "#047857",
      "--color-light": "#D1FAE5",
      "--color-dark": "#064E3B",
      "--color-stroke": "#A7F3D0",
      "--glow-color": "rgba(16, 185, 129, 0.45)",
      "background": "radial-gradient(circle, rgba(110,231,183,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "orange",
    name: "Orange Diamond",
    color: "Orange",
    geology: "Combination of nitrogen and structural defects",
    description: "Pure orange diamonds, sometimes called fire diamonds, are exceptionally rare. Their warm, intense color is a fascinating blend of nitrogen impurities coupled with specific lattice distortions formed during deep crust crystallization.",
    styles: {
      "--color-primary": "#FDBA74",
      "--color-secondary": "#F97316",
      "--color-tertiary": "#C2410C",
      "--color-light": "#FFEDD5",
      "--color-dark": "#7C2D12",
      "--color-stroke": "#FED7AA",
      "--glow-color": "rgba(249, 115, 22, 0.45)",
      "background": "radial-gradient(circle, rgba(253,186,116,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "red",
    name: "Red Diamond",
    color: "Red",
    geology: "Rarest of all diamond colors",
    description: "The absolute pinnacle of gemological rarity. Only a handful of pure red diamonds exist in the world. Like pinks, they are created by severe lattice deforming under extreme tectonic pressure, resulting in an incredibly intense and vibrant crimson glow.",
    styles: {
      "--color-primary": "#FCA5A5",
      "--color-secondary": "#EF4444",
      "--color-tertiary": "#B91C1C",
      "--color-light": "#FEE2E2",
      "--color-dark": "#7F1D1D",
      "--color-stroke": "#FECACA",
      "--glow-color": "rgba(239, 68, 68, 0.45)",
      "background": "radial-gradient(circle, rgba(252,165,165,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "purple",
    name: "Purple Diamond",
    color: "Purple",
    geology: "Caused by hydrogen and boron impurities",
    description: "Rare and mysterious, these diamonds draw their sophisticated violet-to-orchid hues from an intersection of high hydrogen concentrations alongside traces of boron and lattice anomalies inside the crystalline matrix.",
    styles: {
      "--color-primary": "#D8B4FE",
      "--color-secondary": "#A855F7",
      "--color-tertiary": "#7E22CE",
      "--color-light": "#F3E8FF",
      "--color-dark": "#581C87",
      "--color-stroke": "#E9D5FF",
      "--glow-color": "rgba(168, 85, 247, 0.45)",
      "background": "radial-gradient(circle, rgba(216,180,254,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "brown",
    name: "Brown Diamond",
    color: "Brown",
    geology: "Also known as champagne or cognac diamonds",
    description: "Known in modern fine jewelry as Champagne, Cognac, or Chocolate diamonds. They exhibit rich, earthy, luxurious metallic colors created by internal graining caused by plastic deformation of the carbon lattice.",
    styles: {
      "--color-primary": "#DBC1AC",
      "--color-secondary": "#967B56",
      "--color-tertiary": "#6E4F32",
      "--color-light": "#ECE0D1",
      "--color-dark": "#3E2723",
      "--color-stroke": "#C39B78",
      "--glow-color": "rgba(150, 123, 86, 0.35)",
      "background": "radial-gradient(circle, rgba(219,193,172,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "black",
    name: "Black Diamond",
    color: "Black",
    geology: "Opaque diamonds with graphite inclusions",
    description: "Unlike other colored diamonds, Carbonado or black diamonds are fully opaque. They owe their intense, midnight obsidian-like surface color to millions of dark micro-inclusions of graphite, hematite, and amorphous carbon.",
    styles: {
      "--color-primary": "#9CA3AF",
      "--color-secondary": "#374151",
      "--color-tertiary": "#111827",
      "--color-light": "#E5E7EB",
      "--color-dark": "#030712",
      "--color-stroke": "#4B5563",
      "--glow-color": "rgba(55, 65, 81, 0.4)",
      "background": "radial-gradient(circle, rgba(156,163,175,0.08) 0%, transparent 70%)"
    }
  },
  {
    id: "gray",
    name: "Gray Diamond",
    color: "Gray",
    geology: "Subtle and sophisticated neutral tone",
    description: "Exhibiting an elegant, silver-to-charcoal metallic color tone. These subtle and highly modern gems owe their cool neutral hues to either boron impurities or a dense concentration of hydrogen anomalies within the diamond structure.",
    styles: {
      "--color-primary": "#CBD5E1",
      "--color-secondary": "#64748B",
      "--color-tertiary": "#475569",
      "--color-light": "#F1F5F9",
      "--color-dark": "#1E293B",
      "--color-stroke": "#94A3B8",
      "--glow-color": "rgba(100, 116, 139, 0.3)",
      "background": "radial-gradient(circle, rgba(203,213,225,0.12) 0%, transparent 70%)"
    }
  },
  {
    id: "violet",
    name: "Violet Diamond",
    color: "Violet",
    geology: "Rare purple-blue combination",
    description: "A breathtaking combination of serene blue and majestic purple. True violet diamonds are exceptionally rare in nature, getting their distinctive spiritual hues from complex hydrogen-nitrogen lattice structures.",
    styles: {
      "--color-primary": "#C7D2FE",
      "--color-secondary": "#6366F1",
      "--color-tertiary": "#4338CA",
      "--color-light": "#EEF2FF",
      "--color-dark": "#312E81",
      "--color-stroke": "#A5B4FC",
      "--glow-color": "rgba(99, 102, 241, 0.45)",
      "background": "radial-gradient(circle, rgba(199,210,254,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "white",
    name: "White Diamond",
    color: "White",
    geology: "Colorless diamonds with exceptional purity",
    description: "The classic, pristine standard. Chemically pure and structurally perfect, true colorless D-Flawless white diamonds are highly refractive crystals that act as perfect prisms, splitting ambient light into all colors of the rainbow.",
    styles: {
      "--color-primary": "#FFFFFF",
      "--color-secondary": "#E2E8F0",
      "--color-tertiary": "#94A3B8",
      "--color-light": "#FFFFFF",
      "--color-dark": "#475569",
      "--color-stroke": "#CBD5E1",
      "--glow-color": "rgba(255, 255, 255, 0.45)",
      "background": "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
    }
  },
  {
    id: "olive",
    name: "Olive Diamond",
    color: "Olive",
    geology: "Unique olive-green hue, highly prized",
    description: "A rare and sophisticated olive-green hue, highly prized by collectors for its natural distinction. These exquisite gems showcase a subtle and complex combination of yellow-green and golden-brown tones, resulting from specific nitrogen configurations inside the carbon lattice.",
    styles: {
      "--color-primary": "#D9F99D",
      "--color-secondary": "#A3E635",
      "--color-tertiary": "#4D7C0F",
      "--color-light": "#F7FEE7",
      "--color-dark": "#1A2E05",
      "--color-stroke": "#BEF264",
      "--glow-color": "rgba(163, 230, 53, 0.35)",
      "background": "radial-gradient(circle, rgba(217,249,157,0.15) 0%, transparent 70%)"
    }
  }
];

const renderColoredDiamondSVG = (gradientId, size = 100) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className="transition-transform duration-700 group-hover:scale-110 filter drop-shadow-[0_0_15px_var(--glow-color)] select-none pointer-events-none"
    >
      <defs>
        <linearGradient id={`grad-${gradientId}-1`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
          <stop offset="50%" stopColor="var(--color-secondary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-tertiary)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id={`grad-${gradientId}-2`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--color-light)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--color-dark)" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      
      {/* Outer Outline */}
      <polygon 
        points="50,5 82,25 90,45 50,95 10,45 18,25" 
        stroke="var(--color-stroke)" 
        strokeWidth="0.8" 
        fill={`url(#grad-${gradientId}-1)`} 
      />
      
      {/* Table (Center Flat Top) */}
      <polygon 
        points="50,15 70,25 50,35 30,25" 
        fill={`url(#grad-${gradientId}-2)`} 
        opacity="0.9" 
        stroke="var(--color-stroke)" 
        strokeWidth="0.5" 
      />
      
      {/* Crown Star Facets */}
      <polygon points="50,5 50,15 30,25" fill="var(--color-light)" opacity="0.4" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="50,5 70,25 50,15" fill="var(--color-dark)" opacity="0.3" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="18,25 30,25 50,15" fill="var(--color-primary)" opacity="0.5" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="82,25 50,15 70,25" fill="var(--color-secondary)" opacity="0.5" stroke="var(--color-stroke)" strokeWidth="0.4" />
      
      {/* Upper Girdle Facets */}
      <polygon points="18,25 10,45 30,25" fill="var(--color-dark)" opacity="0.4" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="82,25 70,25 90,45" fill="var(--color-light)" opacity="0.4" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="30,25 50,35 10,45" fill="var(--color-primary)" opacity="0.6" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="70,25 90,45 50,35" fill="var(--color-secondary)" opacity="0.6" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="10,45 50,45 30,25" fill="var(--color-light)" opacity="0.3" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="90,45 70,25 50,45" fill="var(--color-dark)" opacity="0.3" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="50,35 50,45 10,45" fill="var(--color-secondary)" opacity="0.5" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="50,35 90,45 50,45" fill="var(--color-primary)" opacity="0.5" stroke="var(--color-stroke)" strokeWidth="0.4" />
      
      {/* Lower Pavilion Facets */}
      <polygon points="10,45 50,95 28,45" fill="var(--color-dark)" opacity="0.55" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="90,45 72,45 50,95" fill="var(--color-light)" opacity="0.55" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="28,45 50,95 50,45" fill={`url(#grad-${gradientId}-2)`} opacity="0.7" stroke="var(--color-stroke)" strokeWidth="0.4" />
      <polygon points="72,45 50,45 50,95" fill={`url(#grad-${gradientId}-2)`} opacity="0.8" stroke="var(--color-stroke)" strokeWidth="0.4" />
    </svg>
  );
};

const FancyColors = () => {
  const navigate = useNavigate();
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [inquireStatus, setInquireStatus] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquireStatus('submitting');
    setTimeout(() => {
      setInquireStatus('success');
      setTimeout(() => {
        setInquireStatus(null);
        setSelectedDiamond(null);
      }, 2000);
    }, 1200);
  };

  return (
    <div className="bg-[#1A1A1A] min-h-screen text-white pt-32 pb-24 px-4 sm:px-8 lg:px-16 overflow-x-hidden font-sans relative">
      
      {/* Floating abstract glowing background shapes */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink-500/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-500/[0.01] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-yellow-500/[0.01] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-10 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group text-sm uppercase tracking-widest font-light"
        >
          <span className="group-hover:-translate-x-1.5 transition-transform duration-300 text-lg">←</span> Back
        </button>

        {/* Header Hero Section: THE RARITY OF COLOR */}
        <div className="mb-20">
          <span className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.4em] uppercase mb-4 block font-normal">
            EXQUISITE CURIOSITY
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extralight mb-10 tracking-tight leading-none text-white uppercase">
            The Rarity <span className="text-gray-500 font-light">of Color</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-white text-xl sm:text-2xl font-light leading-relaxed">
                Less than <span className="text-[#B88A6A] font-normal">0.1%</span> of all diamonds exhibit natural fancy colors. 
                These extraordinary gems derive their hues from trace elements, structural anomalies, or radiation exposure 
                during their formation deep within the Earth.
              </p>
              <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
                Each colored diamond tells a unique geological story, making them among the most sought-after and 
                valuable gemstones in the world.
              </p>
            </div>
            
            <div className="lg:col-span-5 border-l border-white/10 pl-6 lg:pl-10 py-2">
              <span className="text-[#B88A6A] text-[11px] uppercase tracking-widest block mb-3 font-semibold">
                Nature's Masterpiece
              </span>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light italic">
                "Discover the extraordinary world of fancy colored diamonds - nature's rarest and most captivating gemstones."
              </p>
            </div>
          </div>
        </div>

        {/* SPECTRUM OF COLORS Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-10 h-px bg-[#B88A6A]" />
            <h2 className="text-2xl sm:text-3xl font-light tracking-[0.15em] text-white uppercase">
              Spectrum of Colors
            </h2>
          </div>

          {/* Grid of 13 beautiful color diamond cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {colorsData.map((diamond) => (
              <div
                key={diamond.id}
                style={diamond.styles}
                onClick={() => setSelectedDiamond(diamond)}
                className="group relative bg-white/[0.02] border border-white/10 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-between min-h-[380px] cursor-pointer hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_10px_30px_var(--glow-color)] overflow-hidden"
              >
                {/* Micro-glow background on card */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: diamond.styles.background }} />

                {/* Top Row: Name and chemistry metadata */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="text-[#B88A6A] text-[10px] uppercase tracking-widest font-semibold block mb-1">
                      Fancy Color
                    </span>
                    <h3 className="text-xl font-light text-white tracking-tight group-hover:text-[#B88A6A] transition-colors duration-300">
                      {diamond.name}
                    </h3>
                  </div>
                  <span className="text-white/20 text-4xl font-extrabold uppercase select-none group-hover:text-white/30 transition-colors duration-500">
                    {diamond.color.charAt(0)}
                  </span>
                </div>

                {/* Center visual: SVG Diamond glowing */}
                <div className="relative z-10 py-8 flex justify-center items-center">
                  {renderColoredDiamondSVG(diamond.id, 130)}
                </div>

                {/* Bottom metadata */}
                <div className="relative z-10 pt-4 border-t border-white/5">
                  <p className="text-gray-400 text-xs font-light line-clamp-2 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {diamond.geology}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-[#B88A6A] font-medium group-hover:underline">
                      Explore Rarity →
                    </span>
                    <span className="text-xs text-gray-500 font-light italic">
                      calibrated
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action at bottom */}
        <div className="p-12 rounded-3xl bg-white/5 border border-white/10 text-center relative overflow-hidden backdrop-blur-md">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-light mb-4 text-white">Require a custom shade?</h3>
          <p className="text-gray-400 max-w-xl mx-auto font-light mb-8 text-sm sm:text-base leading-relaxed">
            Our state-of-the-art laboratory guarantees precision color matching and delivery of customized fancy diamonds in over 30 shades within 20 days.
          </p>
          <button 
            onClick={() => navigate('/Contact')}
            className="px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Speak to a Specialist
          </button>
        </div>

      </div>

      {/* Interactive Gemological Detail Drawer / Modal */}
      {selectedDiamond && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-500 animate-fadeIn">
          <div 
            style={selectedDiamond.styles}
            className="bg-[#1C1C1C] border border-white/10 rounded-3xl max-w-2xl w-full p-6 sm:p-10 relative overflow-hidden shadow-2xl animate-scaleUp max-h-[90vh] overflow-y-auto"
          >
            {/* Glow backdrop inside modal */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: selectedDiamond.styles.background }} />

            {/* Close Button */}
            <button 
              onClick={() => setSelectedDiamond(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="relative z-10 space-y-8">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex justify-center items-center">
                  {renderColoredDiamondSVG(selectedDiamond.id, 90)}
                </div>
                <div>
                  <span className="text-[#B88A6A] text-xs uppercase tracking-widest font-semibold block mb-1">
                    Gemological Showcase
                  </span>
                  <h2 className="text-3xl font-light text-white tracking-tight">
                    {selectedDiamond.name}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm font-light mt-1 text-[#B88A6A]/80 uppercase tracking-wide">
                    {selectedDiamond.geology}
                  </p>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-4">
                <h4 className="text-[#B88A6A] text-xs uppercase tracking-widest font-bold">
                  Geological Formation & Cause
                </h4>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                  {selectedDiamond.description}
                </p>
              </div>

              {/* Inquiry Form inside Modal */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-white text-sm font-light mb-4 uppercase tracking-wider">
                  Request Information for {selectedDiamond.name}
                </h4>
                
                {inquireStatus === 'success' ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-center font-light text-sm">
                    ✓ Request submitted. An expert gemologist will connect within 24 hours.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#B88A6A] transition-colors"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        required
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#B88A6A] transition-colors"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={inquireStatus === 'submitting'}
                      className="w-full py-3.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
                    >
                      {inquireStatus === 'submitting' ? 'Sending Request...' : `Inquire About ${selectedDiamond.name}`}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FancyColors;
