import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import listsReducer from "./slices/ListsSlice";
import moviesReducer from "./slices/moviesSlice";
import allMoviesReducer from "./slices/allMoviesSlice";
import moviesByGenerReducer from "./slices/moviesByGenreSlice";
import moviesByRelatedGenerReducer from "./slices/moviesByRelatedGenreSlice";
import movieReducer from "./slices/singleMovieSlice";
export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    lists: listsReducer,
    movies: moviesReducer,
    allMovies: allMoviesReducer,
    moviesByGenre: moviesByGenerReducer,
    moviesByRelatedGenre: moviesByRelatedGenerReducer,
    movie: movieReducer,
  },
});
