import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  return (
    <div
      className={`flex md:mt-[73px] mt-[100px] ${
        isDarkTheme ? "bg-black" : ""
      }`}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
