import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import Diamond from '../Components/Diamond'
import gsap from 'gsap'

function DiamondScene({ isMobile, isTablet }) {
    const diamondRef = useRef()

    // Responsive scale based on device
    const scale = isMobile ? 0.3 : isTablet ? 0.4 : 0.6

    useFrame((state, delta) => {
        if (!diamondRef.current) return

        // Slow rotation
        diamondRef.current.rotation.y += delta * 0.3
        
        // Position adjustments: Shift 1px right (+0.01) and 10px up (+0.10)
        const time = state.clock.getElapsedTime()
        diamondRef.current.position.x = (isMobile ? 0.8 : 0.5) - 0.55 - (isMobile ? 0.28 : 0)
        const baseY = (isMobile ? -0.1 : -0.2) + 0.11
        diamondRef.current.position.y = baseY + Math.sin(time * 0.5) * 0.05
        
        // Static Z position
        diamondRef.current.position.z = 0
    })

    return (
        <Diamond
            ref={diamondRef}
            scale={[scale, scale, scale]}
            position={[0, 0.5, 0]}
        />
    )
}


export default function KapuGemsHero() {
    const [isMobile, setIsMobile] = useState(false)
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const cameraFov = isMobile ? 60 : isTablet ? 50 : 45

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5], fov: cameraFov }}>
                <ambientLight intensity={0.2} />
                <spotLight position={[0, 5, 2]} angle={0.5} penumbra={1} intensity={2} color="#ffaa55" />
                <pointLight position={[0, 0.5, 0]} intensity={1} color="#ff8800" />
                <pointLight position={[-2, -2, -2]} intensity={0.5} color="#ffffff" />

                <DiamondScene isMobile={isMobile} isTablet={isTablet} />
                <Environment preset="studio" />
            </Canvas>

            {/* Static HTML Overlay */}
            <div className="absolute inset-0 flex flex-col justify-between items-center pointer-events-none z-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
              {/* TOP TEXT */}
              <div className="flex flex-col items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
                {/* left padding = the letter-spacing after the last letter, so each line sits centred */}
                <h2 className="pl-[0.08em] text-[clamp(1.5rem,7.5vw,1.875rem)] sm:text-4xl md:text-[2.75rem] xl:text-[3.25rem] 2xl:text-6xl leading-tight tracking-[0.08em] uppercase font-bold text-balance bg-gradient-to-r from-[#C9A27E] via-[#F7E7CE] to-[#C9A27E] bg-clip-text text-transparent drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                  Manufacturers & Exporters
                </h2>
                <div className="w-20 sm:w-28 h-px bg-gradient-to-r from-transparent via-[#E8CFA8] to-transparent opacity-80" />
              </div>

              {/* BOTTOM TEXT */}
              <div className="space-y-2 sm:space-y-3 max-w-5xl mx-auto mb-4 sm:mb-8">
                <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider opacity-90 drop-shadow-lg text-balance">
                  Pure Brilliance Modern Origin
                </h1>
                <p className="text-white/50 text-[10px] sm:text-xs md:text-sm tracking-[0.25em] uppercase font-light">
                  Precision Lab-Grown Diamond Synthesis
                </p>
              </div>
            </div>                

            {/* Background */}
            <div
                className="absolute inset-0 w-full h-full -z-10 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/ChatGPT Image Sep 26, 2026, 08_01_27 PM.png")'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>
        </div>
    )
}