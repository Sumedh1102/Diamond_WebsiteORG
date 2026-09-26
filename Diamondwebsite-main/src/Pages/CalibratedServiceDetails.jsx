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
                  Our Loose Diamonds offer a great deal of flexibility and customization for those
                  looking to purchase a Diamond for an engagement ring, special occasion, or investment.
                </p>
              </div>
              <a
                href="https://wa.me/919920752390?text=Hello,%20I%20have%20an%20inquiry%20regarding%20loose%20diamonds."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-2 bg-[#B88A6A] text-white rounded-full hover:bg-[#B88A6A]/80 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
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
                    With around 40+ years of experience and expertise in creating seamlessly authentic Diamonds, we have proudly built a successful track record of crafting one-of-a-kind Diamonds in over 30 fancy colors.
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
