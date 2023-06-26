import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies } from "../../apis/moviesApis";
const initialState = [];
export const fetchMoviesThunk = createAsyncThunk(
  "movies/fetchMoviesThunk",
  fetchMovies
);
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMovies: (state) => {
     return state = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesThunk.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});
export const { clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
