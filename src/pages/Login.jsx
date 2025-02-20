import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { email, password, rememberMe });
    }
  };

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center mt-4 mb-4 mx-3 rounded-lg"
        style={{
          backgroundImage: "url('src/assets/hero-image.jpg')",
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
                src="src/assets/logo.png"
                alt="Logo"
                className="h-28 lg:h-36 md:h-24 sm:h-16"
              />
            </div>
            <h2 className="text-3xl font-bold text-white">Sign in</h2>
            <p className="mt-2 text-gray-400">Sign in to book your property</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-[#888F9F] rounded bg-[#2D2D2D]"
              />
              <label className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-amber-500 transition-colors duration-200"
              >
                Sign in
              </button>
            </div>

            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-amber-500 hover:text-amber-400"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
