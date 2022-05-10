import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuFlag: false,
  languageFlag: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenuFlag: (state) => {
      state.menuFlag = !state.menuFlag;
      return state;
    },
    toggleLanguageFlag: (state) => {
      state.language = !state.language;
      return state;
    },
  },
});

export const { toggleMenuFlag, toggleLanguageFlag } = menuSlice.actions;
export const getMenuState = (state) => state.menu;
export default menuSlice.reducer;
