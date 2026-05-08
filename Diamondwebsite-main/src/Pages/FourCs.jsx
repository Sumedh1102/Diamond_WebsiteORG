import React from 'react';

const FourCs = () => {
    const heroImage = "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80&w=2000";

    const categories = [
        { title: "Cut", desc: "The cut of a diamond is the most important factor in determining its brilliance. A well-cut diamond reflects light perfectly through its facets." },
        { title: "Color", desc: "Diamonds are graded on a scale from colorless to light yellow. Truly colorless diamonds are the rarest and most valuable." },
        { title: "Clarity", desc: "Clarity measures the purity of a diamond, identifying internal inclusions or external blemishes. Lab-grown diamonds often achieve exceptional clarity." },
        { title: "Carat", desc: "Carat weight measures the size of the diamond. Larger carats are rarer, but the cut quality remains the key to its overall beauty." }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="4Cs of Diamonds"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4 uppercase">
                        The 4C's of Diamonds
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        The global standard for assessing diamond quality.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((c, idx) => (
                        <div key={idx} className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
                            <h3 className="text-2xl font-light text-[#B88A6A] mb-4 uppercase tracking-wider">{c.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-light">{c.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-[#1A1A1A] rounded-3xl text-white">
                    <h2 className="text-4xl font-light mb-8">Why it matters?</h2>
                    <p className="text-xl text-white/80 leading-relaxed font-light mb-0">
                        Understanding the 4C's empowers you to prioritize what matters most in your diamond search. Whether it's the sheer size (Carat) or the perfect sparkle (Cut), our lab-grown diamonds are curated to excel in every category, offering you premium quality with ethical transparency.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FourCs;
