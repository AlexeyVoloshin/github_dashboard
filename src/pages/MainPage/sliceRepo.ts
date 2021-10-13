import { IItems } from "../../core/components/types/ListComponent";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GET_POPULAR_REPO } from "./types";
export interface RepoState {
  wait: boolean;
  isLoading: boolean;
  success: boolean;
  error: string;
  repo: IItems[];
}
const initialState: RepoState = {
  wait: true,
  isLoading: false,
  success: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { addPopularRepo, repoLoading } = sliceRepo.actions;

export const repo = sliceRepo.reducer;
