import React from 'react';

const DiamondSection = () => {
  const products = [
    {
      title: "Polished Lab Grown Diamonds.",
      image: "/images/polished.jpg",
      description: "Polished diamonds are the epitome of modern luxury with a perfect blend of technology and beauty, crafted to perfection by our master craftsmen. When you choose polished diamonds, you're not just indulging in the ultimate luxury; you're also making a conscious choice for an ethical future for the planet."
    },
    {
      title: "CVD Diamonds",
      image: "/images/cvd.jpg",
      description: "Type IIA diamonds are renowned for their exceptional beauty, brilliance, and rarity. In fact, they represent less than 2% of all diamonds mined or created, and consequently are usually colourless and have the highest thermal conductivity. These diamonds are completely free of nitrogen impurities, making them the most chemically pure diamonds in existence."
    },
    {
      title: "HPHT Diamonds",
      image: "/images/hpht.jpg",
      description: "HPHT stands for high pressure, high temperature and is one of the primary methods used to grow diamonds in a lab. This diamond growth process subjects carbon to extreme temperatures and pressures and is meant to replicate the extreme heat and pressure conditions deep within the earth where natural diamonds form. HPHT diamonds are one type of lab-grown diamond, where the nitrogen atoms are in large even-numbered aggregates; these impart a yellow to brown tint."
    },
    {
      title: "Melee Diamonds",
      image: "/images/melee.jpg",
      description: "In today's diamond market, there are a variety of shapes and sizes of diamonds available to choose from, and melee lab grown diamond is one of them. Melee diamonds are shiny and tiny diamonds used in jewelry and that is what makes the halo and pave settings so alluring."
    }
  ];

  return (
    <div className="bg-[#1A1A1A] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12">
              {/* Left Column - Title and Image */}
              <div className="space-y-6">
                <h2 className="text-white text-3xl lg:text-4xl font-bold">
                  {product.title}
                </h2>
                <div className="overflow-hidden rounded-lg bg-neutral-900">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column - Description */}
              <div className="space-y-4">
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Divider - Hide after last item */}
            {index < products.length - 1 && (
              <div className="border-t border-neutral-800 my-8"></div>
            )}
          </React.Fragment>
        ))}

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <div className="w-2 h-2 rounded-full bg-neutral-700"></div>
        </div>
      </div>
    </div>
  );
};

export default DiamondSection;