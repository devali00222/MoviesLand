import React from "react";
import SideMenu from "../components/sidemenu/SideMenu";
import SlideSection from "../components/slideSiction/SlideSection";
import { useSelector } from "react-redux/es/exports";
const HomePage = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="grid grid-cols-7 gap-x-4">
      <div className="md:col-span-1">
        {/* sidemenu comp */}
        <SideMenu />
      </div>
      <div className="col-span-7 md:col-span-6 px-2 md:ltr:pl-5 md:rtl:pr-5 pt-5">
        {movies.map((list) => (
          <SlideSection list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
