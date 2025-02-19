import { useEffect } from "react";
import AOS from "aos";

const CTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <section className="relative min-h-[400px] w-full overflow-hidden flex items-center justify-center sm:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="src/assets/cta-image.jpg"
          alt="Night view of Starlite Hotel"
          className="h-full w-full object-cover"
        />
        {/* New Gradient Overlay - Black with opacity gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[1B1B1B]/10 to-[#1B1B1B]" />
      </div>

      {/* Content */}
      <div className="relative flex h-full w-full items-center justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            data-aos="fade-up"
            className="mb-4 text-2xl font-bold tracking-tight text-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Ready to find your eco-friendly home?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-6 text-base text-white/90 sm:mb-8 sm:text-lg md:text-xl"
          >
            We have homes in 20+ cities across the country to choose from!
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="200"
            className="rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base lg:px-6 lg:py-4"
          >
            Browse homes
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;