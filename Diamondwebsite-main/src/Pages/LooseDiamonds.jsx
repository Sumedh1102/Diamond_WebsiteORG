import React, { useRef, useEffect, useState } from 'react';
import heroImage from '../assets/loose_diamonds_hero.png';

const diamondCategories = [
    {
        title: 'LOOSE DIAMONDS',
        description: `Loose Diamonds are Diamonds that have been cut and polished but are not yet set into jewelry. They are sold separately, allowing the buyer to choose their preferred size, shape, and quality of the diamond, and then have it set into a piece of jewelry or kept as an investment.

Loose Diamonds come in a wide range of sizes, shapes, colors, and clarities. The most popular shape for Loose Diamonds is the round brilliant, which is designed to maximize the Diamond's sparkle and brilliance. Other popular shapes include the princess, emerald, oval, pear, and marquise.

When purchasing a loose diamond, it's important to consider the Diamond's 4Cs - Cut, Color, Clarity, and Carat weight - which determine its overall quality and value. The cut of the Diamond refers to its proportions and how well it reflects light, while the color refers to the Diamond's hue and saturation. Clarity refers to the presence of inclusions and blemishes in the Diamond, and Carat weight is the measurement of the diamond's size and weight.

Loose Diamonds from DIYORA offers a great deal of flexibility and customization for those looking to purchase a Diamond for an engagement ring, special occasion, or investment.`,
        image: heroImage,
    },
        {
        title: 'White',
        tagline: 'Absolutely colorless.',
        description: `Premium white diamonds known for their brilliance and clarity. These diamonds represent the purest form and are ideal for luxury jewelry pieces.

Color : D to H color IF to SI3 quality Size in carat : 0.003 ct to 0.35 ct Size in mm : 0.8 mm to 4.2 mm`,
        image: heroImage,
    },
    {
        title: '100+ Shapes',
        tagline: '100+ Shapes',
        description: `Yes, you read it right!, Our artistic workshop delivers diamonds with a personal touch that brings undisputed elegance, customization and unsurpassed quality to your jewellery.

Fancy shape Diamonds are any Diamonds that are not round in shape, such as princess, emerald, oval, pear, marquise, heart, and cushion cuts. These shapes are less common than the traditional round brilliant cut and can offer a unique look to a piece of jewelry. The value of a fancy shape diamond is based on the same 4Cs as a round diamond - cut, color, clarity, and carat weight. We can create diamonds of any shape in 30 days. Diamond shapes range from rounded to sharp angles. For example, oval cuts are extremely versatile and can fit into jewelry designs of all kinds. Princess cuts are popular with consumers who want a more attractive stone with a better cut.`,
        image: heroImage,
    },
    {
        title: '30+ Fancy Colors',
        description: `With around 40+ years of experience and expertise in creating seamlessly authentic Diamonds, Diyora Diamond has proudly built a successful track record of crafting one-of-a-kind Diamonds in over 30 fancy colors.

We have a built-in inventory to deliver you your customized color within 30 days, be it any shade or tone.

Chemically pure and structurally perfect Diamonds are colorless. Thankfully nature is not always perfect, and as a result, small traces of impurities or structural discrepancies result in Diamonds that exhibit different colors. If these occur in high enough concentrations, Diamonds exhibit strong and vibrant displays of color, known as fancy color.

Fancy colored Diamonds are exceedingly rare compared to their colorless counterparts. Furthermore, their rarity is enhanced by the intensity of their color, and some fancy color are more rare than others.`,
        image: heroImage,
    },
];

const LooseDiamonds = () => {
    const [visibleSections, setVisibleSections] = useState(new Set());
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observers = sectionRefs.current.map((ref, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set([...prev, index]));
                    }
                },
                { threshold: 0.2 }
            );
            if (ref) observer.observe(ref);
            return observer;
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    return (
        <div className="bg-[#1A1A1A] min-h-screen">

            {/* Hero Section */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Loose Diamonds"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-black/40 to-[#1A1A1A]" />
                <div className="relative text-center px-6">
                    <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-light">
                        Our Collection
                    </p>
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4">
                        LOOSE DIAMONDS
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Individual brilliance, hand-selected for your unique vision.
                    </p>
                </div>
            </div>

            {/* Quality Statement Section */}
            <section className="w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
                        Our Promise
                    </p>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                        Quality in what we offer.
                        <br />
                        <span className="font-semibold">Quality in what we do.</span>
                    </h2>
                    <div className="w-16 h-px bg-[#B88A6A]/40 mx-auto my-8" />
                    <p className="text-white/40 text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto">
                        While the range of our services is broad and almost all-encompassing when it comes to meeting client requirements, our product range is specific and well defined.
                    </p>
                    <p className="text-white/40 text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-3xl mx-auto">
                        While we specialise only in round brilliant cuts, within this we offer possibly the widest range of colours in the finest quality possible and the most convenient systems imaginable to ensure that you have exactly what you need.
                    </p>
                    <p className="text-white/60 text-xl sm:text-2xl font-light italic pt-6">
                        "At the very point when you realise you need it."
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="w-full h-px bg-white/10" />
            </div>

            {/* Products Header */}
            <section className="w-full py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-[#B88A6A] text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 font-light">
                        Products
                    </p>
                    <h3 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                        All you need,
                        <br />
                        <span className="font-semibold">everything you want.</span>
                    </h3>
                </div>
            </section>

            {/* Diamond Categories */}
            <section className="w-full pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-12">
                <div className="max-w-7xl mx-auto space-y-0">
                    {diamondCategories.map((category, index) => {
                        const isEven = index % 2 === 0;
                        const isVisible = visibleSections.has(index);

                        return (
                            <div
                                key={category.title}
                                ref={(el) => (sectionRefs.current[index] = el)}
                                className={`
                                    grid grid-cols-1 lg:grid-cols-2 gap-0
                                    border-t border-white/10
                                    ${index === diamondCategories.length - 1 ? 'border-b' : ''}
                                    transition-all duration-1000
                                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                `}
                            >
                                {/* Image */}
                                <div className={`relative min-h-[400px] lg:min-h-[500px] overflow-hidden group ${!isEven ? 'lg:order-2' : ''}`}>
                                    <img
                                        src={category.image}
                                        alt={`${category.title} Diamonds`}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent" />
                                    {/* Number overlay */}
                                    <div className="absolute top-6 left-6">
                                        <span className="text-white/10 text-[80px] sm:text-[120px] font-bold leading-none select-none pointer-events-none">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`flex items-center ${!isEven ? 'lg:order-1' : ''}`}>
                                    <div className="p-10 sm:p-14 lg:p-20 w-full">
                                        <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-6 font-light">
                                            Diamond Category
                                        </p>
                                        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                                            {category.title}
                                        </h2>
                                        {category.tagline && (
                                            <div className="flex items-center gap-3 mb-8">
                                                <div className="w-8 h-px bg-[#B88A6A]" />
                                                <p className="text-[#B88A6A]/80 text-sm sm:text-base tracking-wider uppercase font-light">
                                                    {category.tagline}
                                                </p>
                                            </div>
                                        )}
                                        <div className="text-white/40 text-base sm:text-lg leading-relaxed font-light max-w-lg space-y-4">
                                            {category.description.split('\n\n').map((para, i) => (
                                                <p key={i}>{para}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default LooseDiamonds;
