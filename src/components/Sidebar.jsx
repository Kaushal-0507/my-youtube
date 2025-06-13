import React from "react";
import { IoIosHome } from "react-icons/io";
import { IoIosMusicalNote } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaAffiliatetheme } from "react-icons/fa";
import { toggleTheme } from "../utils/appSlice";
import { IoAccessibility } from "react-icons/io5";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const dispatch = useDispatch();

  const themeClickHandle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        {isMenuOpen ? (
          <div
            className={`flex px-1 fixed left-0 top-[100px] bottom-0 shadow-lg  z-10 ${
              isDarkTheme ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <ul className="px-2.5 my-6 py-6 text-[14px] ">
              <Link to="/">
                <li
                  className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                    isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                  }`}
                >
                  <IoIosHome size={25} className="mr-3" />
                  Home
                </li>
              </Link>
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <IoIosMusicalNote size={25} className="mr-3" />
                Shorts
              </li>
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <MdOutlineSubscriptions size={25} className="mr-3" />
                Subscriptions
              </li>
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <MdAccountCircle size={25} className="mr-3" />
                You
              </li>

              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <IoIosSettings size={25} className="mr-3" />
                Setting
              </li>
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <IoIosHelpCircle size={25} className="mr-3" />
                Help
              </li>
            </ul>
          </div>
        ) : (
          <div
            className={` z-10 w-20 py-2 ${
              isDarkTheme ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <ul className="px-2 text-[10px] text-center">
              <Link to="/">
                <li
                  className={` py-2.5 px-0.5  rounded-lg cursor-pointer ${
                    isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                  }`}
                >
                  {" "}
                  <IoIosHome size={25} className="m-auto" />
                  Home
                </li>
              </Link>
              <Link to="signin">
                <li
                  className={`py-3 px-0.5  rounded-lg cursor-pointer ${
                    isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                  }`}
                >
                  {" "}
                  <IoIosMusicalNote size={25} className="m-auto" />
                  Shorts
                </li>
              </Link>

              <Link to="/signin">
                <li
                  className={` py-3 px-0.5  rounded-lg cursor-pointer ${
                    isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                  }`}
                >
                  <MdOutlineSubscriptions size={25} className="m-auto" />
                  Subscriptions
                </li>
              </Link>

              <Link to="/signin">
                <li
                  className={` py-3 px-0.5  rounded-lg cursor-pointer ${
                    isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                  }`}
                >
                  {" "}
                  <MdAccountCircle size={25} className="m-auto" />
                  You
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      {isMenuOpen ? (
        <div
          className={`flex px-1 fixed left-0 top-[58px] md:top-[70px] bottom-0 shadow-lg z-60 w-56 ${
            isDarkTheme ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <ul className="px-2.5 text-[14px] w-full">
            <Link to="/">
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                <IoIosHome size={25} className="mr-3" />
                Home
              </li>
            </Link>
            <Link to="/signin">
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                <IoIosMusicalNote size={25} className="mr-3" />
                Shorts
              </li>
            </Link>
            <Link to="/signin">
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                <MdOutlineSubscriptions size={25} className="mr-3" />
                Subscriptions
              </li>
            </Link>

            <Link to="/signin">
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                <MdAccountCircle size={25} className="mr-3" />
                You
              </li>
            </Link>
            <li
              onClick={() => {
                themeClickHandle();
              }}
              className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
              }`}
            >
              <FaAffiliatetheme size={25} className="mr-3" />
              {isDarkTheme ? "Dark ✅" : "Light ✅"}
            </li>
            <Link to="/signin">
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                <IoIosSettings size={25} className="mr-3" />
                Setting
              </li>
            </Link>
            <Link to="/signin">
              <li
                className={`flex items-center py-2.5 px-3  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                <IoAccessibility size={25} className="mr-3" />
                Help
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <div
          className={`md:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200 z-10 ${
            isDarkTheme ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <ul className="flex justify-around py-0.5">
            <Link to="/" className="flex-1">
              <li
                className={`flex flex-col items-center flex-1 py-1 px-1  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <IoIosHome size={20} />
                <span className="text-[10px] mt-1">Home</span>
              </li>
            </Link>
            <Link to="/signin" className="flex-1">
              <li
                className={`flex flex-col items-center flex-1 py-1 px-1  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <IoIosMusicalNote size={20} />
                <span className="text-[10px] mt-1">Shorts</span>
              </li>
            </Link>
            <Link to="/signin" className="flex-1">
              <li
                className={`flex flex-col items-center flex-1 py-1 px-1  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <MdOutlineSubscriptions size={20} />
                <span className="text-[10px] mt-1">Subs</span>
              </li>
            </Link>
            <Link to="/signin" className="flex-1">
              <li
                className={`flex flex-col items-center flex-1 py-1 px-1  rounded-lg cursor-pointer ${
                  isDarkTheme ? "hover:bg-white/10" : "hover:bg-gray-200"
                }`}
              >
                {" "}
                <MdAccountCircle size={20} />
                <span className="text-[10px] mt-1">You</span>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
