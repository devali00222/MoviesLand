import React, { useEffect } from "react";
import SlideSection from "../slideSiction/SlideSection";

import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByRelatedGenreThunk, clearMoviesRelated } from "../../rtk/slices/moviesByRelatedGenreSlice";

const RelatedSection = () => {
  const movie = useSelector((state) => state.movie);
  const movies = useSelector((state) => state.moviesByRelatedGenre);
  console.log(movies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (movie.genres !== undefined) {
      movie.genres.genres.map((genre) => {
        dispatch(fetchMoviesByRelatedGenreThunk(genre.text));
        return null
      });
    }
  }, [movie]);
  useEffect(() => {
    dispatch(clearMoviesRelated())
  },[])
  return <div>
    {movies.length > 0 ? movies.map(list => <SlideSection list={list} key={list.id}/>) : ""}
  </div>;
};

export default RelatedSection;
