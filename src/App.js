import "./App.css";
// routes and stored data
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// pages
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";

// base components
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import CategoryPage from "./pages/CategoryPage";

// import slices
import { FetchCategories, clearCategories } from "./rtk/slices/categoriesSlice";
import { fetchMoviesThunk, clearMovies } from "./rtk/slices/moviesSlice";
import {
  fetchAllMoviesThunk,
  clearAllMovies,
} from "./rtk/slices/allMoviesSlice";
import { useEffect } from "react";
import MoviesPage from "./pages/MoviesPage";
import DetailsPage from "./pages/DetailsPage";
function App() {
  const dispatch = useDispatch();
  // sidemenue categories
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    // categories setting in store
    dispatch(clearCategories());
    // fetching categories api
    dispatch(FetchCategories());
    dispatch(clearAllMovies())
    dispatch(fetchAllMoviesThunk())
  }, []);

  useEffect(() => {
    dispatch(clearMovies());
    // fetching homepage slides data
    categories.map((title) =>
      title === "Action" ||
      title === "Adventure" ||
      title === "Comedy" ||
      title === "Family"
        ? dispatch(fetchMoviesThunk(title))
        : ""
    );
  }, [categories]);
  return (
    <div className="App bg-white dark:bg-gray-900 text-gray-300">
      <div className="grid grid-cols-6">
        {/* navbar */}
        <div className="col-span-6">
          <NavBar />
        </div>
        {/* changed page */}
        <div className="col-span-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:gener" element={<CategoryPage />} />
            <Route path="/movies/:id" element={<DetailsPage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>

        {/* footer */}
        <div className="col-span-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
