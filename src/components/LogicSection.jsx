const LogicSection = () => {
  return (
    <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center text-center">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#050816]"></div>

      {/* Glow Lines Effect (fake lines using gradients) */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      {/* CENTER ICON */}
      <div className="relative z-10">

        {/* Glow */}
        <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-30 rounded-2xl"></div>

        {/* Box */}
        <div className="relative w-28 h-28 rounded-2xl border border-purple-500/30 bg-[#0a0a1a] flex items-center justify-center shadow-xl">

          {/* Spark Icon */}
          <span className="text-3xl text-purple-400">✨</span>

        </div>
      </div>

      {/* SIDE ICONS */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">🔗</div>
        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">⚙️</div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">📞</div>
        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">📊</div>
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 mt-16">

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Plug In your logic.<br />
          Or build it here.
        </h1>

        <p className="mt-4 text-gray-400">
          Two paths. Same full-stack experience.
        </p>

      </div>

    </section>
  );
};

export default LogicSection;