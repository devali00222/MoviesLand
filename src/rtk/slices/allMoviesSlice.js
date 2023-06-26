import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllMovies } from "../../apis/moviesApis";
const initialState = [];
export const fetchAllMoviesThunk = createAsyncThunk(
  "allMovies/fetchAllMoviesThunk",
  fetchAllMovies
);
export const allMoviesSlice = createSlice({
  name: "allMovies",
  initialState,
  reducers: {
    clearAllMovies: (state) => {
     return state = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMoviesThunk.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});
export const { clearAllMovies } = allMoviesSlice.actions;
export default allMoviesSlice.reducer;
