import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="text-2xl text-gray-50 p-0 m-0 font-extrabold">
      Movies<span className="text-red-700">Land</span>
    </Link>
  );
};

export default Logo;
