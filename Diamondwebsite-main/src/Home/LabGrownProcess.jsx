import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Gem, FlaskConical, Zap, Layers, ScanSearch, Scissors, Award } from "lucide-react";

const steps = [
    {
        id: 1,
        icon: Gem,
        title: "Seed Selection",
        subtitle: "Diamond Seed Crystal",
        description:
            "A thin sliver of genuine diamond — typically less than 1mm — is carefully selected as the foundation. This seed crystal determines the atomic lattice orientation of the entire grown diamond, ensuring crystallographic perfection from the very start.",
        detail:
            "The seed is meticulously cleaned and polished. Any impurities on the seed surface would propagate defects through the entire growth process, so preparation is critical.",
        stat: { label: "Seed Size", value: "< 1 mm" },
        image: "/images/process/seed_selection.png",
    },
    {
        id: 2,
        icon: FlaskConical,
        title: "Growth Environment",
        subtitle: "Chamber Setup",
        description:
            "The diamond seed is placed inside a highly controlled growth chamber. The environment is precisely calibrated — temperature, pressure, and gas mixture are all tuned to atom-level accuracy before growth begins.",
        detail:
            "For HPHT: a belt press applies 1.5 million PSI at 1,500 °C. For CVD: the chamber is evacuated to near-vacuum before introducing the carbon-rich gas mixture.",
        stat: { label: "Temperature", value: "900 – 1,500 °C" },
        image: "/images/process/growth_chamber.png",
    },
    {
        id: 3,
        icon: Zap,
        title: "Carbon Activation",
        subtitle: "Ionisation Process",
        description:
            "A mixture of methane (CH₄) and hydrogen gas is superheated into a plasma state using microwave energy. This breaks molecular bonds and liberates free carbon atoms ready to bond to the growing crystal.",
        detail:
            "The plasma reaches temperatures exceeding 3,000 °C — hotter than the surface of the sun. Hydrogen gas etches away non-diamond carbon, ensuring only pure diamond crystal forms.",
        stat: { label: "Plasma Temp", value: "> 3,000 °C" },
        image: "/images/process/carbon_activation.png",
    },
    {
        id: 4,
        icon: Layers,
        title: "Crystal Growth",
        subtitle: "Atom-by-Atom Deposition",
        description:
            "Free carbon atoms rain down onto the diamond seed and bond layer by layer, following the crystal structure exactly. Over days to weeks, a rough diamond crystal grows in the chamber — identical in chemistry to a mined diamond.",
        detail:
            "Growth rates are typically 0.006–0.5 mm per hour depending on method and desired quality. Slower growth yields higher clarity and fewer inclusions.",
        stat: { label: "Growth Rate", value: "0.006 – 0.5 mm/hr" },
        image: "/images/process/crystal_growth.png",
    },
    {
        id: 5,
        icon: ScanSearch,
        title: "Rough Extraction",
        subtitle: "Harvesting & Inspection",
        description:
            "Once the diamond reaches target size, the growth process is stopped. The rough lab-grown diamond is carefully extracted from the chamber and undergoes initial inspection to assess size, shape, and internal quality.",
        detail:
            "The rough diamond is photographed and scanned using advanced imaging technology to map inclusions and plan the optimal cut for maximum yield and brilliance.",
        stat: { label: "Typical Size", value: "1 – 10+ carats" },
        image: "/images/process/rough_extraction.png",
    },
    {
        id: 6,
        icon: Scissors,
        title: "Cutting & Polishing",
        subtitle: "Master Craftsmanship",
        description:
            "Skilled craftspeople plan and execute the cut to maximise light performance. Each facet is precision-polished using diamond-tipped wheels, unlocking the stone's brilliance, fire, and scintillation.",
        detail:
            "Modern laser cutting technology allows submicron precision. A well-cut diamond returns light perfectly through its table, creating that iconic sparkle.",
        stat: { label: "Facets", value: "57 – 58 (brilliant)" },
        image: "/images/process/cutting_polishing.png",
    },
    {
        id: 7,
        icon: Award,
        title: "Certification",
        subtitle: "Graded & Certified",
        description:
            "Every lab-grown diamond is independently graded by world-class gemological institutes (IGI, GIA) on the 4Cs — Cut, Colour, Clarity, and Carat. The certificate guarantees authenticity and quality.",
        detail:
            "Lab-grown diamonds receive the same grades as mined diamonds on the exact same 4C scale. There is zero difference in physical, chemical, or optical properties.",
        stat: { label: "Graded By", value: "IGI / GIA" },
        image: "/images/process/certification.png",
    },
];

const methods = [
    {
        id: "cvd",
        label: "CVD",
        fullName: "Chemical Vapor Deposition",
        description:
            "Carbon-rich gas (methane) is activated into plasma by microwaves. Carbon atoms deposit layer-by-layer onto the diamond seed in a low-pressure chamber. Produces exceptionally pure, large diamonds.",
        highlights: ["Superior purity", "Larger single crystals", "Precise colour control", "Lower energy use"],
        image: "/images/process/carbon_activation.png",
    },
    {
        id: "hpht",
        label: "HPHT",
        fullName: "High Pressure High Temperature",
        description:
            "Replicates the Earth's mantle conditions — extreme pressure (1.5M PSI) and heat (1,500 °C) — to crystallise carbon around a seed. The oldest and most established lab-diamond method.",
        highlights: ["Proven technology", "Faster growth", "Strong crystal structure", "Cost effective"],
        image: "/images/process/hpht_process.png",
    },
];

export default function LabGrownProcess() {
    const [activeStep, setActiveStep] = useState(0);
    const [activeMethod, setActiveMethod] = useState("cvd");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback(
        (index) => {
            if (isTransitioning || index === activeStep) return;
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveStep(index);
                setTimeout(() => setIsTransitioning(false), 50);
            }, 250);
        },
        [isTransitioning, activeStep]
    );

    const next = useCallback(() => {
        goTo((activeStep + 1) % steps.length);
    }, [activeStep, goTo]);

    const prev = useCallback(() => {
        goTo((activeStep - 1 + steps.length) % steps.length);
    }, [activeStep, goTo]);

    const current = steps[activeStep];
    const Icon = current.icon;
    const method = methods.find((m) => m.id === activeMethod);

    return (
        <section className="w-full bg-[#1A1A1A] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* ─── Header ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-16 sm:mb-20 lg:mb-24">
                    <div>
                        <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
                            The Process
                        </p>
                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                            How Lab-Grown Diamonds
                            <br />
                            <span className="font-semibold">Are Created</span>
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-white/40 text-base sm:text-lg leading-relaxed font-light max-w-lg">
                            Atom by atom, in weeks — not millions of years. Using advanced CVD and HPHT
                            technology, we grow diamonds that are chemically, physically, and optically
                            identical to those formed deep within the Earth.
                        </p>
                    </div>
                </div>

                {/* ─── Divider ─── */}
                <div className="w-full h-px bg-white/10 mb-16 sm:mb-20" />

                {/* ─── Method Toggle with Images ─── */}
                <div className="mb-16 sm:mb-20">
                    <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-8 font-light">
                        Growth Method
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                        {methods.map((m) => {
                            const isActive = activeMethod === m.id;
                            return (
                                <button
                                    key={m.id}
                                    onClick={() => setActiveMethod(m.id)}
                                    className={`
                                        group relative text-left transition-all duration-500
                                        border border-white/10 overflow-hidden
                                        ${isActive ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}
                                    `}
                                >
                                    {/* Active indicator */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-[2px] bg-[#B88A6A] transition-all duration-500 z-20 ${
                                            isActive ? "opacity-100" : "opacity-0"
                                        }`}
                                    />

                                    {/* Method Image */}
                                    <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                                        <img
                                            src={m.image}
                                            alt={m.fullName}
                                            className={`w-full h-full object-cover transition-all duration-700 ${
                                                isActive ? "scale-105 opacity-60" : "scale-100 opacity-30 group-hover:opacity-40 group-hover:scale-102"
                                            }`}
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent" />

                                        {/* Faded label overlay */}
                                        <span className="absolute top-4 right-4 text-white/[0.08] text-[60px] sm:text-[80px] font-bold leading-none select-none pointer-events-none">
                                            {m.label}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 p-8 sm:p-10 -mt-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#B88A6A]/30 rounded-full mb-5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#B88A6A]" />
                                            <span className="text-[#B88A6A] text-[11px] tracking-[0.2em] uppercase font-light">
                                                {m.label}
                                            </span>
                                        </div>

                                        <h3 className={`text-xl sm:text-2xl font-light mb-4 transition-colors duration-300 ${
                                            isActive ? "text-white" : "text-white/50"
                                        }`}>
                                            {m.fullName}
                                        </h3>

                                        <p className={`text-sm sm:text-[15px] leading-relaxed font-light mb-6 transition-colors duration-300 ${
                                            isActive ? "text-white/50" : "text-white/25"
                                        }`}>
                                            {m.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            {m.highlights.map((h, i) => (
                                                <span
                                                    key={i}
                                                    className={`text-xs tracking-wider px-3 py-1.5 rounded-full border transition-all duration-300 ${
                                                        isActive
                                                            ? "border-[#B88A6A]/30 text-[#B88A6A]/80"
                                                            : "border-white/10 text-white/20"
                                                    }`}
                                                >
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ─── Divider ─── */}
                <div className="w-full h-px bg-white/10 mb-16 sm:mb-20" />

                {/* ─── Process Steps Section ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

                    {/* Left — Step Selector */}
                    <div className="lg:col-span-5 border-t border-white/10">
                        {steps.map((step, index) => {
                            const StepIcon = step.icon;
                            const isActive = activeStep === index;

                            return (
                                <div
                                    key={step.id}
                                    onClick={() => goTo(index)}
                                    className={`
                                        group relative flex items-center justify-between
                                        px-5 sm:px-8 py-6 sm:py-7
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
                                        {/* Number */}
                                        <span className={`text-xs font-light tracking-widest transition-colors duration-300 ${
                                            isActive ? "text-[#B88A6A]" : "text-white/20"
                                        }`}>
                                            0{step.id}
                                        </span>

                                        {/* Icon */}
                                        <div className={`
                                            p-3 rounded-xl transition-all duration-300
                                            ${isActive
                                                ? "bg-[#B88A6A]/15 shadow-lg shadow-[#B88A6A]/5"
                                                : "bg-white/5 group-hover:bg-white/10"}
                                        `}>
                                            <StepIcon className={`w-5 h-5 transition-colors duration-300 ${
                                                isActive ? "text-[#B88A6A]" : "text-white/40 group-hover:text-white/60"
                                            }`} />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <span className={`block text-base sm:text-lg font-light transition-colors duration-300 ${
                                                isActive ? "text-white" : "text-white/50 group-hover:text-white/70"
                                            }`}>
                                                {step.title}
                                            </span>
                                            <span className={`block text-[11px] sm:text-xs tracking-wider uppercase mt-1 transition-colors duration-300 ${
                                                isActive ? "text-[#B88A6A]/80" : "text-white/20"
                                            }`}>
                                                {step.subtitle}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div
                                        className={`
                                            rounded-full p-2.5 sm:p-3 transition-all duration-300
                                            ${isActive
                                                ? "bg-[#B88A6A] text-white shadow-lg shadow-[#B88A6A]/20"
                                                : "bg-white/5 text-white/25 group-hover:bg-white/10 group-hover:text-white/40"}
                                        `}
                                    >
                                        <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                                            isActive ? "translate-x-0.5" : ""
                                        }`} />
                                    </div>
                                </div>
                            );
                        })}

                        {/* Step Navigation */}
                        <div className="flex items-center justify-between px-5 sm:px-8 py-6">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={prev}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 text-white/50
                                               hover:border-[#B88A6A] hover:text-[#B88A6A] transition-all duration-300
                                               flex items-center justify-center"
                                >
                                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <button
                                    onClick={next}
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 text-white/50
                                               hover:border-[#B88A6A] hover:text-[#B88A6A] transition-all duration-300
                                               flex items-center justify-center"
                                >
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>

                            {/* Progress dots */}
                            <div className="flex items-center gap-2">
                                {steps.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i)}
                                        className="group relative h-[2px] transition-all duration-500"
                                        style={{ width: i === activeStep ? "28px" : "12px" }}
                                    >
                                        <div
                                            className={`absolute inset-0 rounded-full transition-all duration-500 ${
                                                i === activeStep ? "bg-[#B88A6A]" : "bg-white/15 group-hover:bg-white/30"
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right — Detail Panel with Image */}
                    <div className="lg:col-span-7 relative overflow-hidden border-t lg:border-t border-white/10 lg:border-l">

                        {/* ─── Hero Image Section ─── */}
                        <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
                            <img
                                key={current.id}
                                src={current.image}
                                alt={current.title}
                                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                                    isTransitioning ? "opacity-0 scale-105" : "opacity-100 scale-100"
                                }`}
                            />
                            {/* Multi-layer gradient overlays for cinematic feel */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/30 via-transparent to-[#1A1A1A]/20" />

                            {/* Step number overlaid on image */}
                            <div className="absolute top-6 right-8 sm:top-8 sm:right-12 text-white/[0.08] text-[100px] sm:text-[140px] font-bold leading-none select-none pointer-events-none">
                                0{current.id}
                            </div>

                            {/* Image caption bar */}
                            <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-12 lg:px-16 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-[#B88A6A]/60" />
                                    <span className="text-[#B88A6A]/70 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-light">
                                        {current.subtitle}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Background subtle gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B88A6A]/[0.03] via-transparent to-transparent pointer-events-none" />

                        {/* ─── Text Content ─── */}
                        <div
                            className={`relative z-10 p-8 sm:p-12 lg:p-16 transition-opacity duration-250 ${
                                isTransitioning ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#B88A6A]/30 rounded-full mb-8 w-fit">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#B88A6A]" />
                                <span className="text-[#B88A6A] text-[11px] sm:text-xs tracking-[0.2em] uppercase font-light">
                                    Step 0{current.id} — {current.subtitle}
                                </span>
                            </div>

                            {/* Icon + Title */}
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 rounded-xl bg-[#B88A6A]/10 border border-[#B88A6A]/20 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-[#B88A6A]" />
                                </div>
                                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                                    {current.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-white/50 text-base sm:text-lg lg:text-xl leading-relaxed font-light mb-8 sm:mb-10">
                                {current.description}
                            </p>

                            {/* Detail callout */}
                            <div className="border-l-2 border-[#B88A6A]/40 pl-6 mb-10">
                                <p className="text-white/30 text-sm sm:text-[15px] leading-relaxed font-light italic">
                                    {current.detail}
                                </p>
                            </div>

                            {/* Stat */}
                            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                                <div>
                                    <span className="text-white/20 text-xs tracking-[0.3em] uppercase font-light block mb-2">
                                        {current.stat.label}
                                    </span>
                                    <span className="text-[#B88A6A] text-2xl sm:text-3xl font-light">
                                        {current.stat.value}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ─── Bottom Summary Stats ─── */}
                <div className="w-full h-px bg-white/10 mt-16 sm:mt-20 mb-16 sm:mb-20" />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                    {[
                        { value: "100%", label: "Real Diamond", desc: "Chemically identical to mined" },
                        { value: "~ 4 Weeks", label: "Growth Time", desc: "From seed to rough crystal" },
                        { value: "Zero", label: "Mining Required", desc: "Conflict-free by design" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 sm:p-10 text-center transition-all duration-500 hover:bg-white/[0.03]
                                ${index < 2 ? "border-b sm:border-b-0 sm:border-r border-white/10" : ""}
                            `}
                        >
                            <span className="text-white/[0.06] text-[80px] font-bold absolute top-2 right-4 leading-none select-none pointer-events-none">
                                0{index + 1}
                            </span>
                            <div className="relative z-10">
                                <p className="text-[#B88A6A] text-3xl sm:text-4xl font-light mb-2">
                                    {item.value}
                                </p>
                                <p className="text-white text-lg font-light mb-2">
                                    {item.label}
                                </p>
                                <p className="text-white/30 text-sm font-light">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
