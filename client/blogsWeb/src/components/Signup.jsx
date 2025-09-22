import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slices/authSlices";
import axios from "axios";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("+91");
  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const countries = [
    { code: "+91", flag: "🇮🇳", name: "India" },
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+86", flag: "🇨🇳", name: "China" },
    { code: "+81", flag: "🇯🇵", name: "Japan" },
    { code: "+49", flag: "🇩🇪", name: "Germany" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+55", flag: "🇧🇷", name: "Brazil" },
    { code: "+7", flag: "🇷🇺", name: "Russia" },
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const navigate = useNavigate();

  const isNameValid = (name) => {
    if (name.length === 0) return false;
    return isNaN(name.charAt(0));
  };

  const isValidPassword = (pass) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(pass);
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contactNumber: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );
      console.log(response, "response");
      dispatch(loginSuccess(formData));

      navigate("/login");
      setFormData({
        username: "",
        email: "",
        password: "",
        contactNumber: "",
      });
    } catch (error) {
      console.log(error, "error");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="lg:hidden grid grid-cols-1 ">
          <h2 className="text-center mt-12 font-light text-2xl ">
            Create an account
          </h2>
          <h5 className="text-[10px] ml-22 mt-2 font-light">
            Already have an account?{" "}
            <span
              className="text-blue-400 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </h5>
          <label htmlFor="" className="text-[12px] ml-22 mt-6 font-light">
            User name
          </label>
          <input
            type="text"
            name="username"
            id="username-mobile"
            value={formData.username}
            onChange={(e) => handleChange("username", e.target.value)}
            className="w-2/4 ml-22 text-[12px] px-3 py-2 rounded-md"
          />
          {formData.username && !isNameValid(formData.username) && (
            <p className="text-red-500 text-xs mt-1 ml-22">
              please enter a valid name.
            </p>
          )}
          <label htmlFor="" className="text-[12px] ml-22 mt-6 font-light">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email-mobile"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-2/4 ml-22 text-[12px] px-3 py-2 rounded-md"
          />
          {formData.email && !isValidEmail(formData.email) && (
            <p className="text-red-500 text-xs mt-1 ml-22">
              please enter a valid email
            </p>
          )}
          <label htmlFor="" className="text-[12px] ml-22 mt-6 font-light">
            Password
          </label>
          <div className="relative w-2/4 ml-22">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password-mobile"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full text-[12px] px-3 py-2 pr-10 rounded-md"
            />

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? (
                // Eye slash icon (hidden)
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  />
                </svg>
              ) : (
                // Eye icon (visible)
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
            {formData.password && !isValidPassword(formData.password) && (
              <p className="text-red-500 text-xs mt-1 ml-22">
                please enter a valid password with one uppercase , a lowercase
                and a digit ...
              </p>
            )}
          </div>
          <span className="text-[8px] font-light ml-22 w-2/4 block">
            use 8 or more character with a mix of symbols , uppercase &
            lowercase
          </span>
          <label htmlFor="" className="text-[12px] ml-22 mt-6 font-light">
            Contact number
          </label>
          <div className="flex w-2/4 ml-22">
            <select
              value={selectedCountry}
              onChange={handleCountryChange}
              className="text-[12px] px-3 py-2 rounded-l-md border-r-0 focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.flag} {country.code}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber-mobile"
              value={formData.contactNumber}
              onChange={(e) => handleChange("contactNumber", e.target.value)}
              placeholder="Enter phone number"
              className="flex-1 text-[12px] px-3 py-2 rounded-r-md border-l-0 focus:border-l focus:border-gray-400"
            />
          </div>

          <span className="text-[10px] font-light ml-22 mt-4 w-3/4">
            By creating an account , you agrees to our{" "}
            <span className="text-blue-600 font-light underline">
              Terms of use{" "}
            </span>
            and and{" "}
            <span className="text-blue-600 font-light underline">
              privacy policy
            </span>
          </span>

          <button
            onClick={(e) => handleSubmit(e)}
            disabled={
              !formData.username ||
              !formData.contactNumber ||
              !formData.email ||
              !formData.password ||
              !isValidPassword(formData.password) ||
              !isValidEmail(formData.email) ||
              !isNameValid(formData.username)
            }
            className="font-medium w-2/4 ml-22 mt-6 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Create an account
          </button>
          <span className="ml-22 mt-4 text-[12px] font-light">
            Already have an account?{" "}
            <span
              className="text-blue-700 underline cursor-pointer hover:no-underline"
              onClick={() => navigate("/login")}
            >
              Log In
            </span>
          </span>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex min-h-screen">
          {/* Left Side - Image */}
          <div className="flex-1 bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
            <div className="text-center text-white p-12">
              <div className="mb-8">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg"
                    alt="blogsimg"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h1 className="text-4xl font-bold mb-4">Welcome to BlogsWeb</h1>
                <p className="text-xl opacity-90">
                  Join thousands of writers sharing their stories
                </p>
              </div>
              <div className="space-y-4 text-left max-w-md">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Share your thoughts and ideas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Connect with like-minded writers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Build your personal brand</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 flex items-center justify-center p-12">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-center text-2xl font-light mb-2">
                  Create an account
                </h2>
                <p className="text-center text-sm text-gray-600 mb-8">
                  Already have an account?{" "}
                  <span
                    className="text-blue-400 cursor-pointer hover:underline"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </span>
                </p>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="username-desktop"
                      className="text-sm font-light block mb-2"
                    >
                      User name
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username-desktop"
                      value={formData.username}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onChange={(e) => handleChange("username", e.target.value)}
                    />
                    {formData.username && !isNameValid(formData.username) && (
                      <p className="text-red-500 text-xs mt-1">
                        please enter a valid name.
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email-desktop"
                      className="text-sm font-light block mb-2"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-desktop"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {formData.email && !isValidEmail(formData.email) && (
                      <p className="text-red-500 text-xs mt-1">
                        please enter a valid email
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password-desktop"
                      className="text-sm font-light block mb-2"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password-desktop"
                        value={formData.password}
                        onChange={(e) =>
                          handleChange("password", e.target.value)
                        }
                        className="w-full text-sm px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      >
                        {showPassword ? (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                    <span className="text-xs font-light text-gray-600 block mt-1">
                      use 8 or more character with a mix of symbols, uppercase &
                      lowercase
                    </span>
                    {formData.password &&
                      !isValidPassword(formData.password) && (
                        <p className="text-red-500 text-xs mt-1">
                          Password must be at least 8 characters with uppercase,
                          lowercase, and number
                        </p>
                      )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone-desktop"
                      className="text-sm font-light block mb-2"
                    >
                      Contact number
                    </label>
                    <div className="flex">
                      <select
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className="text-sm px-4 py-3 rounded-l-lg border border-gray-300 border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="number"
                        name="phone"
                        id="phone-desktop"
                        value={formData.contactNumber}
                        onChange={(e) =>
                          handleChange("contactNumber", e.target.value)
                        }
                        placeholder="Enter phone number"
                        className="flex-1 text-sm px-4 py-3 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <span className="text-xs font-light text-gray-600 block mt-6">
                  By creating an account, you agree to our{" "}
                  <span className="text-blue-600 font-light underline cursor-pointer">
                    Terms of use
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 font-light underline cursor-pointer">
                    privacy policy
                  </span>
                </span>

                <button
                  onClick={(e) => handleSubmit(e)}
                  disabled={
                    !formData.username ||
                    !formData.contactNumber ||
                    !formData.email ||
                    !formData.password ||
                    !isValidPassword(formData.password) ||
                    !isValidEmail(formData.email) ||
                    !isNameValid(formData.username)
                  }
                  className="font-medium w-full mt-6 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Create an account
                </button>

                <span className="text-center block mt-4 text-sm font-light">
                  Already have an account?{" "}
                  <span
                    className="text-blue-700 underline hover:no-underline cursor-pointer"
                    onClick={() => navigate("/login")}
                  >
                    Log In
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
