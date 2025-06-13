import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import useChannelDetails from "../utils/useChannelDetails";
import { formatTimeAgo, formatDuration, formatViewCount } from "./VideoCard";
import { useSelector } from "react-redux";

const SidebarVideos = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, channelId, thumbnails, title, publishedAt } = snippet;
  const channelDetails = useChannelDetails(channelId);
  const duration = contentDetails?.duration;
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);

  return (
    <div className="cursor-pointer relative items-center flex">
      <div>
        {" "}
        <div className="absolute bottom-[102px]  right-[63%] text-[12px] bg-black/80 text-white font-semibold px-1 py-0.5 rounded-md">
          {formatDuration(duration)}
        </div>
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-[190px] rounded-lg aspect-video object-cover "
        />
      </div>

      <div className="ml-1.5 w-[280px] flex justify-between">
        <div className="text-[14px] w-[200px] text-left">
          <p
            className={`text-[14px] font-medium line-clamp-2 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
          <p className="text-gray-600 text-sm mt-1">{channelTitle}</p>
          <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
            {statistics?.viewCount && (
              <span>{formatViewCount(statistics.viewCount)} views</span>
            )}
            <span>•</span>
            <span>{formatTimeAgo(publishedAt)}</span>
          </div>
        </div>
        <BsThreeDotsVertical
          size={25}
          color="gray"
          className={`p-1.5 ml-1 bg-gray-100 rounded-full ${
            isDarkTheme ? "bg-white/10" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default SidebarVideos;
