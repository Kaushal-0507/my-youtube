import React from "react";
import { MdAccountCircle } from "react-icons/md";

const Chats = ({ name, message }) => {
  return (
    <div className="flex mb-2 rounded-[5px] bg-gray-200 py-2 px-1">
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
