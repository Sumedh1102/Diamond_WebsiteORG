import React, { useState } from 'react';

export default function DiamondLanding() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="w-full bg-[#1A1A1A] overflow-hidden relative pt-10 max-w-8xl mx-auto">

      {/* ================= FIRST SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Left – Large Editorial Image */}
        <div className="relative h-[950px]">
          <img
            src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
            alt="Luxury Diamond Jewelry Editorial"
            className="w-full h-full object-cover grayscale rounded-3xl"
          />
        </div>

        {/* Right – Stacked Cards */}
        <div className="h-[850px] flex flex-col gap-5">

          {/* CVD Card */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="CVD Diamonds"
              className="w-full h-full object-cover grayscale rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-end pr-12">
              <div className="text-right">
                <p className="text-white text-sm tracking-widest uppercase mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-7xl font-bold mb-8">CVD</h2>
                <button
                  onMouseEnter={() => setHoveredButton('cvd')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`border-2 border-white text-white px-8 py-3 rounded-full uppercase text-sm tracking-wider transition-all duration-300 ${
                    hoveredButton === 'cvd' ? 'bg-white/10' : 'bg-transparent'
                  }`}
                >
                  Shop Now →
                </button>
              </div>
            </div>
          </div>

          {/* HPHT Card */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="HPHT Diamonds"
              className="w-full h-full object-cover grayscale rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center pl-12">
              <div>
                <p className="text-white text-sm tracking-widest uppercase mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-7xl font-bold">HPHT</h2>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= SECOND SECTION (SWAPPED) ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">

        {/* Left – Stacked Cards */}
        <div className="h-[850px] flex flex-col gap-5">

          {/* CVD Card */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="CVD Diamonds"
              className="w-full h-full object-cover grayscale rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center pl-12">
              <div>
                <p className="text-white text-sm tracking-widest uppercase mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-7xl font-bold mb-8">CVD</h2>
                <button
                  onMouseEnter={() => setHoveredButton('cvd-2')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`border-2 border-white text-white px-8 py-3 rounded-full uppercase text-sm tracking-wider transition-all duration-300 ${
                    hoveredButton === 'cvd-2' ? 'bg-white/10' : 'bg-transparent'
                  }`}
                >
                  Shop Now →
                </button>
              </div>
            </div>
          </div>

          {/* HPHT Card */}
          <div className="relative flex-1 overflow-hidden">
            <img
              src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
              alt="HPHT Diamonds"
              className="w-full h-full object-cover grayscale rounded-3xl"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-end pr-12">
              <div className="text-right">
                <p className="text-white text-sm tracking-widest uppercase mb-2 font-light">
                  Diamond
                </p>
                <h2 className="text-white text-7xl font-bold">HPHT</h2>
              </div>
            </div>
          </div>

        </div>

        {/* Right – Large Editorial Image */}
        <div className="relative h-[850px]">
          <img
            src="https://i.pinimg.com/1200x/a4/48/72/a44872c09c5b55f55e433aa613d9c475.jpg"
            alt="Luxury Diamond Jewelry Editorial"
            className="w-full h-full object-cover grayscale -translate-y-20 rounded-3xl"
          />
        </div>

      </div>
    </div>
  );
}
