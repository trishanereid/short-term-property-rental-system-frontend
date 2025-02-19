const HeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ 
        backgroundImage: "url('src/assets/hero-image.jpg')",
        backgroundAttachment: 'fixed',
     }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      
      {/* Content */}
      <div className="relative text-center md:text-center px-4 ">
        <h1 className="text-5xl md:text-7xl font-header">
          Modern living for
          <br />
          everyone
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          We provide a complete service for the sale, purchase, or rental of
          real estate. We have been operating in Spain for more than 15 years.
        </p>

        {/* Booking Form */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 bg-[#222222] bg-opacity-70 p-4 rounded-lg max-w-fit">
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

          <button className="bg-[#B7801C] text-white px-6 py-3 rounded-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
