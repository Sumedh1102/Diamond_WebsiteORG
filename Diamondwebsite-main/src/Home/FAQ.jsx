import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What are lab-grown diamonds?",
        answer:
            "Lab-grown diamonds are real diamonds created in controlled laboratory environments using advanced technology that replicates the natural diamond-growing process. They are chemically, physically, and optically identical to mined diamonds — the only difference is their origin.",
    },
    {
        question: "Are lab-grown diamonds certified?",
        answer:
            "Yes, every Navkar diamond is independently graded and certified by world-renowned gemological institutes such as IGI (International Gemological Institute) and GIA (Gemological Institute of America), ensuring transparency and trust.",
    },
    {
        question: "What sizes do you offer?",
        answer:
            "We offer an extensive range of lab-grown diamonds from 0.01 carats to 35 carats, available in CVD and HPHT varieties. Whether you need melee stones for pavé settings or a statement solitaire, we have you covered.",
    },
    {
        question: "What diamond shapes are available?",
        answer:
            "Our inventory includes all popular shapes — Round, Princess, Emerald, Oval, Cushion, Pear, Marquise, Heart, Asscher, and Radiant. Custom shapes and cuts can also be arranged on request.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="w-full bg-[#1A1A1A] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left — Header (sticky on desktop) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                        <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
                            FAQ
                        </p>
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light leading-tight mb-6">
                            Frequently Asked
                            <br />
                            <span className="font-semibold">Questions</span>
                        </h2>
                        <p className="text-white/35 text-sm sm:text-base leading-relaxed font-light">
                            Everything you need to know about our lab-grown diamonds, certifications, and services.
                        </p>
                    </div>

                    {/* Right — Accordion */}
                    <div className="lg:col-span-8 border-t border-white/10">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="border-b border-white/10"
                                >
                                    <button
                                        onClick={() => toggle(index)}
                                        className="w-full flex items-start justify-between gap-6 py-7 sm:py-8 text-left group"
                                    >
                                        <div className="flex items-start gap-4 sm:gap-5">
                                            <span className={`text-xs font-light tracking-widest mt-1 transition-colors duration-300 ${
                                                isOpen ? "text-[#B88A6A]" : "text-white/15"
                                            }`}>
                                                0{index + 1}
                                            </span>
                                            <span className={`text-base sm:text-lg font-light transition-colors duration-300 leading-snug ${
                                                isOpen ? "text-white" : "text-white/50 group-hover:text-white/70"
                                            }`}>
                                                {faq.question}
                                            </span>
                                        </div>

                                        <div className={`
                                            flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center
                                            transition-all duration-300
                                            ${isOpen
                                                ? "bg-[#B88A6A] border-[#B88A6A] text-white rotate-0"
                                                : "bg-transparent border-white/15 text-white/30 group-hover:border-white/30 group-hover:text-white/50"}
                                        `}>
                                            {isOpen ? (
                                                <Minus className="w-4 h-4" />
                                            ) : (
                                                <Plus className="w-4 h-4" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className="overflow-hidden transition-all duration-500 ease-in-out"
                                        style={{
                                            maxHeight: isOpen ? "300px" : "0px",
                                            opacity: isOpen ? 1 : 0,
                                        }}
                                    >
                                        <div className="pb-8 pl-8 sm:pl-11 pr-4 sm:pr-16">
                                            <p className="text-white/35 text-sm sm:text-[15px] leading-relaxed font-light">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
