import { createSlice } from "@reduxjs/toolkit";
import { readFilterSearch } from "../../utils/localStore";
import { ADD_SEARCH_FILTER, IInitialState } from "./types";

const initialState: IInitialState = {
  isLoading: false,
  error: "",
  search_filter: readFilterSearch(),
};

export const sliceSearch = createSlice({
  name: ADD_SEARCH_FILTER,
  initialState,
  reducers: {
    addSearchFilter: (state, action) => {
      state.search_filter = action.payload;
    },
    searchLoading: (state: IInitialState, action) => {
      state.isLoading = action.payload;
    },
    searchError: (state: IInitialState, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSearchFilter, searchError, searchLoading } =
  sliceSearch.actions;

export const search_filter = sliceSearch.reducer;
