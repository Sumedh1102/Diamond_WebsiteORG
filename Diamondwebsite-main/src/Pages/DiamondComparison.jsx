import React from 'react';
import heroImage from '../assets/comparison_hero.png';

const DiamondComparison = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Diamond Comparison"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4 uppercase">
                        Diamond Comparison
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Lab-Grown vs. Mined: The same beauty, a different origin.
                    </p>
                </div>
            </div>

            {/* Comparison Table Section */}
            <div className="max-w-5xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-light text-center mb-16 uppercase tracking-widest">Scientific Truth</h2>

                <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#1A1A1A] text-white">
                                <th className="p-8 font-light uppercase tracking-wider">Property</th>
                                <th className="p-8 font-light uppercase tracking-wider text-[#B88A6A]">Lab-Grown</th>
                                <th className="p-8 font-light uppercase tracking-wider">Mined</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { label: "Chemical Composition", lab: "Carbon (100%)", mined: "Carbon (100%)" },
                                { label: "Refractive Index", lab: "2.42", mined: "2.42" },
                                { label: "Dispersion (Fire)", lab: "0.044", mined: "0.044" },
                                { label: "Hardness (Mohs)", lab: "10", mined: "10" },
                                { label: "Visual Identity", lab: "Identical", mined: "Identical" },
                                { label: "Origin", lab: "Controlled Laboratory", mined: "Underground Crust" }
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-8 font-medium text-gray-900">{row.label}</td>
                                    <td className="p-8 text-gray-600 font-light">{row.lab}</td>
                                    <td className="p-8 text-gray-600 font-light">{row.mined}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-20 grid md:grid-cols-2 gap-12">
                    <div className="p-10 border border-[#B88A6A]/20 rounded-3xl">
                        <h3 className="text-2xl font-light mb-4 uppercase">Sustainability</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Lab-grown diamonds are significantly more environmentally friendly, requiring less land disruption and water usage compared to traditional mining operations.
                        </p>
                    </div>
                    <div className="p-10 border border-[#B88A6A]/20 rounded-3xl">
                        <h3 className="text-2xl font-light mb-4 uppercase">Value</h3>
                        <p className="text-gray-600 leading-relaxed font-light">
                            By cutting out the mining supply chain, lab-grown diamonds offer 30-40% more value, allowing you to invest in a larger or higher-quality stone for the same budget.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiamondComparison;
