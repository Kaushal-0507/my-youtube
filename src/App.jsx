import "./App.css";
import React, { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Sidebar from "./components/Sidebar";
import ChannelPage from "./components/ChannelPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "channel",
          element: <ChannelPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className=" text-2xl">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
