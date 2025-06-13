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
      className={`grid max-w-[93%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4 px-4 mx-3 md:mx-0 md:px-0 ${
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
