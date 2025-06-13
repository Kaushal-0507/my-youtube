import React from "react";
import { formatTimeAgo, formatViewCount } from "./VideoCard";
import useChannelDetails from "../utils/useChannelDetails";
import { BsThreeDots } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoDetails = ({ video }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const channelDetails = useChannelDetails(video?.snippet?.channelId);

  const [subscribe, setSubscribe] = useState(false);
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

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
      <div className="mt-3 w-full">
        <h1
          className={`text-xl font-bold ${
            isDarkTheme ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center mt-3">
              <div className="w-[50px] h-[50px] rounded-full border-[1px] border-gray-400 mr-3 overflow-hidden">
                <Link
                  key={video?.snippet?.channelId}
                  to={"/channel?c=" + video?.snippet?.channelId}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={channelDetails?.snippet?.thumbnails?.default?.url}
                    alt="channel"
                  />
                </Link>
              </div>
              <div>
                <Link
                  key={video?.snippet?.channelId}
                  to={"/channel?c=" + video?.snippet?.channelId}
                >
                  <p
                    className={`font-bold text-[18px] ${
                      isDarkTheme ? "text-white" : "text-black"
                    }`}
                  >
                    {channelTitle}
                  </p>
                </Link>
                {channelDetails?.statistics?.subscriberCount && (
                  <p className="text-gray-500 text-sm">
                    {formatViewCount(channelDetails.statistics.subscriberCount)}{" "}
                    subscribers
                  </p>
                )}
              </div>
              <button
                onClick={handleSubscribe}
                className={`ml-5 cursor-pointer px-3.5 py-2 text-center font-semibold text-[16px] text-white bg-black rounded-[40px] ${
                  subscribe
                    ? "bg-black text-white border-[1px] border-gray-400"
                    : "bg-red-600 text-white"
                }`}
              >
                {subscribe ? "Subscribed" : "Subscribe"}
              </button>
            </div>
            <div className="flex gap-2 text-sm text-gray-500 items-center mt-3">
              {statistics?.likeCount && (
                <span
                  className={`flex py-2 px-4 cursor-pointer bg-gray-200 rounded-full ${
                    isDarkTheme
                      ? "text-white bg-white/10"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  <BiLike size={20} className="mr-1.5" />
                  {formatViewCount(statistics.likeCount)} |{" "}
                  <BiDislike size={20} className="ml-2" />
                </span>
              )}
              <div
                className={`flex py-2 px-4 cursor-pointer bg-gray-200 rounded-full ${
                  isDarkTheme
                    ? "text-white bg-white/10"
                    : "bg-gray-200 text-black"
                }`}
              >
                <RiShareForwardLine size={20} className="mr-1.5" />
                <p className="font-semibold">Share</p>
              </div>
              <p
                className={`p-2  cursor-pointer bg-gray-200 rounded-full ${
                  isDarkTheme
                    ? "text-white bg-white/10"
                    : "bg-gray-200 text-black"
                }`}
              >
                <BsThreeDots size={20} />
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex items-center  gap-2 text-xs text-gray-500">
            {statistics?.viewCount && (
              <span>{formatViewCount(statistics.viewCount)} views</span>
            )}
            <span>•</span>
            <span>{formatTimeAgo(publishedAt)}</span>
          </div>
          <div className="flex items-center mt-3 gap-2">
            <div className="w-[40px] h-[40px] rounded-full border-[1px] border-gray-300 overflow-hidden">
              <Link
                key={video?.snippet?.channelId}
                to={"/channel?c=" + video?.snippet?.channelId}
              >
                <img
                  className="w-full h-full object-cover"
                  src={channelDetails?.snippet?.thumbnails?.default?.url}
                  alt="channel"
                />
              </Link>
            </div>

            <div className="flex-1">
              <div className="flex flex-col">
                <Link
                  key={video?.snippet?.channelId}
                  to={"/channel?c=" + video?.snippet?.channelId}
                >
                  <p className="text-black font-bold text-base">
                    {channelTitle}
                  </p>
                </Link>
                {channelDetails?.statistics?.subscriberCount && (
                  <p className="text-gray-500 text-xs">
                    {formatViewCount(channelDetails.statistics.subscriberCount)}{" "}
                    subs
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleSubscribe}
              className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${
                subscribe ? "bg-gray-600" : "bg-red-600"
              }`}
            >
              {subscribe ? "Subscribed" : "Subscribe"}
            </button>
          </div>

          <div className="flex gap-2 mt-3">
            {statistics?.likeCount && (
              <span className="flex py-2 px-3 items-center text-[12px] cursor-pointer bg-gray-200 rounded-full">
                <BiLike size={16} color="black" className="mr-1.5" />
                {formatViewCount(statistics.likeCount)} |{" "}
                <BiDislike size={16} color="black" className="ml-2" />
              </span>
            )}
            <div className="py-2 px-3 text-[12px] items-center flex cursor-pointer bg-gray-200 text-black rounded-full">
              <RiShareForwardLine size={16} color="black" className="mr-1.5" />
              <p className="font-semibold">Share</p>
            </div>
            <p className="py-2 px-2.5 ml-[55px] cursor-pointer bg-gray-200 rounded-full">
              <BsThreeDots size={16} />
            </p>
          </div>
        </div>

        {/* Description (same for both) */}

        <div
          className={`mt-3 md:mt-4 p-3 text-sm md:text-[16px] bg-gray-100 rounded-lg ${
            isDarkTheme ? "text-white bg-white/10 " : "bg-gray-100"
          }`}
        >
          <div className="hidden md:flex md:items-center  md:gap-2 md:font-semibold md:text-[14px] md:text-gray-500">
            {statistics?.viewCount && (
              <span>{formatViewCount(statistics.viewCount)} views</span>
            )}
            <span>•</span>
            <span>{formatTimeAgo(publishedAt)}</span>
          </div>
          <div className="flex gap-2 text-sm mb-2 md:block">
            {renderDescription()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
