export default function DiamondHero() {
  return (
    <section className="relative min-h-fit w-full bg-[#1A1A1A] px-6 md:px-12 lg:px-20 py-20 overflow-hidden flex items-center">
      
      {/* Subtle diamond pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] rounded-b-[50px] border"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15L30 0zm0 30l15 15-15 15-15-15L30 30z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Heading */}
        <h1 className="text-white font-bold leading-[1.1] max-w-4xl">
          <span className="block text-5xl md:text-6xl lg:text-7xl">
            Our Products    
          </span>
        </h1>
      </div>
    </section>
  );
}
