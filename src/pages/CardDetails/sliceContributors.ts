import { IOwner } from "../../core/components/types/ListComponent";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContributorsState, GET_CONTRIBUTORS } from "./types";

const initialState: ContributorsState = {
  isLoading: false,
  error: "",
  contributors: [],
};

export const sliceContributors = createSlice({
  name: GET_CONTRIBUTORS,
  initialState,
  reducers: {
    addContributors: (
      state: ContributorsState,
      action: PayloadAction<IOwner[]>
    ) => {
      state.contributors = action.payload;
    },
    changeContributorIsLoading: (
      state: ContributorsState,
      action: PayloadAction<boolean>
    ) => {
      state.isLoading = action.payload;
    },
    addContributorError: (
      state: ContributorsState,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addContributors,
  changeContributorIsLoading,
  addContributorError,
} = sliceContributors.actions;

export const contributors = sliceContributors.reducer;
