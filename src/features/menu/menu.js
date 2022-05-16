import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenuFlag: false,
  menuFlag: false,
  languageFlag: false,
  themeFlag: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenuFlag: (state) => {
      console.log("triggered");
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
    toggleMobileMenuFlag: (state) => {
      state.mobileMenuFlag = !state.mobileMenuFlag;
      return state;
    },
  },
});

export const {
  toggleMenuFlag,
  toggleLanguageFlag,
  toggleThemeFlag,
  toggleMobileMenuFlag,
} = menuSlice.actions;
export const getMenuState = (state) => state.menu;
export default menuSlice.reducer;
