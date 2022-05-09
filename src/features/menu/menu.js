import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTriggered: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isTriggered = !state.isTriggered;
    },
  },
});

export const { addMovies } = menuSlice.actions;
export const getMenuState = (state) => state.menu;
export default menuSlice.reducer;
