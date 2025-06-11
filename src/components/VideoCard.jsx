import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import useChannelDetails from "../utils/useChannelDetails";

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

  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, channelId, thumbnails, title, publishedAt } = snippet;
  const channelDetails = useChannelDetails(channelId);

  const duration = contentDetails?.duration;

  return (
    <div className="cursor-pointer relative h-[240px]">
      <div className="absolute bottom-[94px]  right-4 text-[14px] bg-black/80 text-white font-semibold px-2 py-1 rounded-md">
        {formatDuration(duration)}
      </div>

      <img
        src={thumbnails?.medium?.url}
        alt={title}
        className="w-[270px] rounded-lg aspect-video object-cover "
      />

      <div className="mt-2 w-[280px] flex justify-between">
        {!flag && (
          <div className="w-[40px] h-[40px] rounded-full  mr-2 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={channelDetails?.snippet?.thumbnails?.default?.url}
              alt="channel"
            />
          </div>
        )}
        <div className="text-[14px] w-[200px] text-left">
          <p
            className="text-[14px] font-medium line-clamp-2"
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
          <p className="text-gray-500 text-sm mt-1">{channelTitle}</p>
          <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
            <span>{formatViewCount(statistics?.viewCount) || ""} views</span>

            <span>•</span>
            <span>{formatTimeAgo(publishedAt)}</span>
          </div>
        </div>
        <BsThreeDotsVertical
          size={35}
          color="gray"
          className="p-2 ml-1 rounded-full"
        />
      </div>
    </div>
  );
};

export default VideoCard;
