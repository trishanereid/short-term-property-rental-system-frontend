import { useEffect } from "react"
import AOS from "aos"

export default function VillaFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="bg-zinc-900">
      {/* First Feature */}
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-[600px]">
          <img
            src="src/assets/hero-image.jpg"
            alt="Luxury villa with pool and chess board at night"
            className="object-cover"
          />
        </div>
        <div className="flex items-center bg-[#1C1C1C] p-8 lg:p-16">
          <div className="relative max-w-xl" data-aos="fade-left">
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
    </section>
  )
}