import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Chats from "./Chats";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/liveChatSlice";
import { generateName, randomMessages } from "../utils/helper";
import { MdOutlineSend } from "react-icons/md";

const LiveChat = () => {
  const [showChats, setShowChats] = useState(false);
  const toggleChat = () => setShowChats(!showChats);
  const [liveMessages, setLiveMessages] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showChats) {
      const timer = setInterval(() => {
        dispatch(
          addChat({
            name: generateName(),
            message: randomMessages(),
          })
        );
      }, 1500);
      return () => clearInterval(timer);
    }
  }, [dispatch, showChats]);

  return (
    <div className="w-full mb-1 md:mb-3">
      <div className="flex justify-between items-center text-base md:text-[18px] font-semibold bg-gray-200 py-2 px-2.5 rounded-[5px] mb-1.5">
        <span className="cursor-pointer" onClick={toggleChat}>
          Live Chats
        </span>
        <span onClick={toggleChat}>
          {showChats ? (
            <MdOutlineKeyboardArrowUp
              size={25}
              className="md:size-[25px] cursor-pointer"
            />
          ) : (
            <MdOutlineKeyboardArrowDown
              size={25}
              className="md:size-[25px] cursor-pointer"
            />
          )}
        </span>
      </div>
      {showChats && (
        <div>
          <div className="bg-gray-100 h-[200px] md:h-[290px] pt-2 pb-1 px-2.5 rounded-t-[5px] overflow-y-scroll [&::-webkit-scrollbar]:hidden flex flex-col-reverse">
            {chatMessages.map((c, index) => (
              <Chats key={index} name={c.name} message={c.message} />
            ))}
          </div>
          <form
            className="flex bg-gray-100 pb-3 px-3 rounded-b-[5px]"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addChat({
                  name: "KaushalKishore",
                  message: liveMessages,
                })
              );
              setLiveMessages("");
            }}
          >
            <input
              type="text"
              className="outline-none border-b-2 border-gray-300 text-xs md:text-[14px] w-[85%] mr-3 md:mr-5"
              placeholder="Say something..."
              value={liveMessages}
              onChange={(e) => setLiveMessages(e.target.value)}
            />
            <MdOutlineSend
              size={20}
              className="md:size-[25px] cursor-pointer text-gray-600"
              onClick={() => {
                dispatch(
                  addChat({
                    name: "KaushalKishore",
                    message: liveMessages,
                  })
                );
                setLiveMessages("");
              }}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
