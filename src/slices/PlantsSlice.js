import { createSlice } from "@reduxjs/toolkit";

const plantsSlice = createSlice({
  name: "plants",
  initialState: [],
  reducers: {
    addPlant: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default plantsSlice.reducer;
export const { addPlant } = plantsSlice.actions;
