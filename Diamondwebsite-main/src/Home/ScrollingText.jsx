import React from 'react';

const DiamondMarquee = () => {
  const cuts = ['Round', 'Princess', 'Emerald', 'Asscher'];
  
  // Create multiple repetitions for seamless looping
  const marqueeContent = [...Array(6)].flatMap(() => cuts).map((cut, index) => (
    <React.Fragment key={index}>
      <span className="text-2xl md:text-4xl lg:text-4xl font-semibold tracking-wider text-white/90">
        {cut}
      </span>
      <span className="text-5xl md:text-6xl lg:text-7xl mx-8 md:mx-12 text-white/20">
        *
      </span>
    </React.Fragment>
  ));

  return (
    <div className="w-full h-96 bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
      
      <div 
        className="relative w-[1600px] py-12"
        style={{ transform: 'rotate(-3deg)' }}
      >
        {/* Marquee container */}
        <div className="relative bg-neutral-950 border-y border-white/40 pt-5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {marqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondMarquee;