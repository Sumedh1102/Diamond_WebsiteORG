import React from 'react';
import heroImage from '../assets/bruting_fluting_hero.png';

const BrutingAndFluting = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Bagging and Fluting"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4 uppercase">
                        Bagging & Fluting
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Precision shaping for the ultimate brilliance.
                    </p>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="max-w-5xl mx-auto px-6 pt-20 pb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 uppercase tracking-widest">
                    Beyond Requirements. Beyond Expectations. To Precision.
                </h2>
                <p className="text-xl italic text-[#B88A6A] font-light mb-10">
                    “It’s not about what you may ask for. It’s about how we can delight you.”
                </p>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        For most people, diamonds are just products. But for us, diamonds represent something far more meaningful. Every stone carries precision, craftsmanship, and trust.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        We believe that the finer the product, the finer the service should be. From the moment a diamond enters our system until it reaches its final destination, every stage is handled with exceptional care and advanced technology.
                    </p>
                    <p className="text-lg text-gray-600 leading-bold text-black font-medium">
                        Our goal is simple — to deliver the finest diamonds while minimizing uncertainty and ensuring complete trust.
                    </p>
                </div>
            </div>

            {/* Detailed Services Grid */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* 1. Verification */}
                    <div className="p-10 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
                        <div className="text-[#B88A6A] text-sm font-medium mb-2 tracking-widest uppercase">01. Verification</div>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">“Zero is the only level of tolerable doubt.”</h3>
                        <p className="text-gray-600 leading-relaxed font-light mb-6">
                            When a diamond enters our system, it undergoes a strict verification process. Every diamond is carefully checked and analyzed to confirm its authenticity, quality, and specifications.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Using advanced scanning technology and expert inspection, we ensure that every stone meets the highest industry standards before proceeding to the next stage.
                        </p>
                    </div>

                    {/* 2. Assortment */}
                    <div className="p-10 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
                        <div className="text-[#B88A6A] text-sm font-medium mb-2 tracking-widest uppercase">02. Assortment</div>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">“Check. Check. Check. Are the first 3 of seven stages.”</h3>
                        <p className="text-gray-600 leading-relaxed font-light mb-6">
                            Sorting and assorting diamonds is both an art and a science. Our skilled professionals classify diamonds based on multiple parameters such as size, shape, color, and clarity.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            This systematic sorting ensures accuracy and consistency for clients who require precisely matched diamond assortments.
                        </p>
                    </div>

                    {/* 3. Matching & Bagging */}
                    <div className="p-10 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
                        <div className="text-[#B88A6A] text-sm font-medium mb-2 tracking-widest uppercase">03. Matching & Bagging</div>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">“Beyond sets to families.”</h3>
                        <p className="text-gray-600 leading-relaxed font-light mb-6">
                            Diamonds are carefully matched to create perfectly balanced sets and assortments. The process ensures that diamonds within a group maintain a consistent appearance and characteristics.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Once matched, the diamonds are securely bagged and labeled to maintain traceability and organization throughout the supply chain.
                        </p>
                    </div>

                    {/* 4. Calibration */}
                    <div className="p-10 border border-gray-100 rounded-3xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
                        <div className="text-[#B88A6A] text-sm font-medium mb-2 tracking-widest uppercase">04. Calibration</div>
                        <h3 className="text-2xl font-light text-gray-900 mb-4">“Exactitude in a repeated manner.”</h3>
                        <p className="text-gray-600 leading-relaxed font-light mb-6">
                            Calibration ensures that diamonds are consistently sized and sorted to exact measurements. This precision is essential for jewelry manufacturers who require uniform diamonds for their designs.
                        </p>
                        <p className="text-gray-600 leading-relaxed font-light">
                            Our calibration process guarantees repeatable accuracy and reliability, ensuring every batch meets strict quality standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrutingAndFluting;
