import { useState, useEffect } from "react";

const useChannelDetails = (channelId) => {
  const [channelDetails, setChannelDetails] = useState(null);

  useEffect(() => {
    const getChannelDetails = async () => {
      if (!channelId) return;

      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyCshVDz21sjGp0jrVc3FNY5PjVYXXGdXno`
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
