import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full px-4 pt-4 lg:pt-5 md:pt-5 sm:pt-3 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } bg-gradient-to-b from-black/50 to-transparent text-white`}
      >
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <img
                src="src/assets/logo.png"
                alt="Logo"
                className="h-20 lg:h-28 md:h-24 sm:h-16"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => navigate("/")}
                className="hover:text-gray-300"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/property")}
                className="hover:text-gray-300"
              >
                Property
              </button>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact Us
              </a>
            </div>

            {/* Login Button */}
            <div className="hidden md:flex space-x-4">
              <button
                className="border border-white px-4 py-2 rounded-lg"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Full-Screen Overlay) */}
      <div
        className={`fixed inset-0 bg-black/80 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="sm:w-2/3 md:w-1/2 h-full bg-black p-6 flex flex-col space-y-6 text-white">
          {/* Close Button */}
          <button onClick={() => setIsOpen(false)} className="self-end">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          {/* Menu Items */}
          <button onClick={() => navigate("/")} className="hover:text-gray-300">
            Home
          </button>
          <button
            onClick={() => navigate("/property")}
            className="hover:text-gray-300"
          >
            Property
          </button>
          <a href="#" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact Us
          </a>

          {/* Buttons */}
          <button
            className="border border-white px-4 py-2 rounded-lg"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button className="bg-yellow-500 px-4 py-2 rounded-lg text-black">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
