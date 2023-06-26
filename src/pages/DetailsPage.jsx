import React, { useEffect } from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { fetchMovieById, clearMovie } from "../rtk/slices/singleMovieSlice";
import { clearMoviesRelated } from "../rtk/slices/moviesByRelatedGenreSlice";
import BreadCramp from "../components/detailsPage/BreadCramp";
import MovieDetailsSection from "../components/detailsPage/MovieDetailsSection";
import RelatedSection from "../components/detailsPage/RelatedSection";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const moveToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    dispatch(clearMovie());
  }, []);
  useEffect(() => {
    dispatch(clearMoviesRelated());
    dispatch(fetchMovieById(id.replaceAll(":", "")));
    moveToTop();
  }, [id]);
  return (
    <div className="grid grid-cols-7 md:gap-x-4">
      <div className="md:col-span-1">
        {/* sidemenu comp */}
        <SideMenu />
      </div>
      <div className="col-span-7 md:col-span-6 px-2 md:ltr:pl-5 md:rtl:pr-5 pt-5">
        <div className="col-span-7 md:col-span-6">
          <BreadCramp />
        </div>
        <div className="col-span-7 md:col-span-6">
          <MovieDetailsSection />
        </div>
        <div className="col-span-7 md:col-span-6 py-10">
          <RelatedSection />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
