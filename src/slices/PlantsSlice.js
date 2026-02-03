import { createSlice } from "@reduxjs/toolkit";

const plantsSlice = createSlice({
  name: "plants",
  initialState: [],
  reducers: {
    addPlant: (state, action) => {
      state.push({ name: action.payload, watered: false });
    },
    toggleWatered: (state, action) => {
      const plant = state.find((plant) => plant.name === action.payload);
      if (plant) {
        plant.watered = !plant.watered;
      }
    },
  },
});

export default plantsSlice.reducer;
export const { addPlant, toggleWatered } = plantsSlice.actions;
