import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Diamond from '../Components/Diamond';

const RotatingDiamond = ({ scale }) => {
  const diamondRef = useRef();

  useFrame((state, delta) => {
    if (diamondRef.current) {
      diamondRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Center>
      <Diamond
        ref={diamondRef}
        scale={scale}
        rotation={[Math.PI / 2, 0, 0]} // Side view
      />
    </Center>
  );
};

const DiamondScene = ({ scale }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  return (
    <div ref={containerRef} className="w-full h-full overflow-visible">
      <Canvas
        frameloop={isInView ? "always" : "never"}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 100], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <RotatingDiamond scale={scale} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};


const LuxuryFeaturedSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive values
  const diamondScale = isMobile ? 25 : isTablet ? 35 : 38;
  const containerSize = isMobile ? 'w-[300px] h-[300px]' : isTablet ? 'w-[450px] h-[450px]' : 'w-[600px] h-[600px]';
  const centerDiamondSize = isMobile ? 'w-40 h-40' : isTablet ? 'w-60 h-60' : 'w-80 h-80';
  const textSize = isMobile ? 'text-[12px]' : isTablet ? 'text-[14px]' : 'text-[18px]';

  const text =
    "FEATURED PRODUCTS · NAVKAR DIAMONDS · FEATURED PRODUCTS · NAVKAR DIAMONDS · FEATURED PRODUCTS ";
  const chars = text.split('');

  return (
    <div className="min-h-fit bg-[#1A1A1A] flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

        {/* Left Side */}
        <div className="flex items-center justify-center order-2 lg:order-1">
          <div className={`relative ${containerSize} flex items-center justify-center`}>

            {/* Outer Border */}
            <div className="absolute inset-[8px] sm:inset-[12px] md:inset-[16px] rounded-full border border-white/20"></div>

            {/* Rotating Circular Text */}
            <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
              <svg viewBox="0 0 600 600" className="w-full h-full">

                <defs>
                  <path
                    id="circlePath"
                    d="M 300,300 m -240,0 a 240,240 0 1,1 480,0 a 240,240 0 1,1 -480,0"
                  />
                </defs>

                {/* Bottom Border (Stroke Below Text) */}
                <circle
                  cx="300"
                  cy="300"
                  r="225"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.25"
                  strokeWidth="1"
                />

                {/* Circular Text */}
                <text
                  fill="white"
                  className={`${textSize} font-light uppercase`}
                  style={{ letterSpacing: isMobile ? '0.2em' : '0.4em' }}
                >
                  <textPath href="#circlePath" startOffset="0%">
                    {chars.map((char, i) => (
                      <tspan key={i}>{char}</tspan>
                    ))}
                  </textPath>
                </text>

              </svg>
            </div>

            {/* Center Diamond */}
            <div className={`relative z-10 ${centerDiamondSize} flex items-center justify-center overflow-visible`}>
              <DiamondScene scale={diamondScale} />
            </div>

          </div>
        </div>

        {/* Right Side Content */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8 text-left order-1 lg:order-2">

          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 border border-gray-700 rounded-full">
            <span className="text-gray-300 text-xs md:text-sm tracking-widest uppercase font-light">
              Diamonds
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            Featured Products
          </h2>

          <div className="space-y-3 md:space-y-4 lg:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              We offer an extensive range of internationally graded man-made diamonds that are
              forever. Ageless. Timeless.
            </p>
            <p>
              We offers our valued clients a wide variety of polished, certified stones of CVD and
              HPHT diamonds from 0.001 to 10 cts.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LuxuryFeaturedSection;