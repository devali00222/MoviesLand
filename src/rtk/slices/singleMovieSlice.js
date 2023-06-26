import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSingleMovie } from "../../apis/moviesApis";
const initialState = {};
export const fetchMovieById = createAsyncThunk(
  "movie/fetchMovieById",
  fetchSingleMovie
);

export const singleMovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearMovie: (state) => {
      return (state = {});
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieById.fulfilled, (state, action) => {
      return (state = action.payload);
    });
  },
});
export const { clearMovie } = singleMovieSlice.actions;
export default singleMovieSlice.reducer;
