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
          {/* Loose Diamonds */}
          <section className="relative">
            <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.08] transition-all duration-300 mb-16">
              <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 font-light">
                All you need, everything you want.
              </p>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">Loose Diamonds</h3>
              <p className="text-[#B88A6A]/85 text-sm sm:text-base tracking-wider uppercase font-light mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-[#B88A6A]" /> Premium Loose Diamonds
              </p>
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300 font-light">
                <p>
                  Loose Diamonds are Diamonds that have been cut and polished but are not yet set into jewelry. 
                  They are sold separately, allowing the buyer to choose their preferred size, shape, and quality 
                  of the diamond, and then have it set into a piece of jewelry or kept as an investment.
                </p>
                <p>
                  Loose Diamonds come in a wide range of sizes, shapes, colors, and clarities. The most popular 
                  shape for Loose Diamonds is the round brilliant, which is designed to maximize the Diamond's 
                  sparkle and brilliance. Other popular shapes include the princess, emerald, oval, pear, and marquise.
                </p>
                <p>
                  When purchasing a loose diamond, it's important to consider the Diamond's 4Cs - Cut, Color, 
                  Clarity, and Carat weight - which determine its overall quality and value. The cut of the 
                  Diamond refers to its proportions and how well it reflects light, while the color refers to 
                  the Diamond's hue and saturation. Clarity refers to the presence of inclusions and blemishes 
                  in the Diamond, and Carat weight is the measurement of the diamond's size and weight.
                </p>
                <p>
                  Loose Diamonds from DIYORA offers a great deal of flexibility and customization for those 
                  looking to purchase a Diamond for an engagement ring, special occasion, or investment.
                </p>
              </div>
            </div>

            {/* Sub-categories */}
            <div className="space-y-12">
              {/* White Diamonds Card */}
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.08] transition-all duration-300">
                <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
                <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 font-light">
                  Diamond Category
                </p>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">White Diamonds</h3>
                <p className="text-[#B88A6A]/85 text-sm sm:text-base tracking-wider uppercase font-light mb-6 flex items-center gap-2">
                  <span className="w-6 h-px bg-[#B88A6A]" /> Absolutely colorless.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-gray-300 font-light mb-8">
                  Premium white diamonds known for their brilliance and clarity. These diamonds represent the purest form and are ideal for luxury jewelry pieces.
                </p>
                
                {/* Specifications Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Color</span>
                    <span className="text-white text-sm sm:text-base font-light">D to H color</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Quality</span>
                    <span className="text-white text-sm sm:text-base font-light">IF to SI3 quality</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Size (Carat)</span>
                    <span className="text-white text-sm sm:text-base font-light">0.003 ct to 0.35 ct</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Size (mm)</span>
                    <span className="text-white text-sm sm:text-base font-light">0.8 mm to 4.2 mm</span>
                  </div>
                </div>
              </div>

              {/* 100+ Shapes Card */}
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.08] transition-all duration-300">
                <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
                <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 font-light">
                  Diamond Category
                </p>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">100+ Shapes</h3>
                <p className="text-[#B88A6A]/85 text-sm sm:text-base tracking-wider uppercase font-light mb-6 flex items-center gap-2">
                  <span className="w-6 h-px bg-[#B88A6A]" /> 100+ Shapes
                </p>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300 font-light">
                  <p className="text-white font-light text-lg">
                    Yes, you read it right! Our artistic workshop delivers diamonds with a personal touch that brings undisputed elegance, customization and unsurpassed quality to your jewellery.
                  </p>
                  <p>
                    Fancy shape Diamonds are any Diamonds that are not round in shape, such as princess, emerald, oval, pear, marquise, heart, and cushion cuts. These shapes are less common than the traditional round brilliant cut and can offer a unique look to a piece of jewelry. The value of a fancy shape diamond is based on the same 4Cs as a round diamond - cut, color, clarity, and carat weight.
                  </p>
                  <p>
                    We can create diamonds of any shape in 30 days. Diamond shapes range from rounded to sharp angles. For example, oval cuts are extremely versatile and can fit into jewelry designs of all kinds. Princess cuts are popular with consumers who want a more attractive stone with a better cut.
                  </p>
                </div>
                <button onClick={() => navigate('/diamonds')} className="mt-4 px-6 py-2 bg-[#B88A6A] text-white rounded-full hover:bg-[#B88A6A]/80 transition-colors">Explore Shapes</button>
              </div>

              {/* 30+ Fancy Colors Card */}
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.08] transition-all duration-300">
                <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
                <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 font-light">
                  Diamond Category
                </p>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">30+ Fancy Colors</h3>
                <p className="text-[#B88A6A]/85 text-sm sm:text-base tracking-wider uppercase font-light mb-6 flex items-center gap-2">
                  <span className="w-6 h-px bg-[#B88A6A]" /> 30+ Fancy Colors
                </p>
                <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300 font-light">
                  <p className="text-white font-light text-lg">
                    With around 40+ years of experience and expertise in creating seamlessly authentic Diamonds, Diyora Diamond has proudly built a successful track record of crafting one-of-a-kind Diamonds in over 30 fancy colors.
                  </p>
                  <p>
                    We have a built-in inventory to deliver you your customized color within 30 days, be it any shade or tone.
                  </p>
                  <p>
                    Chemically pure and structurally perfect Diamonds are colorless. Thankfully nature is not always perfect, and as a result, small traces of impurities or structural discrepancies result in Diamonds that exhibit different colors. If these occur in high enough concentrations, Diamonds exhibit strong and vibrant displays of color, known as fancy color.
                  </p>
                  <p>
                    Fancy colored Diamonds are exceedingly rare compared to their colorless counterparts. Furthermore, their rarity is enhanced by the intensity of their color, and some fancy color are more rare than others.
                  </p>
                </div>
                <button onClick={() => navigate('/fancy-colors')} className="mt-4 px-6 py-2 bg-[#B88A6A] text-white rounded-full hover:bg-[#B88A6A]/80 transition-colors">Explore Fancy Color Spectrum</button>
              </div>
            </div>
          </section>

          {/* Bagging & Fluting */}
          <section className="relative">
            <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.08] transition-all duration-300">
              <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 font-light">
                Precision Service
              </p>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">Bagging & Fluting</h3>
              <p className="text-[#B88A6A]/85 text-sm sm:text-base tracking-wider uppercase font-light mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-[#B88A6A]" /> Custom Matching & Sorting
              </p>
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300 font-light">
                <p>
                  Having worked for so long and so closely with various allied fields like jewellery design, 
                  we understand the importance of matching and bagging. We know, as well as our customers, 
                  that it is imperative that the stones possess more than enough similarities for them to 
                  look like they truly belong together. We understand the natural syzygy that is formed 
                  through competent matching and also the facilitation that comes with perfect bagging 
                  simply because we've spent a lifetime understanding our customers.
                </p>
              </div>
            </div>
          </section>

          {/* Perfect Assortment */}
          <section className="relative">
            <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-white/40 to-transparent" />
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/[0.08] transition-all duration-300">
              <p className="text-[#B88A6A] text-xs tracking-[0.3em] uppercase mb-3 font-light">
                Precision Service
              </p>
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">Perfect Assortment</h3>
              <p className="text-[#B88A6A]/85 text-sm sm:text-base tracking-wider uppercase font-light mb-6 flex items-center gap-2">
                <span className="w-6 h-px bg-[#B88A6A]" /> Curated & Balanced Parcels
              </p>
              <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300 font-light">
                <p>
                  We carefully curate and match diamonds by size, color, clarity, and cut to create 
                  perfectly balanced parcels. Our assortment service ensures consistency across every lot, 
                  ideal for jewellery manufacturers and designers.
                </p>
              </div>
            </div>
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
