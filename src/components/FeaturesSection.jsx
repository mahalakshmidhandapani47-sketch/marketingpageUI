const FeaturesSection = () => {
  return (
    <section className="relative py-32 bg-[#050816] text-center">

      {/* Top Text */}
      <p className="text-purple-400 text-sm mb-4">
        Chat integration options
      </p>

      <h1 className="text-4xl md:text-5xl font-semibold">
        Your launch, your way. Done right.
      </h1>

      <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
        Start with what gets you to production fastest — or matches your needs the best.
        Swap it out or level it up later.
      </p>
          {/* IMAGE */}
  <div className="mt-6 p-4 rounded-xl border border-white/10 bg-[#0a0a1a] flex justify-center">
    <img
      src="/demo8.png"
      alt=""
      className="w-full max-w-[900px] rounded-lg"
    />
  </div>
    

    </section>
  );
};

export default FeaturesSection;