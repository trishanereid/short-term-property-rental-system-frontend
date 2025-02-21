import { Play, Home, FileText } from "lucide-react";

const PropertyFeatures = () => {
  return (
    <section className="bg-[#1B1B1B] px-4 py-16 md:px-6 lg:px-8 relative w-full bg-cover bg-center flex items-center justify-left text-white">
      <div className="mx-auto max-w-7xl lg:mt-30">
        <div className="mb-20 lg:mb-20 grid gap-8 lg:grid-cols-2">
          <h2 className="text-4xl font-header tracking-tight text-white sm:text-5xl">
            We make it easy for{" "}
            <span className="text-amber-500">Effortless Booking</span> and{" "}
            <span className="text-amber-500">Exclusive Benefits.</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            Whether you're planning your next getaway or seeking the perfect
            luxury retreat, we make the process seamless and hassle-free. The
            best part? You’ll enjoy exclusive perks and premium comfort with
            every stay.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {/* Find the best deal card */}
          <div className="group relative rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 transition-transform duration-300 group-hover:scale-110">
              <Home className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-amber-600">
              Find the Best Deal
            </h3>
            <p className="text-zinc-600">
              Browse our handpicked luxury properties, save your favorites, and
              secure the best rates for an unforgettable stay.
            </p>
          </div>

          {/* Virtual home tour card */}
          <div className="group relative rounded-2xl bg-zinc-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/20 transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-500">
              Exclusive Offers
            </h3>
            <p className="text-zinc-400">
              Unlock special discounts and limited-time deals on our premium
              vacation rentals.
            </p>
          </div>

          {/* Find the best deal card */}
          <div className="group relative rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 transition-transform duration-300 group-hover:scale-110">
              <Home className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-amber-600">
              Premium Comfort
            </h3>
            <p className="text-zinc-600">
              Enjoy elegantly designed interiors, high-end furnishings, and
              world-class amenities tailored for ultimate relaxation.
            </p>
          </div>

          <div className="group relative rounded-2xl bg-zinc-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/20 transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-500">
              Private Chef Experience
            </h3>
            <p className="text-zinc-400">
              Savor gourmet dining with a private chef, bringing fine dining
              directly to your vacation home.
            </p>
          </div>

          {/* Find the best deal card */}
          <div className="group relative rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 transition-transform duration-300 group-hover:scale-110">
              <Home className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-amber-600">
              Luxury Car Rental
            </h3>
            <p className="text-zinc-600">
              Upgrade your stay with access to high-end vehicle rentals for
              effortless exploration.
            </p>
          </div>

          {/* View rental report card */}
          <div className="group relative rounded-2xl bg-zinc-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/20 transition-transform duration-300 group-hover:scale-110">
              <FileText className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-500">
              Concierge Service
            </h3>
            <p className="text-zinc-400">
              From personalized recommendations to VIP reservations, our
              dedicated concierge team ensures a flawless and memorable stay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
