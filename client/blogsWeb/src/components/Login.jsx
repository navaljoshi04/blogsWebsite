import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="hidden lg:grid grid-cols-2 h-screen shadow-2xl shadow-blue-500 bg-gray-100 p-4">
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
          <div className="text-center text-white p-12 ">
            <div className="mb-8">
              <div className="w-40 h-40 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src="https://imgs.search.brave.com/rozRPy5CLy71kUMDJxEnvqG1opxFHT57lDV4bzK7t44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldmls/bWFydGlhbnMuY29t/L3N0YXRpYy9mNzky/ZTQyZTY3ODRjM2E5/ZDBmMjJiNzk5MjE1/MWEzNi8yMWI5OC9j/b3Zlci5qcGc"
                  alt="login img"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
              <p className="text-xl opacity-90">
                Sign in to continue your journey
              </p>
            </div>
            <div className="space-y-4 text-left max-w-md">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Access your personalized dashboard</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Connect with your community</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Continue your creative journey</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full max-w-md">
            <div className="bg-white shadow-2xl p-8 ml-6 mt-14 rounded-md">
              <div className="h-18 w-18 rounded-full bg-gray-100 mx-auto mt-2 overflow-hidden">
                <img
                  src="https://image.shutterstock.com/image-photo/image-260nw-2469135691.jpg"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="font-semibold text-center text-[18px]">Log In</h2>
              <div className="mt-8">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-light"
                >
                  Enter your email address{" "}
                </label>
                <input
                  type="email"
                  className="w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:outline-none  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
                />
              </div>

              <div className="mt-8">
                <label
                  htmlFor="password-desktop"
                  className="text-sm font-light block mb-2"
                >
                  Enter your password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password-desktop"
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
              </div>

              <button className="bg-green-400 text-white w-full px-2 py-2 mt-8 rounded-md font-light text-[18px] cursor-pointer hover:bg-green-500">
                {" "}
                Log in{" "}
              </button>

              {/* OR divider */}
              <div className="flex items-center mt-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500 font-light">
                  OR
                </span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-center mt-4">
                <span className="font-light text-[12px] underline text-gray-600 cursor-pointer hover:text-gray-800">
                  Forget your password?
                </span>
              </div>
            </div>
            <div className="bg-white shadow-2xl p-8 ml-6 mt-8 rounded-md text-center ">
              <button className="font-light text-[14px]">
                Don't have an account?{" "}
                <span className="underline text-gray-600 cursor-pointer hover:text-gray-800">
                  Sign up
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
