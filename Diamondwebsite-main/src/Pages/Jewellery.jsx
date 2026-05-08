import React from 'react';
import heroImage from '../assets/diamond_jewellery_hero.png';

const Jewellery = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <img
                    src={heroImage}
                    alt="Diamond Jewellery"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative text-center px-6">
                    <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4 uppercase">
                        Jewellery
                    </h1>
                    <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Exquisite designs, crafted with sustainable luxury.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-light text-gray-900 mb-8">Artistry in Every Detail</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Our jewellery collection showcases the limitless possibilities of laboratory-grown diamonds. From timeless solitaire rings to contemporary statement necklaces, each piece is designed to highlight the unique beauty of our stones.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We offer both a curated collection of finished jewellery and fully customized design services, allowing you to bring your dream pieces to life with the world's most innovative diamonds.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-3xl">
                        <h3 className="text-2xl font-medium text-black mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Bespoke custom jewellery design</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Premium master craftsmanship</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">CAD/CAM technological integration</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-black mt-2" />
                                <span className="text-gray-700">Ethical and sustainable metal sourcing</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jewellery;
