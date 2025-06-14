import { useState, useEffect } from "react";
import { fetchWithKeyRotation } from "./Contants";

const useChannelDetails = (channelId) => {
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    const getChannelDetails = async () => {
      if (!channelId) return;

      try {
        const json = await fetchWithKeyRotation(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=`
        );
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
