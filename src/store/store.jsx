import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/savedSlice";

export const store = configureStore({
  reducer: {
    reducer,
  },
});
