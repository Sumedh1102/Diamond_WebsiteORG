import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rajesh Mehta",
        role: "Jewellery Manufacturer",
        location: "Mumbai, India",
        quote:
            "Navkar Diamonds has been our trusted partner for over three years. Their lab-grown diamonds are consistently of the highest quality — brilliant cut, exceptional clarity, and always delivered on time. They have transformed our production pipeline.",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Independent Designer",
        location: "Hong Kong",
        quote:
            "The calibrated parcels from Navkar are unmatched. Every stone is perfectly sized and the consistency across lots is remarkable. It makes setting so much easier and the end product always looks stunning.",
        rating: 5,
    },
    {
        id: 3,
        name: "David Okonkwo",
        role: "Retail Chain Owner",
        location: "Dubai, UAE",
        quote:
            "What sets Navkar apart is their service. From the initial consultation to the final delivery, every interaction is professional and personal. The IGI certification on every stone gives our customers absolute confidence.",
        rating: 5,
    },
    {
        id: 4,
        name: "Elena Rossi",
        role: "Luxury Brand Director",
        location: "Milan, Italy",
        quote:
            "We switched to Navkar's lab-grown diamonds two years ago and haven't looked back. The environmental responsibility combined with the sheer beauty of these stones aligns perfectly with our brand values.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback(
        (index) => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrent(index);
                setTimeout(() => setIsTransitioning(false), 50);
            }, 300);
        },
        [isTransitioning]
    );

    const next = useCallback(() => {
        goTo((current + 1) % testimonials.length);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + testimonials.length) % testimonials.length);
    }, [current, goTo]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const t = testimonials[current];

    return (
        <section className="w-full bg-[#1A1A1A] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 sm:mb-20 gap-6">
                    <div>
                        <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
                            Testimonials
                        </p>
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            What Our Clients
                            <br />
                            <span className="font-semibold">Say</span>
                        </h2>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full border border-white/15 text-white/50
                                       hover:border-[#B88A6A] hover:text-[#B88A6A] transition-all duration-300
                                       flex items-center justify-center"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full border border-white/15 text-white/50
                                       hover:border-[#B88A6A] hover:text-[#B88A6A] transition-all duration-300
                                       flex items-center justify-center"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    {/* Decorative quote */}
                    <div className="absolute -top-4 -left-2 sm:left-0 z-0">
                        <Quote className="w-20 h-20 sm:w-28 sm:h-28 text-[#B88A6A]/[0.07] rotate-180" />
                    </div>

                    <div
                        className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-white/10 pt-12 sm:pt-16 transition-opacity duration-300 ${
                            isTransitioning ? "opacity-0" : "opacity-100"
                        }`}
                    >
                        {/* Quote */}
                        <div className="lg:col-span-8">
                            <p className="text-white/70 text-lg sm:text-xl lg:text-2xl font-light leading-relaxed lg:leading-[1.8]">
                                "{t.quote}"
                            </p>

                            {/* Stars */}
                            <div className="flex items-center gap-1.5 mt-8">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-[#B88A6A]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Author Info */}
                        <div className="lg:col-span-4 flex flex-col justify-end lg:border-l lg:border-white/10 lg:pl-12">
                            {/* Initials avatar */}
                            <div className="w-14 h-14 rounded-full bg-[#B88A6A]/15 border border-[#B88A6A]/30 flex items-center justify-center mb-5">
                                <span className="text-[#B88A6A] text-lg font-light">
                                    {t.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </span>
                            </div>

                            <h4 className="text-white text-lg sm:text-xl font-light mb-1">
                                {t.name}
                            </h4>
                            <p className="text-[#B88A6A] text-sm font-light tracking-wider mb-1">
                                {t.role}
                            </p>
                            <p className="text-white/30 text-xs tracking-widest uppercase">
                                {t.location}
                            </p>
                        </div>
                    </div>

                    {/* Progress dots */}
                    <div className="flex items-center gap-3 mt-12 sm:mt-16">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className="group relative h-[2px] transition-all duration-500"
                                style={{ width: i === current ? "48px" : "24px" }}
                            >
                                <div
                                    className={`absolute inset-0 rounded-full transition-all duration-500 ${
                                        i === current ? "bg-[#B88A6A]" : "bg-white/15 group-hover:bg-white/30"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
