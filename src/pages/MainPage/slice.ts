import { createSlice } from '@reduxjs/toolkit';
import { ADD_SEARCH_FILTER, IInitialState } from './types';

const initialState: IInitialState = {
  search_filter: ''
};

export const slice = createSlice({
  name: ADD_SEARCH_FILTER,
  initialState,
  reducers: {
    addSearchFilter: (state, action) => {
      state.search_filter = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addSearchFilter } = slice.actions;

export const search_filter = slice.reducer;
