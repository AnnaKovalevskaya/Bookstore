import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories-slice";


export const store = configureStore({
  reducer: {
    categories: categoriesSlice,

  },

  devTools: true,
});
