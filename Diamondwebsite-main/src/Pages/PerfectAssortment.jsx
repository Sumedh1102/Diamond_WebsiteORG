import React from 'react';
import heroImage from '../assets/diamond_assortment_hero.png';

const PerfectAssortment = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Perfect Assortment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4 uppercase">
            Perfect Assortment
          </h1>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Meticulous grading for flawless consistency.
          </p>
        </div>
      </div>

      {/* Information Section */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-light text-gray-900 mb-8">Precision Assortment</h2>
            <p className="text-xl italic text-[#B88A6A] font-light mb-8">
              “Check. Check. Check. Are the first 3 of seven stages.”
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sorting and assorting diamonds is both an art and a science. Our skilled professionals classify diamonds based on multiple parameters such as size, shape, color, and clarity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This systematic sorting ensures accuracy and consistency for clients who require precisely matched diamond assortments for their high-end jewellery collections.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-3xl">
            <h3 className="text-2xl font-medium text-black mb-6">Process Highlights</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                <span className="text-gray-700">Multi-parameter classification (4Cs+)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                <span className="text-gray-700">Skilled artisanal sorting</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                <span className="text-gray-700">Systematic accuracy & consistency</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                <span className="text-gray-700">Precisely matched assortments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfectAssortment;
