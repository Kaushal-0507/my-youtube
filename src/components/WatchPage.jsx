import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useVideoApi from "../utils/useVideoApi";
import VideoDetails from "./VideoDetails";
import { Link } from "react-router-dom";
import SidebarVideos from "./SidebarVideos";
import CommentList, { commentData } from "../utils/CommentData";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Shimmer from "./Shimmer";

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
      <div className={`px-3 py-6 ${isMenuOpen ? "ml-[83px]" : ""}`}>
        <p className="text-xl">
          <Shimmer flag={true} />
        </p>
      </div>
    );
  }

  return (
    <div className={`px-3 flex py-6 ${isMenuOpen ? "ml-[83px]" : ""}`}>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <iframe
            width="680px"
            height="380px"
            className="rounded-lg aspect-video"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            title={currentVideo.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <VideoDetails video={currentVideo} />
          <div className="flex flex-col bg-white mt-3.5">
            <div className="flex p-1.5  my-2 cursor-pointer bg-gray-100 rounded-lg items-center justify-between">
              {" "}
              <p
                onClick={() => {
                  toggleComment();
                }}
                className=" hover:text-gray-500 font-semibold text-[20px]"
              >
                Comment Section
              </p>
              <span
                onClick={() => {
                  toggleComment();
                }}
              >
                {showComment ? (
                  <MdOutlineKeyboardArrowDown />
                ) : (
                  <MdOutlineKeyboardArrowUp />
                )}
              </span>
            </div>

            {showComment && <CommentList comments={commentData} />}
          </div>
        </div>
      </div>
      <div className="max-w-[380px] mx-5 overflow-hidden flex flex-col gap-4">
        {videos.map((video) => (
          <Link key={video?.id} to={"/watch?v=" + video.id}>
            <SidebarVideos info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
