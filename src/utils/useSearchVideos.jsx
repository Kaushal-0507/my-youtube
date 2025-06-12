import React from "react";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "./Contants";

const useSearchVideos = (keyword) => {
  const [searchVideos, setSearchVideos] = useState(null);

  useEffect(() => {
    const getSearchVideos = async () => {
      if (!keyword) return;

      try {
        const response = await fetch(`
  https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=${GOOGLE_API_KEY}`);
        const json = await response.json();
        setSearchVideos(json.items || null);
      } catch (error) {
        console.error("Error fetching channel details:", error);
        setChannelDetails(null);
      }
    };

    getSearchVideos();
  }, [keyword]);
  return searchVideos;
};

export default useSearchVideos;
