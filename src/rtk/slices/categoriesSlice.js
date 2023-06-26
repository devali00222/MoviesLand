import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../../apis/categoriesAPI";
const initialState = [];
export const FetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  fetchCategories
);
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    clearCategories: (state) => {
      return (state = []);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchCategories.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});
export const { clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
