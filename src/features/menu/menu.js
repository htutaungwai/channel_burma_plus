import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuFlag: false,
  languageFlag: false,
  themeFlag: false,
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
      state.languageFlag = !state.languageFlag;
      return state;
    },
    toggleThemeFlag: (state) => {
      state.themeFlag = !state.themeFlag;
      return state;
    },
  },
});

export const { toggleMenuFlag, toggleLanguageFlag, toggleThemeFlag } =
  menuSlice.actions;
export const getMenuState = (state) => state.menu;
export default menuSlice.reducer;
