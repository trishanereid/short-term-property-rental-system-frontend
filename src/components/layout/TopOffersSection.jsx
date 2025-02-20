import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopOffersSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "src/assets/property-img/2.jpg",
      alt: "Modern bedroom with ambient lighting",
    },
    {
      src: "src/assets/property-img/2.jpg",
      alt: "Elegant dining room setup",
    },
    {
      src: "src/assets/property-img/2.jpg",
      alt: "Luxurious outdoor pool area",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-left text-white px-4 py-16 md:px-6 lg:px-8 ">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Top offers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <div className="relative mx-auto w-full max-w-5xl">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" 
                   style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {images.map((image, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-none md:w-1/2 lg:w-1/3 p-1"
                  >
                    <div className="overflow-hidden rounded-2xl">
                      <div className="relative aspect-[4/3]">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute -left-12 h-12 w-12 flex items-center justify-center rounded-full border-2 border-white/20 bg-zinc-900/80 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-zinc-900"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* <button
              onClick={nextSlide}
              className="absolute -right-12 h-12 w-12 flex items-center justify-center rounded-full border-2 border-white/20 bg-zinc-900/80 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-zinc-900"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopOffersSection;