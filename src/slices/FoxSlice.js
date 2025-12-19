import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRandomFoxImg = createAsyncThunk(
  "fox/fetchRandomFox",
  async () => {
    const res = await fetch("https://randomfox.ca/floof/");
    return await res.json();
  }
);

const foxSlice = createSlice({
  name: "fox",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomFoxImg.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRandomFoxImg.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchRandomFoxImg.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default foxSlice.reducer;
