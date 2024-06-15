import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import linkReducer from "./slice/linkSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  link: linkReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
