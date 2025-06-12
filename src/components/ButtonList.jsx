import React, { useState } from "react";
import useSearchVideos from "../utils/useSearchVideos";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

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
    "White Collar",
    "Breaking Bad",
    "Jake Peralta",
    "Better Call Saul",
  ];
  const [activeQuery, setActiveQuery] = useState("All");
  const shouldFetchVideos = activeQuery !== "All";
  const btnVideoLists = useSearchVideos(shouldFetchVideos ? activeQuery : null);

  // Show Shimmer only when fetching (not for "All")
  if (shouldFetchVideos && !btnVideoLists) {
    return <Shimmer flag={false} />;
  }

  return (
    <div>
      {/* Button Row */}
      <div className="flex max-w-[93%] ml-2 md:ml-0  overflow-x-scroll [&::-webkit-scrollbar]:hidden py-2 space-x-2">
        {lists.map((list) => (
          <button
            key={list}
            onClick={() => setActiveQuery(list)}
            className={`px-4 py-1.5 rounded-lg text-sm whitespace-nowrap ${
              activeQuery === list
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {list}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      {activeQuery !== "All" && (
        <div className="p-2 flex flex-wrap gap-x-4 gap-y-7 ml-2.5 md:ml-0">
          {btnVideoLists?.length > 0 ? (
            btnVideoLists.map((video) => (
              <Link key={video.etag} to={"/watch?v=" + video.id}>
                <VideoCard info={video} />
              </Link>
            ))
          ) : (
            <p>No videos found for "{activeQuery}"</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ButtonList;
