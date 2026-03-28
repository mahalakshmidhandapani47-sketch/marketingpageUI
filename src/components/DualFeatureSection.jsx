const DualFeatureSection = () => {
  return (
    <section className="relative py-32 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT CARD */}
        <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">

          {/* Title */}
          <h2 className="text-xl font-semibold mb-4">
            BYOB - Bring Your Own (Agent) Brain
          </h2>

          {/* Points */}
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>✦ Use your existing LLM orchestration</li>
            <li>✦ Plug into CometChat's UI, mod, notifications, and insights</li>
            <li>✦ Modular, protocol-compatible, and fast to implement</li>
          </ul>

          {/* Learn More */}
          <p className="mt-4 text-purple-400 cursor-pointer">Learn more</p>
            {/* IMAGE */}
  <div className="mt-6 p-4 rounded-xl border border-white/10 bg-[#0a0a1a] flex justify-center">
    <img
      src="/AI.png"
      alt=""
      className="w-full max-w-[500px] rounded-lg"
    />
  </div>

        </div>

        {/* RIGHT CARD */}
        <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">

          {/* Title */}
          <h2 className="text-xl font-semibold mb-4">
            Build Inside CometChat
          </h2>

          {/* Points */}
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>✦ Visual Agent Builder</li>
            <li>✦ Design prompt logic, memory, retries, tool use</li>
            <li>✦ Simulate and ship - all from a single canvas</li>
          </ul>

          {/* Learn More */}
          <p className="mt-4 text-purple-400 cursor-pointer">Learn more</p>
            {/* IMAGE */}
  <div className="mt-6 p-4 rounded-xl border border-white/10 bg-[#0a0a1a] flex justify-center">
    <img
      src="/Ai1.png"
      alt=""
      className="w-full max-w-[500px] rounded-lg"
    />
  </div>

        </div>

      </div>

    </section>
  );
};

export default DualFeatureSection;