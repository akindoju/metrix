import { combineReducers, configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/generalSlice";

const rootReducer = combineReducers({
  general: generalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
