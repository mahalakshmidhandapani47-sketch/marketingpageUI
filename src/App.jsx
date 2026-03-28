import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import HeroThree from "./components/HeroThree";
import HeroFour from "./components/HeroFour";
import HeroFive from "./components/HeroFive";
import HeroSix from "./components/HeroSix";
import LogicSection from "./components/LogicSection";
import DualFeatureSection from "./components/DualFeatureSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="bg-[#050816] text-white">

      <Navbar />
      <Hero />
      <HeroTwo />
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix />
      <LogicSection />
      <DualFeatureSection />
      {/* NEW SECTION 🔥 */}
      <FeaturesSection />
      <FooterSection />
    </div>
  );
}

export default App;