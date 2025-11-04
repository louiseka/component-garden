import { configureStore, createSlice } from "@reduxjs/toolkit";

const plantsSlice = createSlice({
  name: "plants",
  initialState: [],
  reducers: {
    addPlant: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPlant } = plantsSlice.actions;

export const store = configureStore({
  reducer: { plants: plantsSlice.reducer },
});
