import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import house from "../../assets/house.jpg";
import poolArea from "../../assets/pool-area.jpg";

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
            src={house}
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="bg-[#1B1B1B] px-6 py-10">
          <div className="relative" data-aos="fade-up">
            <h2 className="mb-6 font-serif text-3xl font-light text-white">
              Unmatched Luxury, Beyond a 5-Star Stay
            </h2>
            <p className="text-zinc-400 text-sm">
              Step into an elegant retreat where opulence meets comfort. From
              designer interiors to a private poolside oasis, our Miami vacation
              home offers an elevated experience that exceeds even the most
              prestigious hotels.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile version - Second card */}
      <div className="lg:hidden flex flex-col">
        <div className="relative h-[300px]">
          <img
            src={poolArea}
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="bg-[#1C1C1C] px-6 py-10">
          <div className="relative" data-aos="fade-up">
            <h2 className="mb-6 font-serif text-3xl font-light text-white">
              A Sanctuary of Sophistication & Comfort
            </h2>
            <p className="text-zinc-400 text-sm">
              Escape to a world of refined elegance where every detail is
              designed for indulgence. From breathtaking waterfront views to
              meticulously curated interiors, our Miami vacation home delivers a
              lavish retreat that redefines luxury living.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop version - First card */}
      <div className="hidden lg:grid lg:grid-cols-2">
        <div className="relative h-[600px]">
          <img
            src={house}
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center bg-[#1B1B1B]">
          <div className="relative max-w-xl px-16 py-12" data-aos="fade-left">
            <h2 className="mb-6 font-serif text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              Unmatched Luxury, Beyond a 5-Star Stay
            </h2>
            <p className="text-zinc-400">
              Step into an elegant retreat where opulence meets comfort. From
              designer interiors to a private poolside oasis, our Miami vacation
              home offers an elevated experience that exceeds even the most
              prestigious hotels.
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
            <h2 className="mb-6 font-serif text-3xl font-light text-white sm:text-4xl lg:text-5xl">
              A Sanctuary of Sophistication & Comfort
            </h2>
            <p className="text-zinc-400">
              Escape to a world of refined elegance where every detail is
              designed for indulgence. From breathtaking waterfront views to
              meticulously curated interiors, our Miami vacation home delivers a
              lavish retreat that redefines luxury living.
            </p>
          </div>
        </div>
        <div className="relative h-[600px]">
          <img
            src={poolArea}
            alt="Luxury villa with pool and chess board at night"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
