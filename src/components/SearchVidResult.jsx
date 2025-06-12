import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearchVideos from "../utils/useSearchVideos";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const SearchVidResult = () => {
  const [searchParams] = useSearchParams();
  const searchVidUrl = searchParams.get("s");

  const vidResults = useSearchVideos(searchVidUrl);
  if (!vidResults) {
    return <Shimmer />;
  }

  return (
    <div className="p-2 flex flex-wrap  gap-x-4 gap-y-7 ml-4 md:ml-0">
      {vidResults.map((video) => (
        <Link key={video?.etag} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVidResult;
