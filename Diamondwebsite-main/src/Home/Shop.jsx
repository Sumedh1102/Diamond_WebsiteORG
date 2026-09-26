import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Real diamond photos (tight-cropped copies in public/diamond_images/trimmed)
const classicShapes = [
  { name: "Round", image: "/diamond_images/trimmed/round.webp" },
  { name: "Oval", image: "/diamond_images/trimmed/oval.webp" },
  { name: "Cushion", image: "/diamond_images/trimmed/cushion.webp" },
  { name: "Pear", image: "/diamond_images/trimmed/pear.webp" },
  { name: "Princess", image: "/diamond_images/trimmed/princess.webp" },
  { name: "Emerald", image: "/diamond_images/trimmed/emerald.webp" },
  { name: "Marquise", image: "/diamond_images/trimmed/marquise.webp" },
  { name: "Heart", image: "/diamond_images/trimmed/heart.webp" },
  { name: "Asscher", image: "/diamond_images/trimmed/asscher.webp" },
  { name: "Radiant", image: "/diamond_images/trimmed/radiant.webp" },
];

const fancyShapes = [
  { name: "Customised", image: "/diamond_images/generated/butterfly.webp" },
  { name: "Trillion", image: "/diamond_images/generated/trillion.webp" },
  { name: "Baguette", image: "/diamond_images/generated/baguette.webp" },
  { name: "Hexagon", image: "/diamond_images/generated/hexagon.webp" },
  { name: "Kite", image: "/diamond_images/generated/kite.webp" },
  { name: "Half Moon", image: "/diamond_images/generated/half_moon.webp" },
  { name: "Shield", image: "/diamond_images/generated/shield.webp" },
  { name: "Star", image: "/diamond_images/generated/star.webp" },
  { name: "Cloud", image: "/diamond_images/generated/cloud.webp" },
  { name: "Whale Tail", image: "/diamond_images/generated/whale_tail.webp" },
];

// Fisher-Yates shuffle into a new array
const shuffle = (list) => {
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Fresh order on every visit. Classic and fancy cuts alternate, so no two
// classic cuts (e.g. Round and Oval) sit side by side and look alike.
const shuffleShapes = () => {
  const classic = shuffle(classicShapes);
  const fancy = shuffle(fancyShapes);
  return Array.from({ length: Math.max(classic.length, fancy.length) }, (_, i) => [classic[i], fancy[i]])
    .flat()
    .filter(Boolean);
};

const DiamondShapesSlider = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const [diamonds] = useState(shuffleShapes);

  // Duplicate for seamless loop
  const duplicatedDiamonds = [...diamonds, ...diamonds, ...diamonds];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth < 640 ? 160 : window.innerWidth < 768 ? 192 : 224;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-[#1A1A1A] px-4 sm:px-6 lg:px-8 overflow-hidden min-h-fit py-8 sm:py-12 lg:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-6 lg:gap-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Shapes Of
            <br />
            Diamond
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto">

            <div className="flex gap-3">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 text-white hover:border-white transition"
                >
                  ‹
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 text-white hover:border-white transition"
                >
                  ›
                </button>
                <button
                  onClick={() => navigate('/diamonds')}
                  className="ml-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
                >
                  Explore
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={scrollRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              // 3s per shape, so adding shapes keeps the same scroll speed
              animation:
                isAnimating && !isPaused
                  ? `scroll ${diamonds.length * 3}s linear infinite`
                  : "none",
            }}
          >
            {duplicatedDiamonds.map((diamond, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 px-3 sm:px-4 md:px-6 group"
              >
                <div className="flex flex-col items-center py-6 sm:py-8 md:py-12 border-l border-white/10">
                  <img
                    src={diamond.image}
                    alt={diamond.name}
                    loading="lazy"
                    className="
                      w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain
                      grayscale
                      transition-all duration-500
                      ml-6 sm:ml-8 md:ml-10 lg:ml-14
                    "
                  />
                  <h3 className="mt-4 sm:mt-6 md:mt-8 text-white text-base sm:text-lg md:text-xl font-light tracking-wider ml-6 sm:ml-8 md:ml-10 lg:ml-14">
                    {diamond.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${diamonds.length * 160}px);
          }
        }
        @media (min-width: 640px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${diamonds.length * 192}px);
            }
          }
        }
        @media (min-width: 768px) {
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${diamonds.length * 224}px);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default DiamondShapesSlider;