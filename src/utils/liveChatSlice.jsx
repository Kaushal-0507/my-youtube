import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./Contants";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
