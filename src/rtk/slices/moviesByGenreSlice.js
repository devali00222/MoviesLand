import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMoviesByGenre } from "../../apis/moviesApis";
const initialState = [];
export const fetchMoviesByGenreThunk = createAsyncThunk(
  "moviesByGenre/fetchMoviesByGenreThunk",
  fetchMoviesByGenre
);

export const moviesByGenerSlice = createSlice({
  name: "moviesByGenre",
  initialState,
  reducers: {
    clearMovies: (state) => {
      return (state = []);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesByGenreThunk.fulfilled, (state, action) => {
      
      return (state = action.payload);
    });
  },
});
export const { clearMovies } = moviesByGenerSlice.actions;
export default moviesByGenerSlice.reducer;
