import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import playIcon from "../../assets/play-icon.png";
import property from "../../assets/property.png";
import homeIcon from "../../assets/home-icon.png";

const PropertyShowcase = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen mt-10 bg-cover bg-center flex items-center justify-left text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Mobile version */}
        <div className="lg:hidden flex flex-col items-center text-center">
          <div className="relative w-full max-w-sm">
            <div
              data-aos="fade-up"
              className="relative overflow-hidden rounded-3xl"
            >
              <img
                src={property}
                alt="Modern two-story house with garage"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Virtual tour card */}
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="absolute left-4 top-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <img src={playIcon} alt="play icon" className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-zinc-900 text-sm">
                    Exclusive Property Tour
                  </h3>
                  <p className="text-xs text-zinc-600">
                    Explore your luxury retreat before booking.
                  </p>
                </div>
              </div>
            </div>

            {/* Find deal card */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="absolute right-4 bottom-16 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <img src={homeIcon} alt="home icon" className="w-8 h-8" />
                <div>
                  <h3 className="font-semibold text-zinc-900 text-sm">
                    Luxury Stay, Best Rates
                  </h3>
                  <p className="text-xs text-zinc-600">
                    Book luxury stay at unbeatable prices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full max-w-sm">
            <div className="mb-6 inline-flex rounded-xl bg-[#2D2D2D] p-1 border-1 border-[#888F9F] w-full">
              <button className="flex-1 rounded-lg bg-white px-6 py-3 text-sm font-medium text-amber-700">
                For Guests
              </button>
              <button className="flex-1 px-6 py-3 text-sm font-medium text-zinc-400">
                For Hosts
              </button>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white font-header">
              A Seamless Luxury Experience
            </h2>

            <p className="mb-6 text-base leading-relaxed text-zinc-400">
              Indulge in a world of comfort and sophistication. Whether you're
              planning a relaxing vacation or a vibrant city escape, our Miami
              luxury rental offers a refined stay with premium amenities
              tailored to your needs.
            </p>

            <button
              onClick={() => navigate("/property")}
              className="w-full rounded-xl bg-amber-600 hover:bg-amber-500 px-6 py-3 text-white flex items-center justify-center gap-2 transition-colors"
            >
              SEE MORE
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="ml-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden lg:grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div
              data-aos="fade-right"
              className="relative h-[500px] overflow-hidden rounded-2xl"
            >
              <img
                src={property}
                alt="Modern two-story house with garage"
                className="h-full w-full object-cover"
              />
            </div>

            <div
              data-aos="fade-down"
              data-aos-delay="400"
              className="absolute left-4 top-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm md:left-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src={playIcon}
                  alt="play icon"
                  className="flex items-center justify-center"
                />
                <div>
                  <h3 className="font-semibold text-zinc-900">
                    Exclusive Property Tour
                  </h3>
                  <p className="text-sm text-zinc-600">
                    Explore your luxury retreat before booking.
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="absolute -bottom-6 right-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm md:right-6"
            >
              <div className="flex items-center gap-3">
                <img
                  src={homeIcon}
                  alt="play icon"
                  className="flex items-center justify-center"
                />
                <div>
                  <h3 className="font-semibold text-zinc-900">
                    Luxury Stay, Best Rates
                  </h3>
                  <p className="text-sm text-zinc-600">
                    Book luxury stay at unbeatable prices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pl-8">
            <div className="mb-8 inline-flex rounded-lg bg-[#2D2D2D] p-2 border-1 border-[#888F9F] w-fit">
              <button className="rounded-md bg-white px-6 py-4 text-sm font-medium text-amber-700">
                For Guests
              </button>
              <button className="px-6 py-4 text-sm font-medium text-zinc-400">
                For Hosts
              </button>
            </div>

            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white font-header sm:text-5xl">
              A Seamless Luxury Experience
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-zinc-400">
              Indulge in a world of comfort and sophistication. Whether you're
              planning a relaxing vacation or a vibrant city escape, our Miami
              luxury rental offers a refined stay with premium amenities
              tailored to your needs.
            </p>

            <button
              onClick={() => navigate("/property")}
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-amber-600 hover:bg-amber-500 px-6 py-3 text-white transition-colors "
            >
              SEE MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
