import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, X } from "lucide-react";
import PhoneInput from 'react-phone-number-input';
import logo from "../assets/logo.png";
import coverImage from "../assets/cta-image.jpg";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleClose = () => {
    window.location.href = "/";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center mt-4 mb-4 mx-3 rounded-lg"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 mt-2 mr-2 p-2 rounded-full hover:bg-gray-700 transition"
        >
          <X className="h-6 w-6 text-gray-400 hover:text-white" />
        </button>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-28 lg:h-36 md:h-24 sm:h-16"
              />
            </div>
            <h2 className="text-3xl font-bold text-white">Sign up</h2>
            <p className="mt-2 text-gray-400">Create your account to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.name ? "border-red-500" : "border-[#888F9F]"
                  } bg-[#2D2D2D] rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-[#888F9F]"
                  } bg-[#2D2D2D] rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <div className="mt-1">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  value={formData.phoneNumber}
                  onChange={(value) => setFormData(prev => ({ ...prev, phoneNumber: value }))}
                  className={`appearance-none block w-full ${
                    errors.phoneNumber ? "border-red-500" : "border-[#888F9F]"
                  }`}
                  style={{
                    '--PhoneInput-color--focus': '#F59E0B',
                    '--PhoneInputInternationalIconPhone-opacity': '0.8',
                    '--PhoneInputCountrySelect-marginRight': '0.5rem',
                    '--PhoneInputCountrySelectArrow-color': '#9CA3AF',
                    '--PhoneInputCountrySelectArrow-opacity': '0.6'
                  }}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-[#888F9F]"
                  } bg-[#2D2D2D] rounded-lg shadow-sm placeholder-gray-500 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-colors duration-200"
              >
                Sign up
              </button>
            </div>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="font-medium text-amber-500 hover:text-amber-400"
              >
                SIGN IN
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;