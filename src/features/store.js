import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menu";
import messengerReducer from "./messenger/messenger";
import feedReducer from "./feed/feed";
import insightReducer from "./feed/insight";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    messenger: messengerReducer,
    feed: feedReducer,
    insight: insightReducer,
    search: searchReducer,
  },
});
