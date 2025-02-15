import About from "../components/layout/About";
import HeroSection from "../components/layout/HeroSection";
import PropertyFeatures from "../components/layout/PropertyFeatures";
import PropertyShowcase from "../components/layout/PropertyShowcase";
import TopOffersSection from "../components/layout/TopOffersSection";
import VillaFeatures from "../components/layout/VillaFeatures";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PropertyShowcase />
      <VillaFeatures />
      <TopOffersSection />
      <PropertyFeatures />
      <About />
    </div>
  );
};

export default Home;
