import React from "react";
import MovieCard from "../moviecards/MovieCard";

const SlideSection = ({ list }) => {
  const displayMovies =
    list.movies.length !== undefined
      ? list.movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      : "";
  return (
    <div className="grid grid-rows-1 gap-5 pb-3 mb-3 border-b border-gray-800 dark:border-gray-600">
      <div className="text-xl text-center md:ltr:text-left md:rtl:text-right antialiased tracking-wider underline underline-offset-8 text-gray-800 dark:text-gray-50 font-semibold">
        {list.title}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-5 gap-x-3">
        {displayMovies}
      </div>
    </div>
  );
};

export default SlideSection;
