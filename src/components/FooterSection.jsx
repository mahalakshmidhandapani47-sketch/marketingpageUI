const FooterSection = () => {
  return (
    <footer className="bg-[#05081A] text-gray-400 px-10 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>Chat & Messaging</li>
            <li>Voice & Video Calls</li>
            <li>Notifications</li>
            <li>Analytics & Insights</li>
            <li>Multi-Tenant Chat</li>
            <li>Messaging Moderation</li>
            <li>File Sharing</li>
            <li>Typing Indicators</li>
            <li>End-to-End Encryption</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>Online Marketplaces</li>
            <li>SaaS Businesses</li>
            <li>Healthcare & Telehealth</li>
            <li>Community & Social</li>
            <li>Dating</li>
            <li>E-learning Platforms</li>
            <li>Fintech Applications</li>
            <li>Gaming Communities</li>
            <li>Customer Support Systems</li>
            <li>Live Streaming Apps</li>
            <li>Enterprise Collaboration</li>

          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Developers</h3>
          <ul className="space-y-2 text-sm">
            <li>APIs</li>
            <li>SDKs</li>
            <li>Sample Apps</li>
            <li>Product Updates</li>
            <li>System Status</li>
            <li>E-learning Platforms</li>
            <li>Fintech Applications</li>
            <li>Gaming Communities</li>
            <li>Customer Support Systems</li>
            <li>Live Streaming Apps</li>
            <li>Enterprise Collaboration</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>Blog</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Office Hours</li>
            <li>Report Issue</li>
            <li>Case Studies</li>
            <li>Whitepapers</li>
            <li>Guides & Tutorials</li>
            <li>Webinars</li>
            <li>FAQ</li>
            <li>Release Notes</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="text-white font-semibold mb-4">UI Kits</h3>
          <ul className="space-y-2 text-sm">
            <li>React Chat UI Kit</li>
            <li>Angular Chat UI Kit</li>
            <li>Vue Chat UI Kit</li>
            <li>iOS Chat UI Kit</li>
            <li>Android Chat UI Kit</li>
            <li>Next.js Chat UI Kit</li>
            <li>Nuxt Chat UI Kit</li>
            <li>Svelte Chat UI Kit</li>
            <li>Flutter Flow UI Kit</li>
            <li>Electron Chat UI Kit</li>
            <li>Progressive Web App UI Kit</li>

          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>Pricing</li>
            <li>Implementation Services</li>
            <li>Chat with us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Affiliate Program</li>
            <li>Press & Media</li>
            <li>Contact Us</li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>2025 © CometChat</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <span className="cursor-pointer">Facebook</span>
          <span className="cursor-pointer">LinkedIn</span>
          <span className="cursor-pointer">Instagram</span>
          <span className="cursor-pointer">Twitter</span>
          <span className="cursor-pointer">GitHub</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;