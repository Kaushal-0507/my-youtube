import React from "react";
import { IoIosHome } from "react-icons/io";
import { IoIosMusicalNote } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        {isMenuOpen ? (
          <div className="flex px-1 fixed left-0 top-[50px] bottom-0 shadow-lg bg-white z-10 w-56">
            <ul className="px-2.5 text-[14px] w-full">
              <Link to="/">
                <li className="flex items-center py-2.5 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                  <IoIosHome size={25} className="mr-3" />
                  Home
                </li>
              </Link>
              <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                <IoIosMusicalNote size={25} className="mr-3" />
                Shorts
              </li>
              <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                <MdOutlineSubscriptions size={25} className="mr-3" />
                Subscriptions
              </li>
              <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                <MdAccountCircle size={25} className="mr-3" />
                You
              </li>
              <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                <IoIosSettings size={25} className="mr-3" />
                Setting
              </li>
              <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                <IoIosHelpCircle size={25} className="mr-3" />
                Help
              </li>
            </ul>
          </div>
        ) : (
          <div className=" bg-white z-10 w-20 py-2">
            <ul className="px-2 text-[10px] text-center">
              <Link to="/">
                <li className="py-2.5 px-0.5 hover:bg-gray-200 rounded-2xl cursor-pointer">
                  <IoIosHome size={25} className="m-auto" />
                  Home
                </li>
              </Link>
              <li className="py-3 px-0.5 hover:bg-gray-200 rounded-2xl cursor-pointer">
                <IoIosMusicalNote size={25} className="m-auto" />
                Shorts
              </li>
              <li className="py-3 px-0.5 hover:bg-gray-200 rounded-2xl cursor-pointer">
                <MdOutlineSubscriptions size={25} className="m-auto" />
                Subscriptions
              </li>
              <li className="py-3 px-0.5 hover:bg-gray-200 rounded-2xl cursor-pointer">
                <MdAccountCircle size={25} className="m-auto" />
                You
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      {isMenuOpen ? (
        <div className="flex px-1 fixed left-0 top-[50px] bottom-0 shadow-lg bg-white z-10 w-56">
          <ul className="px-2.5 text-[14px] w-full">
            <Link to="/">
              <li className="flex items-center py-2.5 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
                <IoIosHome size={25} className="mr-3" />
                Home
              </li>
            </Link>
            <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <IoIosMusicalNote size={25} className="mr-3" />
              Shorts
            </li>
            <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <MdOutlineSubscriptions size={25} className="mr-3" />
              Subscriptions
            </li>
            <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <MdAccountCircle size={25} className="mr-3" />
              You
            </li>
            <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <IoIosSettings size={25} className="mr-3" />
              Setting
            </li>
            <li className="flex items-center py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <IoIosHelpCircle size={25} className="mr-3" />
              Help
            </li>
          </ul>
        </div>
      ) : (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
          <ul className="flex justify-around py-0.5">
            <Link to="/" className="flex-1">
              <li className="flex flex-col items-center px-1 py-1 hover:bg-gray-100 rounded-lg cursor-pointer">
                <IoIosHome size={20} />
                <span className="text-[10px] mt-1">Home</span>
              </li>
            </Link>
            <li className="flex flex-col items-center px-1 py-1 hover:bg-gray-100 rounded-lg cursor-pointer flex-1">
              <IoIosMusicalNote size={20} />
              <span className="text-[10px] mt-1">Shorts</span>
            </li>
            <li className="flex flex-col items-center px-1 py-1 hover:bg-gray-100 rounded-lg cursor-pointer flex-1">
              <MdOutlineSubscriptions size={20} />
              <span className="text-[10px] mt-1">Subs</span>
            </li>
            <li className="flex flex-col items-center px-1 py-1 hover:bg-gray-100 rounded-lg cursor-pointer flex-1">
              <MdAccountCircle size={20} />
              <span className="text-[10px] mt-1">You</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
