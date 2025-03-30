import { useState } from "react";

import hero from "../../assets/hero-image.jpg";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrivalDate, setArrivalDate] = useState(undefined);
  const [departureDate, setDepartureDate] = useState(undefined);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center md:text-center lg:text-center px-4">
        <h1 className="text-5xl md:text-7xl font-header">
          Luxury Living in
          <br />
          Miami
        </h1>
        <p className="mt-4 text-xs md:text-xl max-w-2xl mx-auto">
          Experience unparalleled sophistication in the heart of Miami. Our
          vacation retreat blends elegance, and top-tier amenities for the
          perfect getaway.
        </p>

        {/* Desktop Booking Form */}
        <div className="mt-8 hidden md:flex flex-row items-center justify-start space-x-4 bg-[#222222] bg-opacity-70 p-4 rounded-lg max-w-fit">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center bg-[#2D2D2D] border border-[#888F9F] px-4 py-3 rounded-lg w-72 relative cursor-pointer">
                <Button
                  variant="ghost"
                  className="bg-transparent text-white w-full h-full flex justify-between items-center p-0"
                >
                  <span className="mr-2 font-normal">
                    {arrivalDate ? format(arrivalDate, "PPP") : "Arrive Date"}
                  </span>
                  <CalendarIcon className="h-4 w-4 opacity-70" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={arrivalDate}
                onSelect={setArrivalDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center bg-[#2D2D2D] border border-[#888F9F] px-4 py-3 rounded-lg w-72 relative cursor-pointer">
                <Button
                  variant="ghost"
                  className="bg-transparent text-white w-full h-full flex justify-between items-center p-0"
                >
                  <span className="mr-2 font-normal">
                    {departureDate
                      ? format(departureDate, "PPP")
                      : "Depart Date"}
                  </span>
                  <CalendarIcon className="h-4 w-4 opacity-70" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={departureDate}
                onSelect={setDepartureDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Button
            className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg w-full md:w-auto whitespace-nowrap font-medium"
            style={{ minHeight: "46px" }}
          >
            BOOK NOW
          </Button>
        </div>

        {/* Mobile Check Availability Button */}
        <div className="md:hidden mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-lg w-full max-w-xs"
          >
            Check Availability
          </button>
        </div>

        {/* Mobile Full Screen Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-[#1C1C1C] z-50 md:hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h2 className="text-xl font-semibold">Search</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Form Content */}
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Arrive</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="w-full bg-[#2D2D2D] border border-[#888F9F] p-3 rounded-lg relative cursor-pointer">
                        <Button
                          variant="ghost"
                          className="bg-transparent text-white w-full h-full flex justify-between items-center p-0"
                        >
                          <span className="mr-2 font-normal">
                            {arrivalDate
                              ? format(arrivalDate, "PPP")
                              : "Select date"}
                          </span>
                          <CalendarIcon className="h-4 w-4 opacity-70" />
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={arrivalDate}
                        onSelect={setArrivalDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Depart</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <div className="w-full bg-[#2D2D2D] border border-[#888F9F] p-3 rounded-lg relative cursor-pointer">
                        <Button
                          variant="ghost"
                          className="bg-transparent text-white w-full h-full flex justify-between items-center p-0"
                        >
                          <span className="mr-2 font-normal">
                            {departureDate
                              ? format(departureDate, "PPP")
                              : "Select date"}
                          </span>
                          <CalendarIcon className="h-4 w-4 opacity-70" />
                        </Button>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={departureDate}
                        onSelect={setDepartureDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Check Now Button */}
              <div className="mt-auto p-4">
                <Button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg font-medium"
                >
                  BOOK NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
