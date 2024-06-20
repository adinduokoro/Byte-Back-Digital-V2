import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import linkReducer from "./slice/linkSlice";
import menuReducer from "./slice/menuSlice"

const rootReducer = combineReducers({
  theme: themeReducer,
  link: linkReducer,
  menu: menuReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
