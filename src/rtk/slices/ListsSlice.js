import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLists } from "../../apis/categoriesAPI";
const initialState = [];
export const FetchLists = createAsyncThunk(
  "lists/FetchLists",
  fetchLists
);
export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    clearLists: (state) => {
      return (state = []);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchLists.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});
export const { clearLists } = listsSlice.actions;
export default listsSlice.reducer;
