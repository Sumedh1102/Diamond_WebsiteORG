import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CalibratedServiceDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#1A1A1A] min-h-screen text-white pt-32 pb-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-12 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </button>

        <h1 className="text-5xl md:text-7xl font-light mb-16 tracking-tight">
          Precision <span className="text-gray-500">Services</span>
        </h1>

        <div className="space-y-24">
          {/* Bagging & Fluting */}
          <section className="relative">
            <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90">Bagging & Fluting</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
              Having worked for so long and so closely with various allied fields like jewellery design, 
              we understand the importance of matching and bagging. We know, as well as our customers, 
              that it is imperative that the stones possess more than enough similarities for them to 
              look like they truly belong together. We understand the natural syzygy that is formed 
              through competent matching and also the facilitation that comes with perfect bagging 
              simply because we've spent a lifetime understanding our customers.
            </p>
          </section>

          {/* Perfect Assortment */}
          <section className="relative">
            <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-white/90">Perfect Assortment</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light">
              We carefully curate and match diamonds by size, color, clarity, and cut to create 
              perfectly balanced parcels. Our assortment service ensures consistency across every lot, 
              ideal for jewellery manufacturers and designers.
            </p>
          </section>
        </div>

        <div className="mt-32 p-12 rounded-3xl bg-white/5 border border-white/10 text-center">
          <h3 className="text-2xl font-light mb-6 text-white/80">Ready to discuss your requirements?</h3>
          <button 
            onClick={() => navigate('/Contact')}
            className="px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Our Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalibratedServiceDetails;
