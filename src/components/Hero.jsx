const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 z-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gray-700 px-4 py-1 rounded-full text-sm text-gray-300">
            ✨ Full Stack AI Agent Platform
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
            Ship the <span className="text-purple-400">agent.</span><br />
            Skip the <span className="text-purple-400">plumbing.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-xl">
            Why are you still stitching together chat UIs, retries, moderation,
            notifications, and analytics - just to get your agent into users' hands?
            <br /><br />
            CometChat gives you the entire frontend + infra layer.
            Full stack. Modular. Production-ready.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white/10">
              Schedule a Demo
            </button>

            <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
              Try the Agent Builder
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
       <div className="flex-1 relative flex justify-center items-center">

  {/* Glow Background */}
  <div className="absolute w-[420px] h-[600px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-30 rounded-xl"></div>

  {/* Image */}
  <img
    src="/Banner images.png"   // place image inside public folder
    alt=""
    className="relative w-[450px] md:w-[550px] rounded-2xl shadow-2xl"
  />

</div>

      </div>
    </section>
  );
};

export default Hero;