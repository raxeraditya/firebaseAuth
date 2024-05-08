import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
  name: "messages",
  initialState: {
    messages: null,
  },
  reducers: {
    setMessages: (state, actions: PayloadAction) => {},
  },
});
