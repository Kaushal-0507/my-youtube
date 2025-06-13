import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoApi from "../utils/useVideoApi";
import Shimmer from "./Shimmer";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const videos = useVideoApi();
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  if (!videos || !videos.length) {
    return (
      <div>
        <Shimmer flag={false} />
      </div>
    );
  }

  return (
    <div
      className={`grid max-w-[93%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 py-4 px-4 mx-3 md:mx-0 md:px-0 ${
        isDarkTheme ? "text-white bg-black" : ""
      }`}
    >
      {videos.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
