import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMoviesByRelated } from "../../apis/moviesApis";
const initialState = [];

export const fetchMoviesByRelatedGenreThunk = createAsyncThunk(
  "moviesByRelatedGenre/fetchMoviesByRelatedGenreThunk",
  fetchMoviesByRelated
);
export const moviesByRelatedGenreSlice = createSlice({
  name: "moviesByRelatedGenre",
  initialState,
  reducers: {
    clearMoviesRelated: (state) => {
      state = [];
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchMoviesByRelatedGenreThunk.fulfilled,
      (state, action) => {
        state.push(action.payload);
      }
    );
  },
});
export const { clearMoviesRelated } = moviesByRelatedGenreSlice.actions;
export default moviesByRelatedGenreSlice.reducer;
