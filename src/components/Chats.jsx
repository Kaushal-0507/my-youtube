import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";

const Chats = ({ name, message }) => {
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  return (
    <div
      className={`flex mb-2 rounded-[5px] py-2 px-1 ${
        isDarkTheme ? "bg-black text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div className="flex items-center">
        {" "}
        <p>
          <MdAccountCircle size={30} className="mr-1" />
        </p>
        <p className="text-[14px] font-bold mr-1">{name}:</p>
      </div>
      <p className="text-[12px] text-wrap font-semibold mt-2">{message}</p>
    </div>
  );
};

export default Chats;
