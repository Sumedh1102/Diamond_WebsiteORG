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
        
        // Position adjustments: Shift right (x) and downwards (y)
        const time = state.clock.getElapsedTime()
        diamondRef.current.position.x = (isMobile ? 0.15 : 0.5) - 0.48
        const baseY = (isMobile ? -0.1 : -0.2) - 0.15
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
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
  <h1 className="text-white text-5xl md:text-7xl font-light tracking-wide opacity-70 mt-[-80vh] px-10 py-5" style={{ fontFamily: "'Noto Serif'" }}>
    Pure Brilliance Modern Origin
  </h1>
</div>                

            {/* Background */}
            <div
                className="absolute inset-0 w-full h-full -z-10 bg-cover bg-left bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/ChatGPT Image Jun 2, 2026, 12_06_56 AM.png")'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>
        </div>
    )
}