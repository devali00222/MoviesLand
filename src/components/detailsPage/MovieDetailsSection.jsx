import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EmptyStar from "../moviecards/ratingStars/EmptyStar";
import FillStar from "../moviecards/ratingStars/FillStar";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const MovieDetailsSection = () => {
  const movie = useSelector(state => state.movie)
  const ratingHandler = () => {
    let stars = [];
    const totalRatings = 5;
    const filmRate = movie.ratingsSummary.aggregateRating / 2;
    for (let i = 0; i < Math.floor(filmRate); i++) {
      stars.push(
        <span key={uuidv4()}>
          <FillStar />
        </span>
      );
    }
    for (let i = 0; i < totalRatings - Math.floor(filmRate); i++) {
      stars.push(
        <span key={uuidv4()}>
          <EmptyStar />
        </span>
      );
    }
    return stars;
  };

  const runTimeHandler = () => {
    let time = new Date(0);
    if (movie.runtime !== null) {
      time.setSeconds(movie.runtime.seconds);
      return time.toISOString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }
  };

  const movieCheck = () => {
    if (movie.id !== undefined) {
      ratingHandler();
      return (
        <div className="grid grid-cols-2 mt-5 gap-x-3 ltr:pr-3 rtl:pl-3">
          <div className="rounded-lg overflow-hidden drop-shadow-md shadow-md shadow-black relative">
            <img
              src={movie.primaryImage.url}
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className=" p-5 overflow-hidden drop-shadow-md relative flex flex-col gap-y-7">
            <h2 className="text-4xl text-black dark:text-gray-50 font-bold tracking-wide">
              {movie.titleText.text}
            </h2>
            <div className="flex flex-col gap-2">
              <span className="flex gap-x-1">
                {movie.ratingsSummary.aggregateRating !== null
                  ? ratingHandler().map((star) => star)
                  : "N/A"}
              </span>
              <p className="text-sm">
                Votes:{" "}
                {movie.ratingsSummary.aggregateRating !== null
                  ? movie.ratingsSummary.voteCount
                  : "N/A"}
              </p>
              <p>{runTimeHandler()}</p>
            </div>
            <div className="flex items-start ">
              {movie.genres.genres.map((genre) => (
                <Link
                  to={`/${genre.text}`}
                  key={genre.text}
                  className="bg-gray-500 dark:bg-gray-400 text-black dark:text-gray-50 px-3 py-1 m-2 rounded-md flex items-center hover:bg-black hover:text-gray-50 dark:hover:bg-black"
                >
                  {genre.text}
                </Link>
              ))}
            </div>

            <p className="text-lg tracking-wide my-3">
              {movie.plot ? movie.plot.plotText.plainText : ""}
            </p>

            <div>
              <p>
                Language :
                <span className="text-sm px-2 py-1">
                  {movie.plot ? movie.plot.language.id : ""}
                </span>
              </p>
              <p>
                Releas Year :
                <span className="text-sm px-2 py-1">
                  {movie.releaseYear.year}
                </span>
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
  return <>{movieCheck()}</>;
};
export default MovieDetailsSection;
