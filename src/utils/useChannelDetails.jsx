import { useState, useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "./Contants";

const useChannelDetails = (channelId) => {
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    const getChannelDetails = async () => {
      if (!channelId) return;

      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${GOOGLE_API_KEY}`
        );
        const json = await response.json();
        setChannelDetails(json.items?.[0] || null);
      } catch (error) {
        console.error("Error fetching channel details:", error);
        setChannelDetails(null);
      }
    };

    getChannelDetails();
  }, [channelId]);

  return channelDetails;
};

export default useChannelDetails;
