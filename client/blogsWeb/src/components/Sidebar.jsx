import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faHome,
  faIcons,
  faEnvelopesBulk,
  faTruckFast,
  faComments,
  faPen,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="hidden lg:block ">
        <div className="lg:flex items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md">
              <FontAwesomeIcon icon={faBlog} className="w-4 h-4 text-white" />
            </div>

            <div className="flex flex-col">
              <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent font-poppins tracking-wide">
                BLOGSWEB
              </h1>
              <p className="text-xs text-gray-500 font-light tracking-wider font-poppins">
                Share Your Story
              </p>
            </div>
          </div>
        </div>

        <div className="w-full border-b border-gray-300 my-4"></div>

        <div className="hidden lg:block">
          <div className="space-y-2 mt-4">
            <button className="w-44 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-lg p-3 flex items-center space-x-3 transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faHome}
                  className="text-blue-600 text-base"
                />
              </div>
              <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm font-poppins tracking-wide transition-colors duration-300">
                Dashboard
              </span>
            </button>
          </div>

          <div className="space-y-2 mt-4">
            <button className="w-44 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-lg p-3 flex items-center space-x-3 transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faTruckFast}
                  className="text-blue-600 text-base"
                />
              </div>
              <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm font-poppins tracking-wide transition-colors duration-300">
                Posts
              </span>
            </button>
          </div>

          <div className="space-y-2 mt-4">
            <button className="w-44 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-lg p-3 flex items-center space-x-3 transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faEnvelopesBulk}
                  className="text-blue-600 text-base"
                />
              </div>
              <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm font-poppins tracking-wide transition-colors duration-300">
                Categories
              </span>
            </button>
          </div>

          <div className="space-y-2 mt-4">
            <button className="w-44 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-lg p-3 flex items-center space-x-3 transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                <FontAwesomeIcon
                  icon={faIcons}
                  className="text-blue-600 text-base"
                />
              </div>
              <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm font-poppins tracking-wide transition-colors duration-300">
                Media
              </span>
            </button>
          </div>
          <div className="w-full border-b border-gray-300 my-4"></div>

          <div className="hidden lg:block">
            <h2 className="font-medium text-lg text-[16px] text-blue-500 font-poppins ml-4">
              SYSTEM
            </h2>

            <div className="space-y-2 mt-4">
              <button className="w-44 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-lg p-3 flex items-center space-x-3 transition-all duration-300 group">
                <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faComments}
                    className="text-blue-600 text-base"
                  />
                </div>
                <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm font-poppins tracking-wide transition-colors duration-300">
                  Comments
                </span>
              </button>
            </div>
            <div className="space-y-2 mt-4">
              <button className="w-44 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-lg p-3 flex items-center space-x-3 transition-all duration-300 group">
                <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faPen}
                    className="text-blue-600 text-base"
                  />
                </div>
                <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm font-poppins tracking-wide transition-colors duration-300">
                  Appearance
                </span>
              </button>
            </div>
            <div className="space-y-2 mt-4">
              <button className="w-44 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 border border-transparent rounded-lg p-3 flex items-center space-x-3 transition-all duration-300 group">
                <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faGear}
                    className="text-blue-600 text-base"
                  />
                </div>
                <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm font-poppins tracking-wide transition-colors duration-300">
                  Settings
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
