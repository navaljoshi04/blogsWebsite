import React, { useState } from "react";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("+91");

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
  return (
    <>
      <div>
        <div className="grid grid-cols-1">
          <h2 className="text-center mt-12 font-light text-2xl ">
            Create an account
          </h2>
          <h5 className="text-[10px] ml-22 mt-2 font-light">
            Already have an account?{" "}
            <span className="text-blue-400">Login</span>
          </h5>
          <label htmlFor="" className="text-[12px] ml-22 mt-6 font-light">
            User name
          </label>
          <input
            type="text"
            name=""
            id=""
            className="w-2/4 ml-22 text-[12px] px-3 py-2 rounded-md"
          />
          <label htmlFor="" className="text-[12px] ml-22 mt-6 font-light">
            Email address
          </label>
          <input
            type="email"
            name=""
            id=""
            className="w-2/4 ml-22 text-[12px] px-3 py-2 rounded-md"
          />
          <label htmlFor="" className="text-[12px] ml-22 mt-6 font-light">
            Password
          </label>
          <div className="relative w-2/4 ml-22">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
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
              name=""
              id=""
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

          <button className="font-medium w-2/4 ml-22 mt-6 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Create an account
          </button>
          <span className="ml-22 mt-4 text-[12px] font-light">
            Already have an account?{" "}
            <span className="text-blue-700 underline">Log In</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Signin;
