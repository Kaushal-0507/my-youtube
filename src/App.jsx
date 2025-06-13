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
import SearchVidResult from "./components/SearchVidResult";
import SignInRequired from "./components/SignInRequired";

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
        {
          path: "search",
          element: <SearchVidResult />,
        },
        {
          path: "/signin",
          element: <SignInRequired />,
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
