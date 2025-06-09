import React from "react";
import { formatTimeAgo, formatViewCount } from "./VideoCard";
import useChannelDetails from "../utils/useChannelDetails";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useState } from "react";

const VideoDetails = ({ video }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const channelDetails = useChannelDetails(video?.snippet?.channelId);
  const [subscribe, setSubscribe] = useState(false);

  const handleSubscribe = () => {
    setSubscribe(!subscribe);
  };

  if (!video) return null;

  const { snippet, statistics } = video;
  const { title, channelTitle, description, publishedAt } = snippet;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const renderDescription = () => {
    if (!description) return null;

    return (
      <div className="relative">
        <div
          className={`whitespace-pre-line overflow-hidden ${
            showFullDescription ? "" : "line-clamp-2"
          }`}
        >
          {description}
        </div>
        {description.split("\n").length > 2 && (
          <button
            onClick={toggleDescription}
            className="text-gray-600 font-semibold text-[14px] mt-1 hover:text-gray-800"
          >
            {showFullDescription ? "...Show less" : "...Show more"}
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="mt-3 max-w-[680px]">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center mt-3">
            <div className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-400 mr-3 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={channelDetails?.snippet?.thumbnails?.default?.url}
                alt="channel"
              />
            </div>
            <div>
              <p className="text-black font-bold text-[18px]">{channelTitle}</p>
              {channelDetails?.statistics?.subscriberCount && (
                <p className="text-gray-500 text-sm">
                  {formatViewCount(channelDetails.statistics.subscriberCount)}{" "}
                  subscribers
                </p>
              )}
            </div>
            <button
              onClick={() => {
                handleSubscribe();
              }}
              className={`ml-5 cursor-pointer px-3.5 py-2 text-center font-semibold text-[16px] text-white bg-black rounded-[40px] ${
                subscribe ? "bg-black text-white" : "bg-red-600 text-white"
              }`}
            >
              {subscribe ? "Subscribed" : "Subscribe"}
            </button>
          </div>
          <div className="flex gap-2 text-sm text-gray-500 items-center mt-3">
            {statistics?.likeCount && (
              <span className="flex py-2 px-4 cursor-pointer bg-gray-200 rounded-full">
                {" "}
                <BiLike size={20} color="black" className="mr-1.5" />
                {formatViewCount(statistics.likeCount)} |{" "}
                <BiDislike size={20} color="black" className="ml-2" />
              </span>
            )}
            <div className="py-2 px-4 flex cursor-pointer bg-gray-200 text-black rounded-full">
              <RiShareForwardLine size={20} color="black" className="mr-1.5" />
              <p className="font-semibold">Share</p>
            </div>
            <p className="p-2 cursor-pointer bg-gray-200 rounded-full">
              <BsThreeDots size={20} />
            </p>
          </div>
        </div>
        <div className="mt-4 p-3 text-[16px] bg-gray-100 rounded-lg">
          <div className="flex gap-2 text-sm mb-2">
            {statistics?.viewCount && (
              <span className="font-bold">
                {formatViewCount(statistics.viewCount)} views
              </span>
            )}
            <span className="font-bold">{formatTimeAgo(publishedAt)}</span>
          </div>
          {renderDescription()}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
