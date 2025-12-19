import { configureStore } from "@reduxjs/toolkit";

import plantsReducer from "../slices/PlantsSlice";
import foxReducer from "../slices/FoxSlice";

export const store = configureStore({
  reducer: {
    plants: plantsReducer,
    fox: foxReducer,
  },
});
