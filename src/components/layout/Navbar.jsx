import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = ({ isFixed = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;
  const navigate = useNavigate();

  useEffect(() => {
    // Only add scroll listener if navbar is not fixed
    if (!isFixed) {
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
    }
  }, [isFixed]);

  return (
    <>
      <nav
        className={`fixed w-full px-4 pt-4 lg:pt-5 md:pt-5 sm:pt-3 z-50 
          ${!isFixed ? "transition-transform duration-300" : ""} 
          ${!isFixed && !showNavbar ? "-translate-y-full" : "translate-y-0"}
          bg-gradient-to-b from-black/50 to-transparent text-white`}
      >
        {/* Rest of your navbar code remains exactly the same */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <img
                src={logo}
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
              <button
                onClick={() => navigate("/contact")}
                className="hover:text-gray-300"
              >
                Contact Us
              </button>
            </div>

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

          <button onClick={() => navigate("/")} className="hover:text-gray-300">
            Home
          </button>
          <button
            onClick={() => navigate("/property")}
            className="hover:text-gray-300"
          >
            Property
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-gray-300"
          >
            Contact Us
          </button>

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