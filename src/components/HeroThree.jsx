const HeroThree = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">

      {/* New Gradient Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 z-10">

          

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
           Everything you’d end up already done.
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl">
           A complete frontend and system layer for AI agents. Plug in your LLM backend or build the brain with ours.
           CometChat is the only full stack agent platform that combines logic, UI, moderation, notifications, and insights - without glue code.
            Tackle their toughest business challenges by thinking creatively about how to leverage the unique power of chat and the data it produces 
            Each of these is battle-tested, used and trusted in production by real companies, across real user scenarios.
          </p>

          <div className="mt-8 flex gap-4">
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 relative flex justify-center items-center">

          {/* Glow */}
          <div className="absolute w-[320px] h-[500px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 blur-3xl opacity-30 rounded-xl"></div>

          {/* Image */}
          <img
            src="/image demo3.png"
            alt=""
            className="relative w-[500px] md:w-[550px] rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroThree;