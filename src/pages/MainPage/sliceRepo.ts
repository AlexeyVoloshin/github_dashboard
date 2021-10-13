import { IItems } from "../../core/components/types/ListComponent";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GET_POPULAR_REPO, RepoState } from "./types";

const initialState: RepoState = {
  isLoading: false,
  error: "",
  repo: [],
};

export const sliceRepo = createSlice({
  name: GET_POPULAR_REPO,
  initialState,
  reducers: {
    addPopularRepo: (state: RepoState, action: PayloadAction<IItems[]>) => {
      state.repo = action.payload;
    },
    repoLoading: (state: RepoState, action) => {
      state.isLoading = action.payload;
    },
    repoError: (state: RepoState, action) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPopularRepo, repoLoading, repoError } = sliceRepo.actions;

export const repo = sliceRepo.reducer;
