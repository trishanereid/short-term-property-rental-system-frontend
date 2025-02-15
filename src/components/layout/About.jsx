import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-center flex md:mt-0 lg:mb-0 justify-start text-white mx-0 px-0">
      <div className="w-full">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="container mx-auto w-full lg:w-1/2 lg:pl-30 lg:pr-30" data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4">
              Discover Sustainable Luxury Living with EcoHaven Realty.
            </h2>
            <p className="text-gray-400 mb-6 lg:pr-30">
              EcoHaven Realty is a real estate agency specialising in
              eco-friendly homes and sustainable living. We offer a range of
              eco-friendly properties, including energy-efficient homes, homes
              built with eco-friendly materials, and homes equipped with
              sustainable technologies such as solar panels.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition-colors">
              Our Company
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-9/20" data-aos="fade-left">
            <img
              src="src/assets/hero-image.jpg"
              alt="Sustainable luxury home with solar panels"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center mt-0">
          {/* Left Image */}
          <div className="w-full lg:w-9/20" data-aos="fade-right">
            <img
              src="src/assets/hero-image.jpg"
              alt="EcoHaven team"
              className="w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="container mx-auto w-full lg:w-1/2 lg:pl-30 lg:pr-50" data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-4">
              Building a Better Future with Eco-Friendly Homes.
            </h2>
            <p className="text-gray-400 mb-6 lg:pr-30">
              The agency's mission is to provide clients with a selection of
              properties that meet high environmental standards while also
              providing a comfortable and luxurious lifestyle.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
