import { useState, useEffect } from "react";
import { fetchWithKeyRotation } from "./Contants";

const useSearchVideos = (keyword) => {
  const [searchVideos, setSearchVideos] = useState(null);

  useEffect(() => {
    const getSearchVideos = async () => {
      if (!keyword) return;

      try {
        const json = await fetchWithKeyRotation(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyword}&type=video&key=`
        );
        setSearchVideos(json.items || null);
      } catch (error) {
        console.error("Error fetching search videos:", error);
        setSearchVideos(null);
      }
    };

    getSearchVideos();
  }, [keyword]);

  return searchVideos;
};

export default useSearchVideos;
