import FullScreenSection from "../components/layout/FullScreenSection";
import GallerySection from "../components/layout/GallerySection";
import HeroSection from "../components/layout/HeroSection";
import PropertyFeatures from "../components/layout/PropertyFeatures";
import PropertyShowcase from "../components/layout/PropertyShowcase";
import VillaFeatures from "../components/layout/VillaFeatures";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PropertyShowcase />
      <VillaFeatures />
      <PropertyFeatures />
      <GallerySection />
      <FullScreenSection />
    </div>
  );
};

export default Home;
