import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
      <li>
        <Link
          to="/login"
          className="block py-2 ltr:pr-3 rtl:pl-3 md:ltr:pr-4 md:rtl:pl-4 hover:bg-transparent md:p-0 text-red-400 md:hover:text-white hover:text-white"
        >
          LogIn
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="block py-2 md:ltr:pr-4 md:rtl:pl-4  md:hover:bg-transparent  md:p-0 text-gray-50 md:hover:text-red-400  hover:text-red-400"
        >
          SignUp
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
