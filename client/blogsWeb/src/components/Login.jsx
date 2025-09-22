import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slices/authSlices";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log("formData", formData);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const dispatch = useDispatch();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    // At least 8 characters, one lowercase, one uppercase, one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const showAlert = (message, type = "success") => {
    const alertDiv = document.createElement("div");
    alertDiv.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
      type === "success"
        ? "bg-green-500 text-white border-l-4 border-green-600"
        : "bg-red-500 text-white border-l-4 border-red-600"
    }`;

    alertDiv.innerHTML = `
      <div class="flex items-center">
        <div class="flex-shrink-0">
          ${
            type === "success"
              ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
              : '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>'
          }
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    `;

    // Add to page
    document.body.appendChild(alertDiv);

    // Animate in
    setTimeout(() => {
      alertDiv.classList.remove("translate-x-full");
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
      alertDiv.classList.add("translate-x-full");
      setTimeout(() => {
        if (alertDiv.parentElement) {
          alertDiv.remove();
        }
      }, 300);
    }, 5000);
  };

  const handleLogin = async () => {
    // Handle login logic here
    const payload = {
      email: formData.email,
      password: formData.password,
    };
    try {
      console.log("Login data:", formData);
      const reponse = await axios.post(
        "http://localhost:3000/api/auth/login",
        payload
      );
      console.log("response", reponse);
      dispatch(loginSuccess(reponse?.data?.user));
      showAlert("Login successful! Welcome back!", "success");
      console.log("login successfull");
      navigate("/home");
    } catch (error) {
      if (error.response && error.response.data) {
        showAlert(error.response.data.message, "error");
      } else {
        showAlert("Something went wrong. Please try again later.", "error");
      }
    }
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
                  className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent ${
                    formData.email && !isValidEmail(formData.email)
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {formData.email && !isValidEmail(formData.email) && (
                  <p className="text-red-500 text-xs mt-1">
                    Please enter a valid email address
                  </p>
                )}
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
                    className={`w-full text-sm px-4 py-3 pr-12 rounded-lg border focus:outline-none focus:ring-2 focus:border-transparent ${
                      formData.password && !isValidPassword(formData.password)
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
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
                {formData.password && !isValidPassword(formData.password) && (
                  <p className="text-red-500 text-xs mt-1">
                    Password must be at least 8 characters with uppercase,
                    lowercase, and number
                  </p>
                )}
              </div>

              <button
                onClick={handleLogin}
                disabled={
                  !formData.email ||
                  !formData.password ||
                  !isValidEmail(formData.email) ||
                  !isValidPassword(formData.password)
                }
                className="bg-green-400 text-white w-full px-2 py-2 mt-8 rounded-md font-light text-[18px] cursor-pointer hover:bg-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Log in
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
                <span
                  className="underline text-gray-600 cursor-pointer hover:text-gray-800"
                  onClick={() => navigate("/signup")}
                >
                  Sign up
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - 4 Step Login Flow */}
      <div className="lg:hidden min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {/* Step 1: Welcome */}
        {currentStep === 1 && (
          <div className="relative min-h-screen bg-red-400 overflow-hidden">
            {/* White Balloons */}
            {/* Top Balloon */}
            <div className="absolute top-8 right-8 w-20 h-20 bg-white rounded-full shadow-lg opacity-90 animate-float">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              {/* S-shaped Balloon Tail */}
              <svg
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-12 opacity-60"
                viewBox="0 0 4 48"
              >
                <path
                  d="M2 0 Q3 6 2 12 Q1 18 2 24 Q3 30 2 36 Q1 42 2 48"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            {/* Bottom Balloon */}
            <div className="absolute bottom-8 left-8 w-16 h-16 bg-white rounded-full shadow-lg opacity-85 animate-float-delayed">
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
              {/* S-shaped Balloon Tail */}
              <svg
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-10 opacity-60"
                viewBox="0 0 4 40"
              >
                <path
                  d="M2 0 Q3 5 2 10 Q1 15 2 20 Q3 25 2 30 Q1 35 2 40"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>

            {/* Center Content */}
            <div className="flex flex-col justify-center items-center min-h-screen px-6">
              <div className="text-center">
                <h1 className="text-5xl font-mono text-white mb-4 tracking-wide drop-shadow-lg">
                  PostBlogs
                </h1>
                <p className="text-lg text-white opacity-90 mb-8 max-w-sm drop-shadow-md">
                  Share your thoughts, connect with readers, and build your
                  community
                </p>

                <button
                  onClick={nextStep}
                  className="bg-white hover:bg-gray-100 text-orange-500 font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Email Input */}
        {currentStep === 2 && (
          <div>
            <div className="mt-2">
              <img
                src="https://imgs.search.brave.com/CWZ2EnqBBSyo7WVogCUyk1LXwiU10t2MfGex1g6ukLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbGF1bmNo/LW9mLXJvY2tldC13/aXRoLW1hbi1hbmQt/d29tYW4taWxsdXN0/cmF0aW9uLWRvd25s/b2FkLWluLXN2Zy1w/bmctZ2lmLWZpbGUt/Zm9ybWF0cy0tc3Bh/Y2UtZXZlbnQtY291/bnRkb3duLWV4cGxv/cmF0aW9uLXRlYW0t/dHJhdmVsLW9uLWJ1/c2luZXNzLXBlb3Bs/ZS1wYWNrLWlsbHVz/dHJhdGlvbnMtMTA2/MTk4NTkucG5nP2Y9/d2VicA"
                alt=""
                srcset=""
                className="w-80 h-80
               object-contain"
              />
            </div>
            <div className="mt-18">
              <h1 className="font-light text-[38px] text-center">
                Discover the world with us 🐼
              </h1>
            </div>
            <div className="mt-10 flex justify-between">
              <button
                onClick={prevStep}
                className="px-8 py-3 bg-green-400 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors duration-200"
              >
                {" "}
                ＜ Back{" "}
              </button>
              <button
                onClick={nextStep}
                className="px-8 py-3 bg-blue-400 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors duration-200"
              >
                {" "}
                ＞ Next{" "}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Password Input */}
        {currentStep === 3 && (
          <div className="animate-fadeIn">
            <div className="overflow-hidden text-center">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Welcome back to your account"
                className="h-80 w-full object-cover"
              />
              <div className="px-6 py-8">
                <h1 className="font-bold text-4xl text-gray-800 mb-3 tracking-tight">
                  Welcome back
                </h1>
                <h4 className="text-lg text-gray-600 font-medium">
                  Sign in to access your account
                </h4>
              </div>
            </div>

            <div className="space-y-6 mt-4">
              <div>
                <label
                  htmlFor="email-mobile"
                  className="block text-sm font-medium text-gray-700 mb-2 px-2 py-2 "
                >
                  Enter your email
                </label>
                <input
                  type="email"
                  className={`w-full ml-2 mr-2 px-4 py-4 pr-12 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent ${
                    formData.email && !isValidEmail(formData.email)
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  autoFocus
                />
                {formData.email && !isValidEmail(formData.email) && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password-mobile"
                  className="block text-sm font-medium text-gray-700 mb-2 px-2 py-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password-mobile"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className={`w-full ml-2 mr-2 px-4 py-4 pr-12 text-lg border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent ${
                      formData.password && !isValidPassword(formData.password)
                        ? "border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:ring-blue-500"
                    }`}
                    placeholder="Enter your password"
                    autoFocus
                  />
                  {formData.password && !isValidPassword(formData.password) && (
                    <p className="text-red-500 text-sm mt-1 ml-2">
                      Password must be at least 8 characters with uppercase,
                      lowercase, and number
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg
                        className="w-6 h-6"
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
                        className="w-6 h-6"
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
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-3 text-gray-600 bg-green-400 rounded-md ml-4 hover:text-gray-800 transition-colors duration-200"
              >
                ＜ Back
              </button>
              <button
                onClick={nextStep}
                disabled={
                  !formData.email ||
                  !formData.password ||
                  !isValidEmail(formData.email) ||
                  !isValidPassword(formData.password)
                }
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors duration-200"
              >
                ＞ Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Login & Options */}
        {currentStep === 4 && (
          <div className="animate-fadeIn">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Ready to Sign In
              </h2>
              <p className="text-gray-600">Review your details and sign in</p>
            </div>

            <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Password:</span>
                  <span className="font-medium">••••••••</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 rounded-xl transition-colors duration-200 shadow-lg mb-4"
            >
              Log In
            </button>

            <div className="text-center space-y-4">
              <button className="text-blue-500 hover:text-blue-600 text-sm underline">
                Forgot your password?
              </button>

              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <button
                onClick={() => navigate("/signup")}
                className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-4 rounded-xl transition-colors duration-200"
              >
                Don't have an account? Sign up
              </button>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={prevStep}
                className="px-6 py-2 text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
              >
                ← Back to edit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
