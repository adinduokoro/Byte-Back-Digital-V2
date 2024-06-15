import { createSlice } from "@reduxjs/toolkit";
import { navLinks } from "../../components/navigation/data";

const initialState = {
  currentPath: "",
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    SET_CURRENT_PATH(state, action) {
      const link = navLinks.find(
        (link) => link.name.toLowerCase() === action.payload
      );
      state.currentPath = link.header;
    },
  },
});

export const { SET_CURRENT_PATH } = linkSlice.actions;

export const selectCurrentPath = (state) => state.link.currentPath;

export default linkSlice.reducer;
