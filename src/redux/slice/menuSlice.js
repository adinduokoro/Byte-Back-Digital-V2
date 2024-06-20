import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isMenuOpen: false,
}

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    SET_MENU_TOGGLE(state, action) {
        state.isMenuOpen = action.payload
    }
  }
});

export const {SET_MENU_TOGGLE} = menuSlice.actions

export const selectIsMenuOpen = (state) => state.menu.isMenuOpen

export default menuSlice.reducer