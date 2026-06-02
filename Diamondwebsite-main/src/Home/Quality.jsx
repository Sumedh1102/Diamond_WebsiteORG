import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DiamondStorytelling = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  const sections = [
    {
      id: 2,
      label: "SERVICES",
      heading: "Calibrated Parcels",
      description: "Our calibrated diamond parcels offer precision-sized stones measured to exact millimetre tolerances. Perfectly uniform and ready for setting, they are the ideal choice for high-volume jewellery production.",
      image: "https://i.ibb.co/CKft79CC/Screenshot-2026-05-29-at-11-20-55-AM.png",
      cta: { label: "Explore Calibrated Parcels", route: "/calibrated-service-details" }
    },
    {
      id: 4,
      label: "MATCHING LAYOUT",
      heading: "Matching Layout",
      description: "Our calibrated matching layouts (10–99 cents, 0.10 MM tolerance) ensure precise uniformity in shape, color, clarity, dimensions, and cent values.",
      image: "/images/matching_layout.png",
      cta: { label: "Explore Matching Layouts", route: "/matching-layouts" }
    },
    {
      id: 5,
      label: "30+ COLORS",
      heading: "30+ colors",
      description: "We specialize in unique colored diamonds across 10+ fancy shades, with customized color delivery guaranteed within 20 days.",
      image: "/images/fancy_colored_diamonds.png",
      cta: { label: "Explore Colors", route: "/fancy-colors" }
    },
    {
      id: 3,
      label: "JEWELLERY",
      heading: "World of Jewellery",
      description: "From solitaire rings to intricate multi-stone pieces, our bespoke jewellery service brings your vision to life. We combine masterful craftsmanship with our finest lab-grown diamonds for creations that last a lifetime.",
      image: "https://i.ibb.co/gMjYq5wz/image.png",
      cta: { label: "Explore Jewellery", route: "/jewellery" }
    }
  ];


  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        {
          threshold: 0.5,
          rootMargin: '-20% 0px -20% 0px'
        }
      );

      if (section) {
        observer.observe(section);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [sections.length]);

  return (
    <div className="bg-[#1A1A1A] min-h-fit">

      {/* Mobile Layout - Stacked image then content */}
      <div className="lg:hidden">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={el => sectionsRef.current[index] = el}
            className="mb-8"
          >
            {/* Image */}
            <div className="h-[60vh] sm:h-[70vh] p-4 sm:p-6">
              <img
                src={section.image}
                alt={section.heading}
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Content */}
            <div className="px-5 sm:px-8 py-8 sm:py-12">
              <div className="max-w-xl mx-auto">
                <p className="text-gray-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 font-light">
                  {section.label}
                </p>
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-6 leading-tight">
                  {section.heading}
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light mb-8">
                  {section.description}
                </p>
                
                {section.cta && (
                  <button
                    onClick={() => navigate(section.cta.route)}
                    className="px-7 py-3 border border-white/40 text-white rounded-full font-light text-sm
                               hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {section.cta.label}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout - Side by side with sticky image */}
      <div className="hidden lg:grid grid-cols-2">

        {/* Left Column - Sticky Image Panel */}
        <div className="relative h-screen sticky top-0">
          <div className="absolute inset-0 p-8 xl:p-16">
            <div className="relative w-full h-full">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeSection === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                  {/* Label overlay on image */}
                  <div className="absolute top-6 left-6">
                    <span className="text-white/60 text-xs tracking-[0.3em] font-light uppercase">
                      {section.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content */}
        <div>
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={el => sectionsRef.current[index] = el}
              className="min-h-screen flex items-center justify-center px-12 lg:px-16 py-20"
            >
              <div className="max-w-xl w-full">
                <p className="text-gray-500 text-sm tracking-[0.3em] mb-6 font-light uppercase">
                  {section.label}
                </p>
                <h2 className="text-white text-5xl lg:text-6xl font-light mb-8 leading-tight">
                  {section.heading}
                </h2>
                <p className="text-gray-300 text-lg lg:text-xl leading-relaxed font-light mb-10">
                  {section.description}
                </p>

                {section.cta && (
                  <button
                    onClick={() => navigate(section.cta.route)}
                    className="px-8 py-4 border border-white/40 text-white rounded-full font-light
                               hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    {section.cta.label}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DiamondStorytelling;