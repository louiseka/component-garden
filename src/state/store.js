import { configureStore } from "@reduxjs/toolkit";

import plantsReducer from "../slices/PlantsSlice";

export const store = configureStore({
  reducer: { plants: plantsReducer },
});
