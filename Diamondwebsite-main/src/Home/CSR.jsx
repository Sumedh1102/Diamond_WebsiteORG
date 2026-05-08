import React from "react";
import { Leaf, Heart, GraduationCap, Globe } from "lucide-react";

const initiatives = [
    {
        icon: Leaf,
        title: "Sustainable Production",
        description:
            "Our lab-grown diamonds require no mining, reducing land disruption and carbon emissions. We operate with renewable energy sources and continuously optimise our processes for minimal environmental footprint.",
    },
    {
        icon: Heart,
        title: "Community Welfare",
        description:
            "We actively invest in the health and well-being of our local communities through medical camps, clean water initiatives, and support for underprivileged families across rural India.",
    },
    {
        icon: GraduationCap,
        title: "Education & Empowerment",
        description:
            "Through scholarships and vocational training programs, we empower the next generation of artisans and professionals — creating opportunities that extend far beyond the diamond industry.",
    },
    {
        icon: Globe,
        title: "Ethical Sourcing",
        description:
            "Every diamond we produce is conflict-free by design. Our transparent supply chain ensures full traceability from laboratory to showroom, upholding the highest ethical standards.",
    },
];

export default function CSR() {
    return (
        <section className="w-full bg-[#1A1A1A] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16 sm:mb-20 lg:mb-24">
                    <div>
                        <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
                            Our Responsibility
                        </p>
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            Corporate Social
                            <br />
                            <span className="font-semibold">Responsibility</span>
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-white/40 text-base sm:text-lg leading-relaxed font-light max-w-lg">
                            At Navkar Diamonds, brilliance goes beyond the stone. We are committed to
                            creating lasting positive impact — for the environment, our communities,
                            and the generations that follow.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-16 sm:mb-20" />

                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
                    {initiatives.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative p-8 sm:p-10 transition-all duration-500 hover:bg-white/[0.03]
                                    ${index < initiatives.length - 1 ? "border-b sm:border-b-0 sm:border-r border-white/10" : ""}
                                    ${index === 1 ? "sm:border-r-0 lg:border-r border-white/10" : ""}
                                    ${index < 2 ? "sm:border-b lg:border-b-0 border-white/10" : ""}
                                `}
                            >
                                {/* Number */}
                                <span className="text-white/[0.06] text-[80px] sm:text-[100px] font-bold absolute top-2 right-4 leading-none select-none pointer-events-none">
                                    0{index + 1}
                                </span>

                                {/* Icon */}
                                <div className="relative z-10 w-12 h-12 rounded-xl bg-[#B88A6A]/10 border border-[#B88A6A]/20 flex items-center justify-center mb-8 group-hover:bg-[#B88A6A]/20 group-hover:border-[#B88A6A]/40 transition-all duration-500">
                                    <Icon className="w-5 h-5 text-[#B88A6A]" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-white text-lg sm:text-xl font-light mb-4 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/35 text-sm sm:text-[15px] leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom accent line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B88A6A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
