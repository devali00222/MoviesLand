import React, { useEffect } from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import { useSelector, useDispatch } from "react-redux";

import { fetchMoviesByGenreThunk } from "../rtk/slices/moviesByGenreSlice";
import { useParams } from "react-router-dom";
import MovieCard from "../components/moviecards/MovieCard";
const CategoryPage = () => {
  const dispatch = useDispatch();
  const { gener } = useParams();

  useEffect(() => {
    dispatch(fetchMoviesByGenreThunk(gener, 1));
  }, [gener]);
  const list = useSelector((state) => state.moviesByGenre);

  return (
    <div className="grid grid-cols-7 md:gap-x-4">
      <div className="md:col-span-1">
        {/* sidemenu comp */}
        <SideMenu />
      </div>
      <div className="col-span-7 md:col-span-6 px-2 md:ltr:pl-5 md:rtl:pr-5 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-1">
          {list.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
