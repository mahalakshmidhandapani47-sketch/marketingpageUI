const HeroFive = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 z-10">



          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
            Built for LLM-native interactions, out of the box.
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
            Our platform is built for performance and scalability,
            ensuring your applications run smoothly as your user base grows.
            No bottlenecks, no compromises.
          </p>

          <div className="mt-8 flex gap-4">
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 relative flex justify-center items-center">

          {/* Glow */}
          <div className="absolute w-[320px] h-[500px] bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 blur-3xl opacity-30 rounded-xl"></div>


          {/* Image */}
          <img
            src="/demo5.png"
            alt=""
            className="relative w-[800px] md:w-[850px] rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroFive;