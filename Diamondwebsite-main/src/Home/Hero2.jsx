import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Ruler, BadgeCheck, Gem, ArrowRight } from "lucide-react";

export default function DiamondFeatureSection() {
    const navigate = useNavigate();

    const features = [
        {
            id: 1,
            icon: Gem,
            text: "Product",
            subtitle: "CVD & HPHT Diamonds",
            description:
                "Browse our premium inventory of lab-grown diamonds, available in various shapes, clarities, and cuts for your perfect choice.",
        },
        {
            id: 2,
            icon: Ruler,
            text: "Size of Diamond",
            subtitle: "0.001 cts — 35+ Carats",
            description:
                "Explore our extensive collection of lab-grown diamonds, ranging from 0.001cts to 35+ Carats, catering to every design requirement.",
        },
        {
            id: 3,
            icon: BadgeCheck,
            text: "Certificate",
            subtitle: "IGI & GIA Certified",
            description:
                "Every diamond is meticulously graded and certified by leading gemological institutes like IGI and GIA, ensuring peace of mind.",
        },
    ];

    const [activeFeature, setActiveFeature] = useState(features[0]);

    return (
        <section className="w-full bg-[#1A1A1A] pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                    {/* LEFT — Feature Selector */}
                    <div className="lg:col-span-5 border-t border-white/10">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            const isActive = activeFeature.id === feature.id;

                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => setActiveFeature(feature)}
                                    className={`
                                        group relative flex items-center justify-between
                                        px-5 sm:px-8 py-7 sm:py-9
                                        cursor-pointer transition-all duration-500
                                        border-b border-white/10
                                        ${isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}
                                    `}
                                >
                                    {/* Active indicator bar */}
                                    <div
                                        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#B88A6A] transition-all duration-500 ${
                                            isActive ? "opacity-100" : "opacity-0"
                                        }`}
                                    />

                                    <div className="flex items-center gap-4 sm:gap-5">
                                        {/* Numbered index */}
                                        <span className={`text-xs font-light tracking-widest transition-colors duration-300 ${
                                            isActive ? "text-[#B88A6A]" : "text-white/20"
                                        }`}>
                                            0{feature.id}
                                        </span>

                                        {/* Icon */}
                                        <div className={`
                                            p-3 rounded-xl transition-all duration-300
                                            ${isActive
                                                ? "bg-[#B88A6A]/15 shadow-lg shadow-[#B88A6A]/5"
                                                : "bg-white/5 group-hover:bg-white/10"}
                                        `}>
                                            <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${
                                                isActive ? "text-[#B88A6A]" : "text-white/40 group-hover:text-white/60"
                                            }`} />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <span className={`block text-base sm:text-lg font-light transition-colors duration-300 ${
                                                isActive ? "text-white" : "text-white/50 group-hover:text-white/70"
                                            }`}>
                                                {feature.text}
                                            </span>
                                            <span className={`block text-[11px] sm:text-xs tracking-wider uppercase mt-1 transition-colors duration-300 ${
                                                isActive ? "text-[#B88A6A]/80" : "text-white/20"
                                            }`}>
                                                {feature.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT — Feature Detail Panel */}
                    <div className="lg:col-span-7 relative overflow-hidden border-t lg:border-t border-white/10 lg:border-l">

                        {/* Background subtle pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B88A6A]/[0.03] via-transparent to-transparent" />

                        <div className="relative flex flex-col items-center justify-center p-10 sm:p-14 lg:p-20 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">

                            {/* Large faded number */}
                            <div className="absolute top-6 right-8 sm:top-8 sm:right-12 text-white/[0.03] text-[120px] sm:text-[160px] lg:text-[200px] font-bold leading-none select-none pointer-events-none">
                                0{activeFeature.id}
                            </div>

                            {/* Content */}
                            <div className="text-center max-w-lg relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88A6A]/30 rounded-full mb-8">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#B88A6A]" />
                                    <span className="text-[#B88A6A] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-light">
                                        {activeFeature.subtitle}
                                    </span>
                                </div>

                                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 leading-tight">
                                    {activeFeature.text}
                                </h3>

                                <p className="text-white/50 text-base sm:text-lg lg:text-xl leading-relaxed font-light mb-10 sm:mb-12">
                                    {activeFeature.description}
                                </p>

                                {/* Product-specific CTA */}
                                {activeFeature.id === 1 && (
                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                        <button
                                            onClick={() => navigate("/loose-diamonds")}
                                            className="px-7 py-3.5 bg-[#B88A6A] text-white rounded-full font-light text-sm tracking-wider
                                                       hover:bg-[#A67958] transition-all duration-300 shadow-lg shadow-[#B88A6A]/20 hover:scale-105"
                                        >
                                            Loose Diamonds
                                        </button>
                                        <button
                                            onClick={() => navigate("/certified-diamonds")}
                                            className="px-7 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-light text-sm tracking-wider
                                                       hover:bg-white/5 transition-all duration-300 hover:scale-105"
                                        >
                                            Certified Diamonds
                                        </button>
                                    </div>
                                )}


                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}