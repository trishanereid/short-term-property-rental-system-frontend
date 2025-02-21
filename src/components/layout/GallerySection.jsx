import { useState } from "react";

import img1 from "../../assets/property-img/2.jpg";
import hero from "../../assets/hero-image.jpg";


const cn = (...classes) => classes.filter(Boolean).join(" ");

const galleryItems = [
  {
    id: 1,
    src: img1,
    alt: "Luxury Villa Exterior",
    category: "Villas",
  },
  {
    id: 2,
    src: hero,
    alt: "Modern Living Room",
    category: "Interiors",
  },
  {
    id: 3,
    src: hero,
    alt: "Infinity Pool",
    category: "Amenities",
  },
  {
    id: 4,
    src: hero,
    alt: "Beachfront Property",
    category: "Villas",
  },
  {
    id: 5,
    src: hero,
    alt: "Luxury Bedroom",
    category: "Interiors",
  },
  {
    id: 6,
    src: hero,
    alt: "Yacht Charter",
    category: "Gourmet Kitchen",
  },
  {
    id: 7,
    src: hero,
    alt: "Yacht Charter",
    category: "Interiors",
  },
  {
    id: 8,
    src: hero,
    alt: "Yacht Charter",
    category: "Gourmet Kitchen",
  },
];

const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-15 lg:mb-16 text-center text-3xl md:text-4xl lg:text-5xl font-header text-zinc-800 dark:text-white sm:text-4xl">
          Our Luxury Collection
        </h2>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                selectedCategory === category
                  ? "bg-amber-500 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:bg-black/75">
                <div className="flex h-full items-center justify-center">
                  <p className="text-center text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Modal/Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div 
              className={cn(
                "relative mx-4",
                isFullscreen ? "h-screen w-screen" : "max-h-[90vh] max-w-4xl"
              )}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 z-50 rounded-full bg-white p-2 text-black hover:bg-gray-200"
              >
                ✕
              </button>
              <button
                onClick={toggleFullscreen}
                className="absolute -right-4 top-8 z-50 rounded-full bg-white p-2 text-black hover:bg-gray-200"
              >
                {isFullscreen ? "↙" : "↗"}
              </button>
              <img
                src={selectedImage}
                alt="Selected"
                className={cn(
                  "h-full w-full object-contain",
                  isFullscreen ? "" : "rounded-lg"
                )}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;