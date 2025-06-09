import React, { useState } from "react";
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
    <div className="flex-col ">
      {isMenuOpen ? (
        <div className="flex px-1 fixed left-0 top-[50px] bottom-0 shadow-lg bg-white z-10">
          <ul className=" px-2.5 text-[14px] text-center items-center ">
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
            <li className=" flex items-center  py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <MdAccountCircle size={25} className="mr-3" />
              You
            </li>
            <li className=" flex items-center  py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <IoIosSettings size={25} className="mr-3" />
              Setting
            </li>
            <li className=" flex items-center  py-3 px-3 hover:bg-gray-200 rounded-lg cursor-pointer">
              <IoIosHelpCircle size={25} className="mr-3" />
              Help
            </li>
          </ul>
        </div>
      ) : (
        <ul className=" px-2.5 text-[10px] text-center items-center ">
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
      )}
    </div>
  );
};

export default Sidebar;
