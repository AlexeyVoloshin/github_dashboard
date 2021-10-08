import { IDataRepo, IItems } from '../../core/components/types/ListComponent';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GET_POPULAR_REPO } from './types';
export interface RepoState {
  repo: IItems[];
}
const initialState: RepoState = {
  repo: []
};

export const sliceRepo = createSlice({
  name: GET_POPULAR_REPO,
  initialState,
  reducers: {
    addPopularRepo: (state: RepoState, action: PayloadAction<IItems[]>) => {
      state.repo = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addPopularRepo } = sliceRepo.actions;

export const repo = sliceRepo.reducer;
