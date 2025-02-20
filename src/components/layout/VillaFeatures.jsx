import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VillaFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#1B1B1B]">
      {/* Mobile version - First card */}
      <div className="lg:hidden flex flex-col">
        <div className="relative h-[300px]">
          <img
            src="src/assets/hero-image.jpg"
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="bg-[#1B1B1B] px-6 py-10">
          <div 
            className="relative"
            data-aos="fade-up"
          >
            <div className="absolute -bottom-16 -left-16 opacity-10">
              <img
                src="/placeholder.svg"
                alt="Decorative palm leaf"
                width={200}
                height={200}
                className="opacity-20"
              />
            </div>
            <h2 className="mb-6 font-serif text-3xl font-light text-white">
              Affordable luxury. Better than a 5-star hotel
            </h2>
            <p className="mb-4 text-zinc-400 text-sm">
              When traveling as a group, hotels are not only inconvenient but are also expensive.
            </p>
            <p className="text-zinc-400 text-sm">
              Renting a luxury villa instead of multiple hotel rooms allows you to stay together in a spacious
              multi-bedroom home, with unique luxurious amenities that aren't found even in the best of the hotels - all
              while paying less.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile version - Second card */}
      <div className="lg:hidden flex flex-col">
        <div className="relative h-[300px]">
          <img
            src="src/assets/hero-image.jpg"
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>
        
        <div className="bg-[#1C1C1C] px-6 py-10">
          <div 
            className="relative"
            data-aos="fade-up"
          >
            <div className="absolute -bottom-16 -left-16 opacity-10">
              <img
                src="/placeholder.svg"
                alt="Decorative palm leaf"
                width={200}
                height={200}
                className="opacity-20"
              />
            </div>
            <h2 className="mb-6 font-serif text-3xl font-light text-white">
              Affordable luxury. Better than a 5-star hotel
            </h2>
            <p className="mb-4 text-zinc-400 text-sm">
              When traveling as a group, hotels are not only inconvenient but are also expensive.
            </p>
            <p className="text-zinc-400 text-sm">
              Renting a luxury villa instead of multiple hotel rooms allows you to stay together in a spacious
              multi-bedroom home, with unique luxurious amenities that aren't found even in the best of the hotels - all
              while paying less.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop version - First card */}
      <div className="hidden lg:grid lg:grid-cols-2">
        <div className="relative h-[600px]">
          <img
            src="src/assets/hero-image.jpg"
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-[#1B1B1B]">
          <div 
            className="relative max-w-xl px-16 py-12"
            data-aos="fade-left"
          >
            <div className="absolute -bottom-16 -left-16 opacity-10">
              <img
                src="/placeholder.svg"
                alt="Decorative palm leaf"
                width={200}
                height={200}
                className="opacity-20"
              />
            </div>
            <h2 className="mb-6 font-serif text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              Affordable luxury. Better than a 5-star hotel
            </h2>
            <p className="mb-4 text-zinc-400">
              When traveling as a group, hotels are not only inconvenient but are also expensive.
            </p>
            <p className="text-zinc-400">
              Renting a luxury villa instead of multiple hotel rooms allows you to stay together in a spacious
              multi-bedroom home, with unique luxurious amenities that aren't found even in the best of the hotels - all
              while paying less.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop version - Second card (Flipped) */}
      <div className="hidden lg:grid lg:grid-cols-2">
        <div className="flex items-center bg-[#1B1B1B]">
          <div 
            className="relative max-w-xl px-16 py-12 ml-auto"
            data-aos="fade-right"
          >
            <div className="absolute -bottom-16 -left-16 opacity-10">
              <img
                src="/placeholder.svg"
                alt="Decorative palm leaf"
                width={200}
                height={200}
                className="opacity-20"
              />
            </div>
            <h2 className="mb-6 font-serif text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              Affordable luxury. Better than a 5-star hotel
            </h2>
            <p className="mb-4 text-zinc-400">
              When traveling as a group, hotels are not only inconvenient but are also expensive.
            </p>
            <p className="text-zinc-400">
              Renting a luxury villa instead of multiple hotel rooms allows you to stay together in a spacious
              multi-bedroom home, with unique luxurious amenities that aren't found even in the best of the hotels - all
              while paying less.
            </p>
          </div>
        </div>
        <div className="relative h-[600px]">
          <img
            src="src/assets/hero-image.jpg"
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}