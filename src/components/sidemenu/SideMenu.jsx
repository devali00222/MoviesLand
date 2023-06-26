import React, { useEffect } from "react";
import CategoryLink from "./CategoryLink";

import { fetchMoviesThunk, clearMovies } from "../../rtk/slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const SideMenu = () => {
  const dispatch = useDispatch();
  // getting categories from store
  const categories = useSelector((state) => state.categories);

  // function to display categories in ui

  return (
    <div className=" hidden md:block md:w-full h-full min-h-screen py-4 px-3 bg-gray-300 ltr:rounded-r rtl:rounded-l dark:bg-gray-800">
      <ul className="space-y-2">
        {categories.map((category) => {
          return category !== null ? (
            <CategoryLink category={category} key={uuidv4()} />
          ) : (
            ""
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
