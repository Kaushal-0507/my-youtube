import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex flex-col px-1.5 mb-2 pt-1.5 bg-gray-100 rounded-lg">
      <div className="flex">
        <MdAccountCircle size={40} className="cursor-pointer mr-2" />
        <div className="mt-2">
          <p className="font-semibold text-[16px]">@{name}</p>
          <p className="text-[14px]">{text}</p>
        </div>
      </div>

      <span className="flex py-2 px-4 my-1 mx-8">
        <BiLike size={20} color="black" className="mr-1.5 cursor-pointer" />
        <BiDislike size={20} color="black" className="ml-2 cursor-pointer" />
        <p className="text-[14px] font-semibold ml-5 cursor-pointer">Reply</p>
      </span>
    </div>
  );
};

export default Comment;
