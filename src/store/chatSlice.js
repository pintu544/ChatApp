import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
   
  ],
  user: { id: "user1", name: "Pintu Kumar" }, 
};

const mockReplies = [
  { user: "Jane Doe", content: "Hello,how are you" },
  { user: "Jane Doe", content: "I'm also good?" },
  { user: "Jane Doe", content: "Let's connect." },
];

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
        timestamp: new Date().toISOString(),
      });
    },
    receiveMessage: (state) => {
      const randomReply =
        mockReplies[Math.floor(Math.random() * mockReplies.length)];
      state.messages.push({
        ...randomReply,
        timestamp: new Date().toISOString(),
      });
    },
  },
});

export const sendMessageAndReceiveReply =
  (messageContent) => (dispatch, getState) => {
    const { user } = getState().chat;
    dispatch(sendMessage({ user: user.name, content: messageContent }));

    setTimeout(() => {
      dispatch(receiveMessage());
    }, 2000);
  };

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
