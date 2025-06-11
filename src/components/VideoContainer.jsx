import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoApi from "../utils/useVideoApi";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const videos = useVideoApi();

  if (!videos.length) {
    return (
      <div>
        <Shimmer flag={false} />
      </div>
    );
  }

  return (
    <div className="p-2 flex flex-wrap gap-x-4 gap-y-7 ml-2.5 md:ml-0">
      {videos.map((video) => (
        <Link key={video?.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
