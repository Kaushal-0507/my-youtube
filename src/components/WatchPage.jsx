import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useVideoApi from "../utils/useVideoApi";
import VideoDetails from "./VideoDetails";
import { Link } from "react-router-dom";
import SidebarVideos from "./SidebarVideos";
import VideoCard from "./VideoCard";
import CommentList, { commentData } from "../utils/CommentData";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Shimmer from "./Shimmer";
import LiveChat from "./LiveChat";
import useSearchVideos from "../utils/useSearchVideos";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoUrl = searchParams.get("v");

  // Get videos from both sources
  const regularVideos = useVideoApi();
  const searchVideos = useSearchVideos(videoUrl);

  // Combine both video sources for lookup
  const allVideos = [...(regularVideos || []), ...(searchVideos || [])];

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const [showComment, setShowComment] = useState(true);

  const toggleComment = () => {
    setShowComment(!showComment);
  };

  const currentVideo = allVideos.find((video) => {
    return (
      video.id === videoUrl ||
      video.id?.videoId === videoUrl ||
      (typeof video.id === "string" && video.id === videoUrl)
    );
  });

  if (!currentVideo) {
    return <Shimmer flag={true} />;
  }

  return (
    <div
      className={`w-full max-w-full overflow-hidden ${
        isMenuOpen ? "md:ml-[83px]" : ""
      }`}
    >
      {/* Main Content Column (Video + Details + Comments) */}
      <div className="flex flex-col lg:flex-row gap-6 w-full px-2.5 py-6">
        {/* Left Column (Video + Details + Comments) */}
        <div className="w-full lg:flex-1 overflow-hidden">
          {/* Video Player */}
          <div className="w-full overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                className="rounded-lg"
                src={`https://www.youtube.com/embed/${videoUrl}`}
                title={currentVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Details */}
          <VideoDetails video={currentVideo} />

          {/* Comments Section */}
          <div className="flex flex-col mt-3.5 rounded-[10px] py-3 w-full overflow-hidden">
            <div
              className={`flex py-1.5 px-2.5 my-2 cursor-pointer rounded-lg items-center justify-between ${
                isDarkTheme
                  ? "bg-white/10 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              <p
                onClick={toggleComment}
                className={`font-semibold text-[20px] ${
                  isDarkTheme ? "text-white hover:text-gray-500" : "text-black"
                }`}
              >
                Comment Section
              </p>
              <span onClick={toggleComment}>
                {showComment ? (
                  <MdOutlineKeyboardArrowUp size={24} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={24} />
                )}
              </span>
            </div>

            {showComment && <CommentList comments={commentData} />}
          </div>
        </div>

        {/* Right Column (Live Chat + Sidebar Videos) - Desktop */}
        <div className="hidden lg:block mx-2 max-w-[380px] w-full">
          <LiveChat />
          <div className="w-full overflow-hidden flex flex-col gap-3.5 mt-4">
            {allVideos.map((video) => (
              <Link key={video?.etag} to={"/watch?v=" + video.id}>
                <SidebarVideos info={video} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Section (Live Chat + Recommended Videos) */}
      <div className="lg:hidden mt-1 w-full overflow-hidden px-2.5">
        <LiveChat />

        <div className="py-2 my-3 ml-3.5 mx-1.5 flex flex-col gap-5 ">
          {allVideos.map((video) => (
            <Link key={video?.etag} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
