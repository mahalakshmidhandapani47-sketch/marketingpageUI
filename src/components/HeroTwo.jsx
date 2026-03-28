const HeroTwo = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">

      {/* Background Glow (slightly different) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">

        {/* LEFT SIDE (Content same) */}
        <div className="flex-1 z-10">
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
            Every thing your agents need to go from prototype to product-fixed.
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            CometChat gives you the entire frontend + infra layer.
            Full stack. Modular. Production-ready.
          </p>

        </div>

        {/* RIGHT SIDE (New Image) */}
        <div className="flex-1 relative flex justify-center items-center">

          {/* Glow */}
          <div className="absolute w-[320px] h-[500px] bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-xl"></div>

          {/* New Image */}
          <img
            src="/Image - Everything your agent.png"
            alt=""
            className="relative w-[400px] md:w-[550px] rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroTwo;