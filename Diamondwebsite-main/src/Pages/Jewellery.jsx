import React from 'react';
import heroImage from '../assets/diamond_jewellery_hero.png';

const steps = [
  {
    id: 'designing',
    title: 'DESIGNING',
    image: '/images/designing_image.png',
    alt: 'Jewellery designing sketch',
    text: 'Crafting of Diyora jewellery is preceded by meticulous planning and preparation. The inspiration behind our pieces varies, it may be an unusual gemstone, a jewellery competition or a previous, successful design, but they are designed with multidimensional forms and their harmony in mind. We hand sketch the jewellery shape at length, taking functionality, comfort, durability and protection of gemstones and diamonds in mind.',
  },
  {
    id: 'cadcam',
    title: 'CAD/CAM',
    image: '/images/cadcam_image_1780333143075.png',
    alt: 'CAD CAM jewellery design',
    text: 'When one of the sketches is chosen to be crafted, we use design software to refine our plans. We create three dimensional shapes with the help of the design software which allows us to notice and resolve imperfections. This new technology allows us to examine the jewellery design from all angles so we easily recognise if there is a break in a curve, a crease on a surface or any other problem that needs to be resolved. The crafting of the jewellery item is done completely with a high-precision 3D printer and creating the precious gold metal version of the part is based on that.',
  },
  {
    id: 'setting-polishing',
    title: 'SETTING & POLISHING',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88558?w=800&q=80',
    alt: 'Jewellery setting and polishing',
    text: 'The completed precious metal piece has to undergo a number of short processes. It is at this stage that the carefully selected gemstones, diamonds and/or pearls are set, by an outstandingly gifted and knowledgeable colleague who ensures the settings are both protective and attractive. This is done under a microscope with meticulous precision and at an artistic level. It is at this stage when decorative engraving, enamels, decorative and enhancing treatments are also applied to the piece.',
  },
  {
    id: 'packaging-shipping',
    title: 'Packaging & Shipping',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    alt: 'Jewellery packaging and shipping',
    text: 'The ordered jewellery piece is placed in elegant packaging along with necessary documents and then shipped to the respective customers\' address. We believe that a beautiful dainty piece of Jewellery should be packed in durable packaging that is equally beautiful and sturdy.',
  },
];

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
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-light tracking-widest mb-4 uppercase">
            Jewellery
          </h1>
          <p className="text-white text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Exquisite designs, crafted with sustainable luxury.
          </p>
        </div>
      </div>

      {/* Process Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-28">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={step.id}
              className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-72 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-10 bg-gray-400" />
                  <span className="text-xs tracking-[0.3em] text-gray-400 uppercase">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide uppercase mb-6">
                  {step.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jewellery;
