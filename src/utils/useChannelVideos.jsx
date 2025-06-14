import React from "react";
import { useState, useEffect } from "react";

const useChannelVideos = (channelId) => {
  const [channelVideos, setChannelVideos] = useState(null);

  useEffect(() => {
    const getChannelVideos = async () => {
      if (!channelId) return;

      try {
        const response = await fetch(`
https://www.googleapis.com/youtube/v3/search?key=AIzaSyBkXFg7v4Bc7MCn7Pj7KUc-DFpYk1a9JEs&channelId=${channelId}&part=snippet,id&order=date&maxResults=40`);
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
