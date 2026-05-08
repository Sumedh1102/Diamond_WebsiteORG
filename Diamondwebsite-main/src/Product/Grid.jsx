import React from 'react';

export default function DiamondComparison() {
  const hphtFeatures = [
    "Cuboctahedron shape cubic",
    "14 Growth Direction",
    "Geometric color zoning even",
    "Graining pattern",
    "Metallic inclusion",
    "No strain pattern",
    "Unusual fluorescence",
    "Occasional phosphorescence"
  ];

  const cvdFeatures = [
    "Cubic shape",
    "1 Growth Direction",
    "Even color distribution",
    "No graining pattern",
    "Graphite or other mineral inclusion",
    "Banded strain pattern",
    "Unusual fluorescence",
    "Occasional phosphorescence"
  ];

  return (
    <div className="min-h-fit bg-[#1A1A1A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* HPHT Card */}
          <div className="relative rounded border border-white/20 bg-[#1A1A1A] backdrop-blur-sm p-10 overflow-hidden">
            {/* Decorative wave pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
                <path d="M0,100 Q100,150 200,100 T400,100 L400,600 L0,600 Z" fill="url(#wave1)" />
                <defs>
                  <linearGradient id="wave1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d4a574" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574]">
                  HPHT Diamonds
                </h2>
                <div className="w-2 h-2 rounded-full bg-[#d4a574] mt-2"></div>
              </div>

              <ul className="space-y-5">
                {hphtFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-lg leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CVD Card */}
          <div className="relative rounded border border-white/20 bg-[#1A1A1A] backdrop-blur-sm p-10 overflow-hidden">
            {/* Decorative wave pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
                <path d="M0,120 Q100,80 200,120 T400,120 L400,600 L0,600 Z" fill="url(#wave2)" />
                <defs>
                  <linearGradient id="wave2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#d4a574" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4a574] mb-12">
                CVD Diamonds
              </h2>

              <ul className="space-y-5">
                {cvdFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-lg leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}