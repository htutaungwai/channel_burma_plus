import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu/menu";

export const store = configureStore({
  reducer: { menu: menuReducer },
});
