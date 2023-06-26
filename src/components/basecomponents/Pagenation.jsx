import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllMoviesThunk, clearAllMovies } from "../../rtk/slices/allMoviesSlice";
const Pagenation = ({ index }) => {
  let numbers = [];
  for (let index = 1; index <= 5; index++) {
    numbers.push(index);
  }
  const dispatch = useDispatch()
  const handelPage = (number) => {
    console.log(number);
    dispatch(clearAllMovies());
    dispatch(fetchAllMoviesThunk(number));
  };
  return (
    numbers.map((number) => (
      <span
        onClick={() => {
          handelPage(number);
        }}
        key={number}
      >
        <Pagenation index={number} />
      </span>
    ))
  );
};

export default Pagenation;
