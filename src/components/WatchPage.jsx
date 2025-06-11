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

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoUrl = searchParams.get("v");
  const videos = useVideoApi();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [showComment, setShowComment] = useState(true);

  const toggleComment = () => {
    setShowComment(!showComment);
  };

  const currentVideo = videos?.find(
    (video) => video.id === videoUrl || video.id.videoId === videoUrl
  );

  if (!currentVideo) {
    return (
      <div className={`px-3 py-6 ${isMenuOpen ? "md:ml-[83px]" : ""}`}>
        <div className="text-xl">
          <Shimmer flag={true} />
        </div>
      </div>
    );
  }

  return (
    <div className={`px-2.5 py-6 ${isMenuOpen ? "md:ml-[83px]" : ""}`}>
      {/* Main Content Column (Video + Details + Comments) */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Left Column (Video + Details + Comments) */}
        <div className="w-full lg:flex-1">
          {/* Video Player */}
          <div className="w-full">
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
          <div className="flex flex-col bg-white mt-3.5">
            <div className="flex p-1.5 my-2 cursor-pointer bg-gray-100 rounded-lg items-center justify-between">
              <p
                onClick={toggleComment}
                className="hover:text-gray-500 font-semibold text-[20px]"
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
        <div className="hidden lg:block mx-2 max-w-[380px]">
          <LiveChat />
          <div className="w-full overflow-hidden flex flex-col gap-3.5 mt-4">
            {videos.map((video) => (
              <Link key={video?.id} to={"/watch?v=" + video.id}>
                <SidebarVideos info={video} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Section (Live Chat + Recommended Videos) */}
      <div className="lg:hidden mt-1">
        <LiveChat />

        <div className="py-2 ml-3.5 mx-1.5 my-3 md:my-0 flex flex-col gap-5 ">
          {videos.map((video) => (
            <Link key={video?.id} to={"/watch?v=" + video.id}>
              <VideoCard info={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
