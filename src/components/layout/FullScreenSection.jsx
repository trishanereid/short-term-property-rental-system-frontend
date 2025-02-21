import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";
import AOS from "aos";
import cta from "../../assets/cta-image.jpg";
import logo from "../../assets/logo.png";

const FullScreenSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Main Content Container */}
      <div className="flex h-full flex-col">
        {/* CTA Section */}
        <section className="relative flex-1 min-h-[60vh]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={cta}
              alt="Night view of Starlite Hotel"
              className="h-full w-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1B]/10 to-[#1B1B1B]" />
          </div>

          {/* CTA Content */}
          <div className="relative flex h-full w-full items-center justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                data-aos="fade-up"
                className="mb-3 text-3xl font-header tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-6xl"
              >
                Your Luxury Escape Awaits
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-4 text-sm text-white/90 sm:mb-6 sm:text-lg md:text-xl"
              >
                Experience the best of Miami in our exclusive vacation rental.
                With premier locations and unmatched comfort, your perfect stay
                begins here.
              </p>
              <button
                onClick={() => navigate("/property")}
                data-aos="fade-up"
                data-aos-delay="200"
                className="rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-lg sm:px-8 sm:py-4 sm:text-base lg:px-6 lg:py-4"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-[#1B1B1B] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="mx-auto max-w-7xl">
            {/* Main Footer Content */}
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
              {/* Logo Section */}
              <div className="flex flex-col items-center space-y-4 lg:items-start">
                <img
                  src={logo}
                  alt="Zeniux Stays Logo"
                  className="h-12 w-auto sm:h-16 lg:h-20 object-contain transition-transform hover:scale-105"
                />
                <div className="flex flex-col items-center space-y-3 lg:items-start">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    <span className="text-xs sm:text-sm">
                      345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact & Social Section */}
              <div className="flex flex-col items-center gap-6 lg:items-end">
                {/* Contact Information */}
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6 lg:items-end">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Phone className="h-4 w-4 text-amber-500" />
                    <span className="text-xs sm:text-sm">(123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Mail className="h-4 w-4 text-amber-500" />
                    <span className="text-xs sm:text-sm">
                      hello@zenluxstays.com
                    </span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center gap-3 lg:items-end">
                  <span className="text-xs font-medium text-zinc-400">
                    Connect With Us
                  </span>
                  <div className="flex gap-4">
                    {[
                      { Icon: Facebook, label: "Facebook" },
                      { Icon: Twitter, label: "Twitter" },
                      { Icon: Instagram, label: "Instagram" },
                    ].map(({ Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        className="group relative"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-amber-500" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-zinc-800" />

            {/* Bottom Footer */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row lg:justify-between">
              <nav className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {["ABOUT US", "CONTACT US", "REFUND POLICY"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs text-zinc-400 transition-colors duration-300 hover:text-amber-500 sm:text-sm"
                  >
                    {item}
                  </a>
                ))}
              </nav>
              <p className="text-xs text-zinc-500 sm:text-sm">
                Copyright © {currentYear}. All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FullScreenSection;
