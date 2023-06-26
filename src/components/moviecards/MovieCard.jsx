import React, { useEffect } from "react";
import EmptyStar from "./ratingStars/EmptyStar";
import FillStar from "./ratingStars/FillStar";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const runTimeHandler = () => {
    let time = new Date(0);
    if (movie.runtime !== null) {
      time.setSeconds(7500);
      return time.toISOString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    }
  };

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
  useEffect(() => {
    ratingHandler();
  }, []);

  return (
    <div className="bg-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 p-3">
      <Link to={`/movies/:${movie.id}`}>
        <div className="rounded-lg overflow-hidden drop-shadow-md shadow-md shadow-black relative h-full">
          <img
            src={
              movie.primaryImage !== null
                ? movie.primaryImage.url
                : "https://via.placeholder.com/350x500"
            }
            alt=""
            className="h-full"
          />
          <div className="absolute inset-x-0 bottom-0 -top-32 bg-gradient-to-t from-black opacity-0 hover:opacity-100  rounded-t-sm flex flex-col justify-end text-center pb-1 translate-y-32 hover:translate-y-0 transition gap-y-1">
            <span className="text-sm font-bold">{movie.titleText.text}</span>
            <span className="flex items-center justify-center gap-x-1">
              {movie.ratingsSummary.aggregateRating !== null
                ? ratingHandler().map((star) => star)
                : "N/A"}
            </span>
            <span className="flex justify-between px-2">
              <span>{movie.releaseYear ? movie.releaseYear.year : ""}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
