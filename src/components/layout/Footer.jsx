
import { MapPin, Phone, Printer, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B1B1B] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Logo Section */}
          <div className="flex flex-col items-center space-y-6 lg:items-start">
            <img
              src="src/assets/logo.png"
              alt="Zeniux Stays Logo"
              className="h-16 w-auto sm:h-20 lg:h-24 object-contain transition-transform hover:scale-105"
            />
            <div className="flex flex-col items-center space-y-4 lg:items-start">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span className="text-sm sm:text-base">
                  345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="flex flex-col items-center gap-8 lg:items-end">
            {/* Contact Information */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8 lg:items-end">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-sm sm:text-base">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Printer className="h-5 w-5 text-amber-500" />
                <span className="text-sm sm:text-base">(123) 456-7890</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center gap-4 lg:items-end">
              <span className="text-sm font-medium text-zinc-400">Connect With Us</span>
              <div className="flex gap-6">
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
                    <Icon className="h-6 w-6 text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-amber-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-zinc-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:justify-between">
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['ABOUT US', 'CONTACT US', 'HELP', 'REFUND POLICY', 'DISCLAIMER'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-zinc-400 transition-colors duration-300 hover:text-amber-500"
              >
                {item}
              </a>
            ))}
          </nav>
          <p className="text-sm text-zinc-500">
            Copyright © {currentYear}. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;