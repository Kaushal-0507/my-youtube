import React from "react";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "./Contants";

const useChannelVideos = (channelId) => {
  const [channelVideos, setChannelVideos] = useState(null);

  useEffect(() => {
    const getChannelVideos = async () => {
      if (!channelId) return;

      try {
        const response = await fetch(`
https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=40`);
        const json = await response.json();
        setChannelVideos(json.items || null);
      } catch (error) {
        console.error("Error fetching channel details:", error);
        setChannelDetails(null);
      }
    };

    getChannelVideos();
  }, [channelId]);
  return channelVideos;
};

export default useChannelVideos;
