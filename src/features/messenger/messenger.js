import { createSlice, nanoid } from "@reduxjs/toolkit";
import QAs from "../../utilities/QandA";
const initialState = {
  messages: [
    {
      id: nanoid(),
      message:
        "Welcome to Channel Burma plus. Click the button if there anything you want to know or directly contact us by phone.",
      reply: true,
    },
  ],
  messageLoading: false,
};

const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    setMessage: {
      reducer(state, action) {
        state.messages.push(action.payload);
      },

      prepare(questionID, reply) {
        const foundItem = QAs.find((item) => item.id === questionID);
        return {
          payload: {
            id: nanoid(),
            message: reply ? foundItem.answer : foundItem.question,
            reply,
          },
        };
      },
    },

    setLoading: {
      reducer(state, action) {
        state.messageLoading = action.payload;
      },
    },
  },
});

export const { setMessage, setLoading } = messengerSlice.actions;
export const getMessengerState = (state) => state.messenger;
export default messengerSlice.reducer;
