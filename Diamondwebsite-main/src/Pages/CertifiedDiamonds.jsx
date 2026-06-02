import React from 'react';
import heroImage from '../../certified_diamonds_hero.png';

const CertifiedDiamonds = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="IGI Certified Diamonds"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4">
                        IGI CERTIFIED DIAMONDS
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Peace of mind with every sparkle, guaranteed by world-class grading.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-light text-gray-900 mb-8">Trust in Transparency</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Every diamond in our certified collection comes with a comprehensive grading report from prestigious laboratories such as IGI (International Gemological Institute) or GIA (Gemological Institute of America).
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            These certificates provide an unbiased third-party evaluation of the diamond's quality, ensuring that what you see is exactly what you get. Our commitment to transparency means you can shop with complete confidence.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl">
                        <h3 className="text-2xl font-medium text-black mb-6">Certificate Details</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Full 4C grading analysis</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Laser inscription for security</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Origin verification (Lab-Grown)</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Digital and physical reports provided</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertifiedDiamonds;
