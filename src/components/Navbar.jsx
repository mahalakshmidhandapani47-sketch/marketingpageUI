const Navbar = () => {
  return (
    <nav className="absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <h1 className="text-lg font-semibold">cometchat</h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li>Platform</li>
          <li>Solutions</li>
          <li>Developers</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>

        <div className="flex gap-4 items-center">
          <button className="text-sm text-gray-300">Log in</button>

          <button className="bg-purple-600 px-4 py-2 rounded-lg text-sm">
            Schedule a demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;