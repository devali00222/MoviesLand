import { baseURL } from "./fetch";
import { options } from "./fetch";

export const fetchCategories = async () => {
  const res = await fetch(`${baseURL}titles/utils/genres`, options);
  const categoriesData = await res.json();
  return categoriesData.results.filter((result) => result !== "Adult");
};
export const fetchLists = async () => {
  const res = await fetch(`${baseURL}titles/utils/lists`, options);
  const categoriesData = await res.json();
  return categoriesData.results.filter((result) => result !== "titles").map(result => result.replaceAll("_"," "));
};
