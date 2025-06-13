import React, { useState } from "react";
import useSearchVideos from "../utils/useSearchVideos";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const lists = [
    "All",
    "Live",
    "Music",
    "Anime",
    "Sitcoms",
    "Modern Family",
    "B99",
    "One Piece",
    "Movies",
    "James Bond",
    "The Mentalist",
    "New Girl",
    "Suits",
    "Night Agent",
    "White Collar",
    "Breaking Bad",
    "Jake Peralta",
    "Better Call Saul",
  ];
  const [activeQuery, setActiveQuery] = useState("All");
  const shouldFetchVideos = activeQuery !== "All";
  const btnVideoLists = useSearchVideos(shouldFetchVideos ? activeQuery : null);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  return (
    <div>
      <div
        className={`flex max-w-[93%] ml-2 md:ml-0 overflow-x-scroll [&::-webkit-scrollbar]:hidden py-2 space-x-2 ${
          isDarkTheme ? "bg-black" : "bg-white text-black"
        }`}
      >
        {lists.map((list) => (
          <button
            key={list}
            onClick={() => setActiveQuery(list)}
            className={`px-4 py-1.5 rounded-lg text-sm whitespace-nowrap ${
              activeQuery === list
                ? `${
                    isDarkTheme ? "bg-white text-black " : "bg-black text-white"
                  }`
                : `${
                    isDarkTheme
                      ? "text-white bg-white/10"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`
            } `}
          >
            {list}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      {activeQuery !== "All" && (
        <div
          className={`grid max-w-[93%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4 px-4 mx-3 md:mx-0 md:px-0 ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          {btnVideoLists?.length > 0 ? (
            btnVideoLists.map((video) => (
              <Link key={video.etag} to={"/watch?v=" + video?.id?.videoId}>
                <VideoCard info={video} />
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center"></div>
          )}
        </div>
      )}
    </div>
  );
};

export default ButtonList;
