import React, { useEffect } from "react";
import FooterCol from "./FooterCol";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-6 w-5/6 mx-auto">
        <div className="col-span-2">
          <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
            Company
          </h2>
          <ul className="text-gray-500 dark:text-gray-400 flex md:flex-col">
            <li className="mb-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
              <Link to="/" className=" hover:underline">
                Home
              </Link>
            </li>
            <li className="mb-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
              <Link to="/movies" className=" hover:underline">
                Movies
              </Link>
            </li>
            <li className="mb-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
              <Link to="/login" className=" hover:underline">
                Log In
              </Link>
            </li>
            <li className="mb-4 flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
              <Link to="/register" className=" hover:underline">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <FooterCol />
      </div>
      <div className="py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-300 text-center ">
          © 2022 <Link to="/">EraaSoft</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
