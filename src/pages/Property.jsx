import { useState } from 'react';
import { ArrowLeft, ArrowRight, Building, MapPin, Square } from 'lucide-react';
import Footer from '../components/layout/Footer';
import Navbar from "../components/layout/Navbar";
import propertyImage1 from "../assets/property-img/2.jpg";
import propertyImage2 from "../assets/property-img/4.jpg";
import propertyImage3 from "../assets/property-img/5.jpg";

const images = [
  propertyImage1,
  propertyImage2,
  propertyImage3,
  propertyImage2,
  propertyImage3
];

const Property = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    window.location.href = "/";
  };

  if (showAllPhotos) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 text-white">
            <button 
              onClick={() => setShowAllPhotos(false)}
              className="flex items-center gap-2 rounded-full bg-black/50 p-2"
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </button>
            <span>{currentImage + 1}/{images.length}</span>
          </div>
          <div className="relative flex flex-1 items-center">
            <button 
              onClick={previousImage}
              className="absolute left-4 rounded-full bg-black/50 p-2 text-white"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <img 
              src={images[currentImage]} 
              alt={`Property view ${currentImage + 1}`}
              className="h-full w-full object-contain"
            />
            <button 
              onClick={nextImage}
              className="absolute right-4 rounded-full bg-black/50 p-2 text-white"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar isFixed={false} />
      <div className="h-24 lg:h-32 md:h-28 sm:h-20" />
      <main className="mx-auto max-w-6xl px-4 py-6">
        {/* Image Gallery */}
        <div className="relative mb-8">
          <div className="grid gap-4 sm:grid-cols-4">
            <div className="relative col-span-4 sm:col-span-2 sm:row-span-2">
              <img
                src={images[0]}
                alt="Main property view"
                className="aspect-[16/9] w-full rounded-lg object-cover sm:aspect-square"
              />
            </div>
            {images.slice(1, 5).map((src, idx) => (
              <div key={idx} className="relative hidden sm:block">
                <img
                  src={src}
                  alt={`Property view ${idx + 2}`}
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>
            ))}
            <button
              onClick={() => setShowAllPhotos(true)}
              className="absolute bottom-4 right-4 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-100"
            >
              Show all photos
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="border-b border-gray-200 pb-6">
              <h1 className="mb-4 text-2xl font-header sm:text-3xl lg:text-5xl">
                Exclusive 5-room residence with a rooftop terrace
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span>Barcelona, Spain</span>
              </div>
            </div>

            <div className="space-y-8 py-8">
              {/* Property Features */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Building className="h-6 w-6" />
                  <div>
                    <p className="font-medium">Entire flat</p>
                    <p className="text-sm text-gray-500">224 m²</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  <div>
                    <p className="font-medium">Great location</p>
                    <p className="text-sm text-gray-500">95% of recent guests rated the location 5 stars</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 font-primary">
                <p>
                  Real estate offers an exclusive FOR SALE elegant large 5-room apartment on Vincent Hložník Street in the
                  Condominium Renaissance residential complex.
                </p>
                <p>
                  Thanks to its unique location, the property has access to a large Japanese garden with an area of 35 m²,
                  which can be accessed directly from the bedroom. The front of the apartment is at the height of the third
                  floor, so the terrace is located just above the treetops.
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="mb-4 text-xl font-semibold">What this place offers</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-4 rounded-lg border p-4">
                    <Square className="h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-medium">223.92 m² living space</p>
                      <p className="text-sm text-gray-500">Spacious and comfortable</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 rounded-lg border p-4">
                    <Building className="h-6 w-6 shrink-0" />
                    <div>
                      <p className="font-medium">Premium finishes</p>
                      <p className="text-sm text-gray-500">High-end materials throughout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 rounded-xl bg-[#1B1B1B] p-6 shadow-lg grid gap-1">
              <div className="mb-6">
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="text-3xl font-bold">$807.00</span>
                  <span className="text-gray-500">per day</span>
                </div>
              </div>

              <div className="space-y-4 grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="mb-1 block text-sm">Check-in</label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 p-2"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm">Check-out</label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-gray-300 p-2"
                    />
                  </div>
                </div>

                <button className="w-full rounded-lg bg-rose-600 px-4 py-3 font-medium text-white hover:bg-rose-700">
                  Reserve
                </button>

                <p className="text-center text-sm text-gray-500">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Property;