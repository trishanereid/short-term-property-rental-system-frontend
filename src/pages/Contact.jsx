import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Footer from "../components/layout/Footer";
import hero from "../assets/hero-image.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800">
      {/* Hero Section */}
      <div
        className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <span className="mb-3 inline-block rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-500">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl font-header text-white sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Company Info */}
          <div className="space-y-10">
            <div className="max-w-lg">
              <h2 className="mb-6 text-4xl lg:text-5xl font-header text-white">
                Zen Luxury Stays
              </h2>
              <p className="text-md text-justify leading-relaxed text-zinc-300 font-primary">
                We are a vacation villas rental company offering group-oriented
                villas for visitors seeking a memorable and comfortable vacation
                in our sunny city. Our Airbnb's top-rated luxury villas offer
                unique amenities designed for entertainment and relaxation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group flex items-start gap-6 transition-all">
                <div className="rounded-xl bg-amber-500/10 p-3 transition-all group-hover:bg-amber-500/20">
                  <Phone className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                    Reservation
                  </div>
                  <a
                    href="tel:(700)500-5000"
                    className="mt-1 block text-lg text-white transition-colors hover:text-amber-500"
                  >
                    (700) 500-5000
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all">
                <div className="rounded-xl bg-amber-500/10 p-3 transition-all group-hover:bg-amber-500/20">
                  <Mail className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                    Email Info
                  </div>
                  <a
                    href="mailto:info@zenluxstays.com"
                    className="mt-1 block text-lg text-white transition-colors hover:text-amber-500"
                  >
                    info@zenluxstays.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all">
                <div className="rounded-xl bg-amber-500/10 p-3 transition-all group-hover:bg-amber-500/20">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-medium uppercase tracking-wider text-zinc-400">
                    Address
                  </div>
                  <div className="mt-1 text-lg text-white">Washinton, DC</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm lg:p-10">
            <h2 className="mb-8 text-3xl font-light text-white font-primary">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
