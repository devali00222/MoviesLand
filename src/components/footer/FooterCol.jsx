import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";


const FooterCol = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div className="col-span-4">
      <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
        Genres
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 grid grid-cols-3 md:grid-cols-4">
        {categories.map((category) => {
          return category !== null ? (
            <Link to={`/${category}`} className=" hover:underline" key={category}>
              <li className="mb-4 flex items-center text-sm p-2 font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 overflow-hidden">
                {category}
              </li>
            </Link>
          ) : (
            ""
          );
        })}
      </ul>
    </div>
  );
};

export default FooterCol;
