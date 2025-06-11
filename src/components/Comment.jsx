import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex flex-col px-1.5 pt-1.5 mb-1.5 bg-gray-100 rounded-lg">
      <div className="flex">
        <MdAccountCircle
          size={30}
          className="md:size-[40px] cursor-pointer mr-2"
        />
        <div className="mt-1 md:mt-2">
          <p className="font-semibold text-sm md:text-[16px]">@{name}</p>
          <p className="text-xs md:text-[14px]">{text}</p>
        </div>
      </div>

      <div className="flex py-2 px-2 md:px-4 my-1 mx-4 md:mx-8">
        <BiLike
          size={18}
          className="md:size-[20px] cursor-pointer mr-1 md:mr-1.5"
        />
        <BiDislike
          size={18}
          className="md:size-[20px] cursor-pointer ml-1 md:ml-2"
        />
        <p className="text-xs md:text-[14px] font-semibold ml-3 md:ml-5 cursor-pointer">
          Reply
        </p>
      </div>
    </div>
  );
};

export default Comment;
