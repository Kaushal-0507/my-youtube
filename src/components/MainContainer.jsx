import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className={`p-1.5 max-w-full ${isMenuOpen ? "ml-[83px]" : ""}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
