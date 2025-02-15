import { Play, Home, FileText } from "lucide-react";

const PropertyFeatures = () => {
  return (
    <section className="bg-[#1B1B1B] px-4 py-16 md:px-6 lg:px-8 relative w-full bg-cover bg-center flex items-center justify-left text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            We make it easy for <span className="text-amber-500">tenants</span>{" "}
            and <span className="text-amber-500">landlords.</span>
          </h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            Whether it's selling your current home, getting financing, or buying
            a new home, we make it easy and efficient. The best part? you'll
            save a bunch of money and time with our services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {/* Virtual home tour card */}
          <div className="group relative rounded-2xl bg-zinc-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/20 transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-500">
              Virtual home tour
            </h3>
            <p className="text-zinc-400">
              You can communicate directly with landlords and we provide you
              with virtual tour before you buy or rent the property.
            </p>
          </div>

          {/* Find the best deal card */}
          <div className="group relative rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 transition-transform duration-300 group-hover:scale-110">
              <Home className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-amber-600">
              Find the best deal
            </h3>
            <p className="text-zinc-600">
              Browse thousands of properties, save your favorites and set up
              search alerts so you don't miss the best home deal!
            </p>
          </div>

          {/* View rental report card */}
          <div className="group relative rounded-2xl bg-zinc-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/20">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-amber-600/20 transition-transform duration-300 group-hover:scale-110">
              <FileText className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-500">
              View rental report
            </h3>
            <p className="text-zinc-400">
              You can communicate directly with tenants and we provide you with
              rental reports to help manage your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
