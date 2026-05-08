import React from 'react';

const Process = () => {
    const heroImage = "https://images.unsplash.com/photo-1598501479155-208d85316411?auto=format&fit=crop&q=80&w=2000";

    const steps = [
        {
            title: "Step 1 – Planning",
            quote: "The first stage involves carefully examining the rough diamond to determine how it should be cut.",
            desc: "Experts analyze the stone's size, shape, natural inclusions, and internal structure. Advanced planning ensures that the diamond is cut in a way that maximizes its brilliance, symmetry, and overall value while minimizing material loss."
        },
        {
            title: "Step 2 – Cleaving / Sawing",
            quote: "Once the plan is finalized, the rough diamond is divided into smaller workable pieces.",
            desc: "This is done through Cleaving (splitting along natural planes) or Sawing (using specialized diamond-tipped blades or lasers). This step removes unwanted imperfections and prepares the stone for shaping."
        },
        {
            title: "Step 3 – Cutting & Polishing",
            quote: "In this stage, the diamond begins to take its final shape.",
            desc: "Skilled cutters shape the diamond into popular styles such as Round Brilliant, Princess, Pear, Oval, or Emerald cuts. craftsmen then use fine diamond powder to polish each facet, enhancing its brilliance and sparkle."
        },
        {
            title: "Step 4 – Grading",
            quote: "The final step is diamond grading based on the internationally recognized 4Cs.",
            desc: "Professional grading evaluates Cut, Color, Clarity, and Carat Weight to determine the diamond’s quality and market value, ensuring it meets the highest standards of perfection."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Natural Diamonds"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-8xl font-light tracking-[0.2em] mb-4 uppercase">
                        Natural Diamonds
                    </h1>
                    <div className="w-24 h-0.5 bg-[#B88A6A] mx-auto mt-8 mb-4"></div>
                </div>
            </div>

            {/* Intro Section */}
            <div className="max-w-5xl mx-auto px-6 py-24">
                <div className="space-y-8 text-center mb-24">
                    <p className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed max-w-4xl mx-auto">
                        Natural Diamonds are precious gemstones formed deep within the Earth's mantle under extreme heat and pressure over billions of years.
                    </p>
                    <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            Composed of pure carbon atoms arranged in a crystal lattice structure, these gems possess exceptional hardness, brilliance, and durability. Most are found in kimberlite pipes—volcanic formations that carry diamonds to the surface—or in sedimentary layers known as alluvial deposits.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            Highly valued for their rarity, beauty, and timeless appeal, natural diamonds have for centuries been associated with love, commitment, and prestige. Their unique formation and historical significance make them the most treasured gemstones in the world.
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-100 my-24"></div>

                {/* Process Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-sm tracking-[0.3em] uppercase text-[#B88A6A] font-semibold mb-4">The Art of Refinement</h2>
                    <h3 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 uppercase tracking-widest leading-tight">
                        From Rough Stone to <br /> Finished Diamond
                    </h3>
                    <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg">
                        Transforming a rough diamond into a beautifully finished gemstone involves a precise and highly skilled journey of planning, cutting, and polishing.
                    </p>
                </div>

                {/* Vertical Process Steps */}
                <div className="space-y-32">
                    {steps.map((step, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
                            <div className="flex-1 space-y-6">
                                <div className="text-6xl font-black text-gray-50 mb-2">0{idx + 1}</div>
                                <h4 className="text-2xl font-medium tracking-widest text-[#1A1A1A] uppercase">{step.title}</h4>
                                <p className="text-xl italic text-[#B88A6A] font-light leading-relaxed">
                                    “{step.quote}”
                                </p>
                                <p className="text-gray-600 leading-relaxed font-light text-lg">
                                    {step.desc}
                                </p>
                            </div>
                            <div className="flex-1 w-full bg-gray-50 aspect-square rounded-3xl flex items-center justify-center p-12 border border-gray-100 italic text-gray-300 font-light text-center">
                                {/* Visual Placeholder - In a real app, specific images would go here */}
                                {step.title} Visualization Area
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final Touch Section */}
            <div className="bg-[#1A1A1A] py-24 text-center px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-light text-white mb-8 uppercase tracking-[0.2em]">Excellence in Every Facet</h2>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        Every natural diamond represents elegance, authenticity, and unmatched brilliance. The journey from the Earth's depths to a radiant masterpiece is a testament to nature's power and human craftsmanship.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Process;
