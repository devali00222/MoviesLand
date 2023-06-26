import React, { useEffect } from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../components/moviecards/MovieCard";
import Pagenation from "../components/basecomponents/Pagenation";
import { fetchAllMoviesThunk, clearAllMovies } from "../rtk/slices/allMoviesSlice";

const MoviesPage = () => {
  const movies = useSelector((state) => state.allMovies);
  const dispatch = useDispatch();
  console.log(movies);
  const moviesCheck = () =>
    movies.length > 0
      ? movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      : "";
  
  const handelPage = (number) => {
    console.log(number);
    dispatch(clearAllMovies());
    dispatch(fetchAllMoviesThunk(number));
  };
  return (
    <div className="grid grid-cols-7 md:gap-x-4">
      <div className="md:col-span-1">
        {/* sidemenu comp */}
        <SideMenu />
      </div>
      <div className="col-span-7 md:col-span-6 px-2 md:ltr:pl-5 md:rtl:pr-5 pt-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-1">
          {moviesCheck()}
        </div>
        <ul className="inline-flex -space-x-px my-5">
          <li>
            <button className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"onClick={() => {
              handelPage(1)
            }}>
              Previous
            </button>
          </li>
          <li>
            <button className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => {
              handelPage(2)
            }}>
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoviesPage;
