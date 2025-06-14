import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import useChannelDetails from "../utils/useChannelDetails";
import { useSelector } from "react-redux";

export const formatDuration = (duration) => {
  if (!duration) return "0:00";

  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  const seconds = parseInt(match[3] || 0);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const formatTimeAgo = (publishedAt) => {
  if (!publishedAt) return "Just now";

  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffInSeconds = Math.floor((now - publishedDate) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [unit, seconds] of Object.entries(intervals)) {
    const interval = Math.floor(diffInSeconds / seconds);
    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? "" : "s"} ago`;
    }
  }

  return "Just now";
};

export const formatViewCount = (count) => {
  if (!count) return "";

  const num = parseInt(count);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

const VideoCard = ({ info, flag }) => {
  if (!info) return null;
  const isDarkTheme = useSelector((store) => store.app.isDarkTheme);
  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, channelId, thumbnails, title, publishedAt } = snippet;
  const channelDetails = useChannelDetails(channelId);

  const duration = contentDetails?.duration;

  return (
    <div className="cursor-pointer w-full max-w-[360px] mx-auto md:max-w-none md:w-auto">
      <div className="relative">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-full rounded-lg aspect-video object-cover"
        />
        {duration && (
          <div className="absolute bottom-2 right-2 text-xs bg-black/80 text-white font-semibold px-1.5 py-0.5 rounded-md">
            {formatDuration(duration)}
          </div>
        )}
      </div>

      <div className="mt-2 flex gap-2 w-full">
        {!flag && (
          <div className="flex-shrink-0">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={channelDetails?.snippet?.thumbnails?.default?.url}
                alt="channel"
              />
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3
            className={`text-sm md:text-[14px] font-medium line-clamp-2 ${
              isDarkTheme ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-500 text-xs md:text-sm mt-0.5">
            {channelTitle}
          </p>
          <div className="flex items-center gap-1 text-gray-500 text-xs mt-0.5">
            <span>
              {formatViewCount(statistics?.viewCount) ||
                formatViewCount(Math.random() * 1000000)}{" "}
              views
            </span>
            <span>•</span>
            <span>{formatTimeAgo(publishedAt)}</span>
          </div>
        </div>

        {(!flag || window.innerWidth >= 768) && (
          <button className="self-start flex-shrink-0">
            <BsThreeDotsVertical
              size={20}
              color="gray"
              className="p-1 md:p-2 rounded-full hover:bg-gray-200"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
