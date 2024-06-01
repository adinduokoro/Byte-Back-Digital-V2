import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeOn: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    SET_DARK_MODE(state, action) {
      state.isDarkModeOn = action.payload;
      console.log(action.payload);
    },
  },
});

export const { SET_DARK_MODE } = themeSlice.actions;

export const selectIsDarkModeOn = (state) => state.theme.isDarkModeOn;

export default themeSlice.reducer;
