const HeroFour = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">

      {/* New Gradient Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT SIDE */}
        <div className="flex-1 z-10">

          

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold leading-tight">
           Your agent is only helpful if people come back to talk to it.

          </h1>
          <h2>Production-ready chat UI</h2>

          <p className="mt-6 text-gray-400 max-w-xl">
          
          </p>
Native push, email, and SMS support
Retry logic, delivery throttling, and batching
Trigger-based delivery rules - unread X mins, fallback triggered, user went silent
Tackle their toughest business challenges by thinking creatively about how to leverage the unique power of chat and the data it produces 
Threaded email replies (yes, replies go back to chat!)
Integrates with SendGrid, Twilio, or your custom providers
User-level frequency + preference settings
          <div className="mt-8 flex gap-4">
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 relative flex justify-center items-center">

          {/* Glow */}
          <div className="absolute w-[320px] h-[500px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 blur-3xl opacity-30 rounded-xl"></div>

          {/* Image */}
          <img
            src="/demo4.png"
            alt=""
            className="relative w-[500px] md:w-[550px] rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroFour;