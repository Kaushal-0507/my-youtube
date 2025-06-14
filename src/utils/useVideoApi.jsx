import { useState, useEffect } from "react";
import { fetchWithKeyRotation } from "../utils/Contants";

const useVideoApi = () => {
  const [videoLists, setVideoLists] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const json = await fetchWithKeyRotation(
          "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="
        );
        setVideoLists(json?.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideoLists([]);
      }
    };

    getVideos();
  }, []);

  return videoLists;
};

export default useVideoApi;
