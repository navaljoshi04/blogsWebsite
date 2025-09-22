import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../slices/authSlices";
import {
  faBell,
  faBars,
  faComments,
  faEnvelopesBulk,
  faIcons,
  faMagnifyingGlass,
  faTruckFast,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isToggle, setIsToggle] = useState(true);
  const { user, isAuthenticated } = useSelector((state) => state?.auth);
  console.log("user", user);
  console.log(isAuthenticated);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log(user, "is logged out");
    dispatch(logoutSuccess());
  };
  return (
    <>
      <div className="hidden lg:flex bg-blue-50 min-h-screen p-6">
        <div className="w-full bg-white shadow-lg rounded-xl m-4 p-6 flex">
          {isToggle && (
            <div className="flex-shrink-0">
              <Sidebar />
            </div>
          )}

          <div className="flex-1 flex flex-col pl-2">
            <div className="h-16 flex items-center justify-between bg-gray-50 rounded-lg px-6 mb-4">
              <div className="flex justify-start">
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-gray-400 text-lg ml-4 cursor-pointer mt-2"
                  onClick={() => handleToggle()}
                />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-poppins ml-4 tracking-wide drop-shadow-sm">
                  Welcome to BlogsWeb✨
                </h2>
              </div>

              {/* Search Box */}
              <div className="flex items-center bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-gray-400 text-sm mr-3"
                />
                <input
                  type="text"
                  placeholder="Enter keywords..."
                  className="bg-transparent border-0 outline-none text-gray-600 font-poppins text-sm w-48 focus:ring-0 focus:border-0 focus:outline-none focus:shadow-none appearance-none"
                  style={{ boxShadow: "none", border: "none" }}
                />
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-blue-300 text-lg hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                />

                {/* User Profile Section */}
                {isAuthenticated && user ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-white text-sm"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {user.username || user.email}
                      </span>
                    </div>

                    {/* Logout Button */}
                    <button
                      onClick={() => handleLogout()}
                      className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 px-4 py-2 rounded-lg transition-all duration-200 group shadow-sm hover:shadow-md"
                    >
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="text-sm group-hover:scale-110 transition-transform duration-200"
                      />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                ) : (
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-blue-300 text-lg hover:text-blue-500 transition-colors duration-200 cursor-pointer"
                  />
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-blue-50 font-poppins">
                <div className="grid grid-cols-4">
                  <div className="bg-white shadow-lg m-4 rounded-md h-34">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="text-blue-400 px-2 py-2 text-lg"
                    />
                    <h4 className="font-poppin font-light px-2">Total Posts</h4>
                    <span className="text-gray-400 px-2 text-[12px]">
                      Last 30 days
                    </span>
                  </div>
                  <div
                    className="bg-white shadow-lg m-4 rounded-md h-34
                  "
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopesBulk}
                      className="text-blue-400 px-2 py-2 text-lg"
                    />
                    <h4 className="font-poppin font-light px-2">
                      Total Categories
                    </h4>
                    <span className="text-gray-400 px-2 text-[12px]">
                      Last 30 days
                    </span>
                  </div>
                  <div className="bg-white shadow-lg m-4 rounded-md h-34 ">
                    <FontAwesomeIcon
                      icon={faIcons}
                      className="text-blue-400 px-2 py-2 text-lg"
                    />
                    <h4 className="font-poppin font-light px-2">
                      Total Media Files
                    </h4>
                    <span className="text-gray-400 px-2 text-[12px]">
                      Last 30 days
                    </span>
                  </div>
                  <div className="bg-white shadow-lg m-4 rounded-md h-34 ">
                    <FontAwesomeIcon
                      icon={faComments}
                      className="text-blue-400 px-2 py-2 text-lg"
                    />
                    <h4 className="font-poppin font-light px-2">
                      Pending Comments
                    </h4>
                    <span className="text-gray-400 px-2 text-[12px]">
                      Last 30 days
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white shadow-lg m-4 px-4 py-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-sm mt-6"></div>
                      <div>
                        <h2 className="font-semibold font-poppins text-sm">
                          Post Growth
                        </h2>
                        <h4 className="font-poppins text-gray-600 mt-1">
                          Total number of posts
                        </h4>
                      </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="relative h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      {/* Chart Grid Lines */}
                      <div className="absolute inset-4">
                        {/* Horizontal grid lines */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-blue-200"></div>
                        <div className="absolute top-1/4 left-0 right-0 h-px bg-blue-200"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-200"></div>
                        <div className="absolute top-3/4 left-0 right-0 h-px bg-blue-200"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-200"></div>
                      </div>

                      {/* Bar Chart */}
                      <div className="absolute inset-4 flex items-end justify-between space-x-2">
                        {/* Bar 1 - Light Blue */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-6 bg-blue-300 rounded-t-sm"
                            style={{ height: "60%" }}
                          ></div>
                          <span className="text-xs text-blue-600 font-poppins mt-1">
                            Q1
                          </span>
                        </div>

                        {/* Bar 2 - Blue */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-6 bg-blue-500 rounded-t-sm"
                            style={{ height: "80%" }}
                          ></div>
                          <span className="text-xs text-blue-600 font-poppins mt-1">
                            Q2
                          </span>
                        </div>

                        {/* Bar 3 - Light Blue */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-6 bg-blue-300 rounded-t-sm"
                            style={{ height: "45%" }}
                          ></div>
                          <span className="text-xs text-blue-600 font-poppins mt-1">
                            Q3
                          </span>
                        </div>

                        {/* Bar 4 - Blue */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-6 bg-blue-500 rounded-t-sm"
                            style={{ height: "90%" }}
                          ></div>
                          <span className="text-xs text-blue-600 font-poppins mt-1">
                            Q4
                          </span>
                        </div>

                        {/* Bar 5 - Light Blue */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-6 bg-blue-300 rounded-t-sm"
                            style={{ height: "70%" }}
                          ></div>
                          <span className="text-xs text-blue-600 font-poppins mt-1">
                            Q5
                          </span>
                        </div>

                        {/* Bar 6 - Blue */}
                        <div className="flex flex-col items-center">
                          <div
                            className="w-6 bg-blue-500 rounded-t-sm"
                            style={{ height: "85%" }}
                          ></div>
                          <span className="text-xs text-blue-600 font-poppins mt-1">
                            Q6
                          </span>
                        </div>
                      </div>

                      {/* Y-axis labels */}
                      <div className="absolute left-2 top-4 bottom-4 flex flex-col justify-between text-xs text-blue-600 font-poppins">
                        <span>100</span>
                        <span>75</span>
                        <span>50</span>
                        <span>25</span>
                        <span>0</span>
                      </div>
                    </div>

                    {/* Post count */}
                    <div className="mt-3 text-center">
                      <span className="text-lg font-bold text-blue-600 font-poppins">
                        1,247
                      </span>
                      <span className="text-sm text-gray-600 font-poppins ml-1">
                        posts
                      </span>
                    </div>
                  </div>
                  <div className="bg-white shadow-lg m-4 px-4 py-4 rounded-lg col-span-2">
                    <h2 className="font-semibold font-poppins mb-4">
                      Comments Trends
                    </h2>

                    {/* Legend */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Approved</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Pending</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Rejected</span>
                      </div>
                    </div>

                    {/* Chart Area */}
                    <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-inner">
                      {/* Chart Grid Lines */}
                      <div className="absolute inset-6">
                        {/* Horizontal grid lines */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gray-300"></div>
                        <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-300"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
                        <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>

                        {/* Vertical grid lines */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
                        <div className="absolute left-1/6 top-0 bottom-0 w-px bg-gray-300"></div>
                        <div className="absolute left-2/6 top-0 bottom-0 w-px bg-gray-300"></div>
                        <div className="absolute left-3/6 top-0 bottom-0 w-px bg-gray-300"></div>
                        <div className="absolute left-4/6 top-0 bottom-0 w-px bg-gray-300"></div>
                        <div className="absolute left-5/6 top-0 bottom-0 w-px bg-gray-300"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300"></div>
                      </div>

                      {/* Chart Lines with Dots */}
                      <div className="absolute inset-6">
                        <svg className="w-full h-full">
                          {/* Green Line (Approved) */}
                          <polyline
                            points="0,100 60,80 120,60 180,40 240,30 300,25"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="3"
                            strokeDasharray="6,4"
                          />
                          <circle
                            cx="0"
                            cy="100"
                            r="4"
                            fill="#10b981"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="60"
                            cy="80"
                            r="4"
                            fill="#10b981"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="120"
                            cy="60"
                            r="4"
                            fill="#10b981"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="180"
                            cy="40"
                            r="4"
                            fill="#10b981"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="240"
                            cy="30"
                            r="4"
                            fill="#10b981"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="300"
                            cy="25"
                            r="4"
                            fill="#10b981"
                            stroke="white"
                            strokeWidth="2"
                          />

                          {/* Yellow Line (Pending) */}
                          <polyline
                            points="0,80 60,90 120,70 180,65 240,55 300,45"
                            fill="none"
                            stroke="#eab308"
                            strokeWidth="3"
                            strokeDasharray="4,4"
                          />
                          <circle
                            cx="0"
                            cy="80"
                            r="4"
                            fill="#eab308"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="60"
                            cy="90"
                            r="4"
                            fill="#eab308"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="120"
                            cy="70"
                            r="4"
                            fill="#eab308"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="180"
                            cy="65"
                            r="4"
                            fill="#eab308"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="240"
                            cy="55"
                            r="4"
                            fill="#eab308"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="300"
                            cy="45"
                            r="4"
                            fill="#eab308"
                            stroke="white"
                            strokeWidth="2"
                          />

                          {/* Red Line (Rejected) */}
                          <polyline
                            points="0,60 60,70 120,90 180,80 240,75 300,70"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="3"
                            strokeDasharray="8,4"
                          />
                          <circle
                            cx="0"
                            cy="60"
                            r="4"
                            fill="#ef4444"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="60"
                            cy="70"
                            r="4"
                            fill="#ef4444"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="120"
                            cy="90"
                            r="4"
                            fill="#ef4444"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="180"
                            cy="80"
                            r="4"
                            fill="#ef4444"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="240"
                            cy="75"
                            r="4"
                            fill="#ef4444"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <circle
                            cx="300"
                            cy="70"
                            r="4"
                            fill="#ef4444"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>

                      {/* Chart Labels */}
                      <div className="absolute bottom-0 left-6 right-6 flex justify-between text-xs text-gray-500 font-poppins">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                      </div>
                    </div>

                    <h4 className="font-poppins text-gray-600 mt-4">
                      Total number of comments: 1,247
                    </h4>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white shadow-lg m-4 py-4 px-2 rounded-lg">
                    <h2 className="font-semibold font-poppin ml-2">
                      Latest Posts{" "}
                    </h2>
                  </div>
                  <div className="bg-white shadow-lg m-4 py-4 px-2 rounded-lg col-span-2">
                    <h2 className="font-semibold font-poppin ml-2">
                      Recent Components
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
