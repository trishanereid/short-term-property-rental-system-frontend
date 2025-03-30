import propertyImage1 from "../../assets/property-img/2.jpg";
import propertyImage2 from "../../assets/property-img/4.jpg";
import propertyImage3 from "../../assets/property-img/5.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card";

const galleryItems = [
  {
    id: 1,
    src: propertyImage1,
    alt: "Luxury Villa Exterior",
    category: "Villas",
  },
  {
    id: 2,
    src: propertyImage2,
    alt: "Modern Living Room",
    category: "Interiors",
  },
  {
    id: 3,
    src: propertyImage3,
    alt: "Infinity Pool",
    category: "Amenities",
  },
  {
    id: 4,
    src: propertyImage1,
    alt: "Beachfront Property",
    category: "Villas",
  },
  {
    id: 5,
    src: propertyImage2,
    alt: "Luxury Bedroom",
    category: "Interiors",
  },
];

const GallerySection = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mb-20 lg:mb-20 grid gap-8 lg:grid-cols-2">
        <h2 className="text-4xl font-header tracking-tight text-white sm:text-5xl">
          We make it easy for{" "}
          <span className="text-amber-500">Effortless Booking</span> and{" "}
          <span className="text-amber-500">Exclusive Benefits.</span>
        </h2>
        <p className="text-lg leading-relaxed text-zinc-400">
          Whether you are planning your next getaway or seeking the perfect
          luxury retreat, we make the process seamless and hassle-free. The best
          part? You’ll enjoy exclusive perks and premium comfort with every
          stay.
        </p>
      </div>
      {/* Gallery Grid */}
      <Carousel className="w-full max-w-xs sm:max-w-full mx-auto">
        <CarouselContent className="-ml-0.5 sm:-ml-1">
          {galleryItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-0.5 sm:pl-1 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="sm:p-1">
                <Card className="overflow-hidden p-0">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-full aspect-square"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default GallerySection;
