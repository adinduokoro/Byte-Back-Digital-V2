import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeOn: JSON.parse(localStorage.getItem("themeMode")) || false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    SET_DARK_MODE(state, action) {
      state.isDarkModeOn = action.payload;
      localStorage.setItem("themeMode", JSON.stringify(state.isDarkModeOn))
    },
  },
});

export const { SET_DARK_MODE } = themeSlice.actions;

export const selectIsDarkModeOn = (state) => state.theme.isDarkModeOn;

export default themeSlice.reducer;
