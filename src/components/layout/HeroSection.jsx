import { useState } from 'react';
import hero from "../../assets/hero-image.jpg";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ 
        backgroundImage: `url(${hero})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative text-center md:text-center px-4">
        <h1 className="text-5xl md:text-7xl font-header">
          Modern living for
          <br />
          everyone
        </h1>
        <p className="mt-4 text-xs md:text-xl max-w-2xl">
          We provide a complete service for the sale, purchase, or rental of
          real estate. We have been operating in Spain for more than 15 years.
        </p>

        {/* Desktop Booking Form */}
        <div className="mt-8 hidden md:flex flex-row items-center justify-start space-x-4 bg-[#222222] bg-opacity-70 p-4 rounded-lg max-w-fit">
          <div className="flex items-center bg-[#2D2D2D] border border-[#888F9F] px-4 py-3 rounded-lg w-72 relative">
            <input
              type="date"
              className="bg-transparent text-white w-full outline-none appearance-none [&::-webkit-calendar-picker-indicator]:invert"
              placeholder="Arrive"
            />
          </div>

          <div className="flex items-center bg-[#2D2D2D] border border-[#888F9F] px-4 py-3 rounded-lg w-72 relative">
            <input
              type="date"
              className="bg-transparent text-white w-full outline-none appearance-none [&::-webkit-calendar-picker-indicator]:invert"
              placeholder="Depart"
            />
          </div>

          <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg">
            BOOK NOW
          </button>
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
                  <input
                    type="date"
                    className="w-full bg-[#2D2D2D] border border-[#888F9F] p-3 rounded-lg text-white outline-none appearance-none [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Depart</label>
                  <input
                    type="date"
                    className="w-full bg-[#2D2D2D] border border-[#888F9F] p-3 rounded-lg text-white outline-none appearance-none [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>

              {/* Check Now Button */}
              <div className="mt-auto p-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white py-3 rounded-lg font-medium"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;