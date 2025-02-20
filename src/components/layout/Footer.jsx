import { MapPin, Phone, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
                    <span className="text-xs sm:text-sm">hello@zenluxstays.com</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center gap-3 lg:items-end">
                  <span className="text-xs font-medium text-zinc-400">Connect With Us</span>
                  <div className="flex gap-4">
                    {[
                      { Icon: Facebook, label: 'Facebook' },
                      { Icon: Twitter, label: 'Twitter' },
                      { Icon: Instagram, label: 'Instagram' },
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
                {['ABOUT US', 'CONTACT US', 'REFUND POLICY'].map((item) => (
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
  );
};

export default Footer;