import React, { useState } from 'react';

export default function DiamondLanding() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="w-full bg-[#1A1A1A] overflow-hidden relative pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto">

      {/* ================= FIRST SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">

        {/* Left – Large Editorial Image */}
        <div className="relative h-[380px] sm:h-[500px] lg:h-[950px]">
          <img
            src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
            alt="Luxury Diamond Jewelry Editorial"
            className="w-full h-full object-cover grayscale rounded-2xl sm:rounded-3xl"
          />
        </div>

        {/* Right – Stacked Cards */}
        <div className="h-auto lg:h-[850px] flex flex-col gap-4 sm:gap-5">

          {/* CVD Card */}
          <div className="relative h-[240px] sm:h-[300px] lg:flex-1 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="CVD Diamonds"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-end pr-6 sm:pr-12">
              <div className="text-right">
                <p className="text-white text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8">CVD</h2>
                <button
                  onMouseEnter={() => setHoveredButton('cvd')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`border border-sm:border-2 border-white text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 ${
                    hoveredButton === 'cvd' ? 'bg-white/10' : 'bg-transparent'
                  }`}
                >
                  Shop Now →
                </button>
              </div>
            </div>
          </div>

          {/* HPHT Card */}
          <div className="relative h-[240px] sm:h-[300px] lg:flex-1 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="HPHT Diamonds"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center pl-6 sm:pl-12">
              <div>
                <p className="text-white text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold">HPHT</h2>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= SECOND SECTION (SWAPPED) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mt-4 sm:mt-5">

        {/* Left – Stacked Cards */}
        <div className="h-auto lg:h-[850px] flex flex-col gap-4 sm:gap-5">

          {/* CVD Card */}
          <div className="relative h-[240px] sm:h-[300px] lg:flex-1 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="CVD Diamonds"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center pl-6 sm:pl-12">
              <div>
                <p className="text-white text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8">CVD</h2>
                <button
                  onMouseEnter={() => setHoveredButton('cvd-2')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`border border-sm:border-2 border-white text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full uppercase text-xs sm:text-sm tracking-wider transition-all duration-300 ${
                    hoveredButton === 'cvd-2' ? 'bg-white/10' : 'bg-transparent'
                  }`}
                >
                  Shop Now →
                </button>
              </div>
            </div>
          </div>

          {/* HPHT Card */}
          <div className="relative h-[240px] sm:h-[300px] lg:flex-1 overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="HPHT Diamonds"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-end pr-6 sm:pr-12">
              <div className="text-right">
                <p className="text-white text-xs sm:text-sm tracking-widest uppercase mb-1 sm:mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-4xl sm:text-6xl lg:text-7xl font-bold">HPHT</h2>
              </div>
            </div>
          </div>

        </div>

        {/* Right – Large Editorial Image */}
        <div className="relative h-[380px] sm:h-[500px] lg:h-[850px]">
          <img
            src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
            alt="Luxury Diamond Jewelry Editorial"
            className="w-full h-full object-cover grayscale lg:-translate-y-20 rounded-2xl sm:rounded-3xl"
          />
        </div>

      </div>
    </div>
  );
}
