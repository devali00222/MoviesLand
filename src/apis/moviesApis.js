import { options } from "./fetch";
import { baseURL } from "./fetch";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const fetchMovies = async (title = "Action") => {
  options.url = baseURL + "titles";
  options.params = {
    info: "base_info",
    page: "1",
    limit: "12",
    titleType: "movie",
    year: "2020",
    genre: title,
  };
  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return {
    id: uuidv4(),
    title,
    movies: data.results,
  };
};
export const fetchAllMovies = async (page = "1") => {
  options.url = baseURL + "titles";
  options.params = {
    info: "base_info",
    page,
    limit: "48",
    titleType: "movie",
    list: "top_boxoffice_200",
  };
  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data.results;
};
export const fetchMoviesByGenre = async (title = "titles") => {
  options.url = baseURL + "titles";
  options.params = {
    info: "base_info",
    page: "1",
    titleType: "movie",
    year: "2020",
    genre: title,
    limit: 50,
  };
  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data.results;
};
export const fetchMoviesByRelated = async (title = "titles") => {
  options.url = baseURL + "titles";
  options.params = {
    info: "base_info",
    page: "1",
    titleType: "movie",
    genre: title,
    limit: 6,
    list: "top_boxoffice_200",
  };
  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return {
    id: uuidv4(),
    title,
    movies: data.results,
  };
};
export const fetchSingleMovie = async (id = "tt0000002") => {
  options.url = baseURL + `titles/${id}`;
  options.params = {
    info: "base_info",
  };
  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return data.results;
};
