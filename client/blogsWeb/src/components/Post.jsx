import React, { useState } from "react";

import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Post = () => {
  const [toggle, setToggle] = useState(false);
  const handleLogout = () => {
    console.log("toggle", toggle);
    setToggle(!toggle);
  };
  return (
    <>
      <div className="hidden lg:flex bg-blue-50 min-h-screen p-6">
        <div className="w-full  shadow-lg bg-amber-50 rounded-xl m-4 p-6 flex ">
          {toggle && (
            <div className="flex-shrink-0">
              <Sidebar />
            </div>
          )}
          <div className="flex-1 flex flex-col pl-2  ">
            <div className="w-full shadow-lg  h-full rounded-xl ">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => handleLogout()}
                className="cursor-pointer"
              />
              <div className="shadow-lg bg-white h-150 w-220 ml-14 rounded-md">
                <form action="">
                  <div>
                    <label
                      htmlFor=""
                      className="font-semibold text-[14px] mt-2 ml-2 px-4 py-2"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-2/4 rounded-md px-1 py-1 text-[12px] mt-4 ml-14"
                      placeholder="enter your title"
                    />
                  </div>

                  <div className=" flex">
                    <label
                      htmlFor=""
                      className="font-semibold text-[14px] mt-22 ml-2 px-4 py-2 text-center"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      placeholder="write a short description here..."
                      className="w-2/4 ml-12 border outline-none rounded-md px-1 py-1 text-[12px] mt-12"
                      rows="7"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
