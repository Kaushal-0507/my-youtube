import React from "react";
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../utils/Contants";

const useVideoApi = () => {
  const [videoLists, setVideoLists] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideoLists(json?.items);
    console.log(json?.items);
  };

  return videoLists;
};

export default useVideoApi;
