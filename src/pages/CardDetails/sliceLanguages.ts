import { ILanguages } from "../../core/components/types/ListComponent";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GET_LANGUAGE, LanguagesState } from "./types";

const initialState: LanguagesState = {
  isLoading: false,
  error: "",
  languages: {},
};

export const sliceLanguages = createSlice({
  name: GET_LANGUAGE,
  initialState,
  reducers: {
    addLanguages: (
      state: LanguagesState,
      action: PayloadAction<ILanguages>
    ) => {
      state.languages = action.payload;
    },
    changeLangIsLoading: (
      state: LanguagesState,
      action: PayloadAction<boolean>
    ) => {
      state.isLoading = action.payload;
    },
    addLangError: (state: LanguagesState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addLanguages, changeLangIsLoading, addLangError } =
  sliceLanguages.actions;

export const languages = sliceLanguages.reducer;
