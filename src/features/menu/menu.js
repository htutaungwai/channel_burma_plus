import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuFlag: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenuFlag: (state) => {
      state.menuFlag = !state.menuFlag;
    },
  },
});

export const { toggleMenuFlag } = menuSlice.actions;
export const getMenuState = (state) => state.menu;
export default menuSlice.reducer;
