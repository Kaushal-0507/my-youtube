import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearchVideos from "../utils/useSearchVideos";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const SearchVidResult = () => {
  const [searchParams] = useSearchParams();
  const searchVidUrl = searchParams.get("s");
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  const vidResults = useSearchVideos(searchVidUrl);
  if (!vidResults) {
    return <Shimmer />;
  }

  return (
    <div
      className={`p-2 flex flex-wrap  gap-x-4 gap-y-7 ml-4 md:ml-0 ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      {vidResults.map((video) => (
        <Link key={video?.etag} to={"/watch?v=" + video?.id?.videoId}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVidResult;
