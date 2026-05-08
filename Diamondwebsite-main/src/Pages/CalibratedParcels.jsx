import React from 'react';
import heroImage from '../assets/calibrated_parcels_hero.png';

const CalibratedParcels = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Calibrated Parcels"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4 uppercase">
                        Calibrated Parcels
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Exact sizing for seamless manufacturing.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-light text-gray-900 mb-8">Exact Calibration</h2>
                        <p className="text-xl italic text-[#B88A6A] font-light mb-8">
                            “Exactitude in a repeated manner.”
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Calibration ensures that diamonds are consistently sized and sorted to exact measurements. This precision is essential for jewelry manufacturers who require uniform diamonds for their designs.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our calibration process guarantees repeatable accuracy and reliability, ensuring every batch meets strict quality standards and integrates perfectly into high-precision settings.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl">
                        <h3 className="text-2xl font-medium text-black mb-6">Calibration Benefits</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Consistent sizing to exact measurements</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Repeatable accuracy & reliability</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Strict quality standard compliance</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Optimized for manufacturing efficiency</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalibratedParcels;
