import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/Contants";
import { cacheResults } from "../utils/searchSlice";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionFocus, setSuggestionFocus] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  const getSearchSuggestion = async () => {
    // console.log(searchText);
    const data = await fetch(YOUTUBE_SEARCH_API + searchText);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchText]: suggestions,
      })
    );
  };
  // console.log(suggestions);
  const toggleMenuClickHandle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col px-4 items-center">
      <div className="flex items-center gap-3 col-span-1">
        <IoIosMenu
          size={50}
          className="p-2 cursor-pointer"
          onClick={() => {
            toggleMenuClickHandle();
          }}
        />
        <Link to="/">
          <img
            className="w-[100px] py-1 ml-1.5 cursor-pointer"
            src="https://freepnglogo.com/images/all_img/1727611626_logo-youtube-png.jpg"
          />
        </Link>
      </div>
      <div className="col-span-9 text-center">
        <input
          type="text"
          placeholder="Search"
          className="border-[1px] w-[60%] text-[18px] p-2 px-5 rounded-l-full border-gray-400"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onFocus={() => {
            setSuggestionFocus(true);
          }}
          onBlur={() => {
            setSuggestionFocus(false);
          }}
        />
        <button className="border-[1px] rounded-r-full pt-[5px] pb-[12px] px-4 border-gray-400">
          <HiMagnifyingGlass size={22} className="align-middle pt-1 " />
        </button>
        {suggestionFocus && (
          <div className="fixed bg-white rounded-[10px] shadow-2xl left-[375px] px-2 py-2 mt-1.5 w-[480px] text-left border-gray-300">
            {suggestions.map((s) => (
              <p
                key={s}
                className="flex items-center gap-3 text-[18px] mb-1.5 hover:bg-gray-200 py-1.5 px-1.5 rounded-[5px]"
              >
                <HiMagnifyingGlass size={22} color="gray" />
                {s}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="col-span-3  flex justify-end items-center">
        <p className="px-2.5 mr-3.5 flex items-center py-2 bg-gray-200 rounded-full text-[14px] font-semibold">
          <GoPlus size={25} className="mr-1" />
          Create
        </p>
        <IoNotificationsOutline size={25} className="mr-3.5 cursor-pointer" />

        <MdAccountCircle size={35} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
