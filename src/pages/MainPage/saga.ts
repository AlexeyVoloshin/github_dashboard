import {
  put,
  call,
  takeEvery,
  CallEffect,
  PutEffect
} from 'redux-saga/effects';
import { getAllRepo, getPopularRepo } from '../../api';
import { AxiosResponse } from 'axios';
import {
  IDataRepo,
  IItems,
  IPropsList,
  IResponceData
} from '../../core/components/types/ListComponent';
import { ADD_SEARCH_FILTER, GET_POPULAR_REPO } from './types';
import { getRepoSuccess, ITEST } from '../../core/actionCreators';
import { addPopularRepo } from './sliceRepo';
import { PayloadAction } from '@reduxjs/toolkit';
import { ApiGetResponse } from '../../api/types';

export function* fetchUser(): Generator<CallEffect<AxiosResponse<IPropsList>>> {
  try {
    const result = yield call(getAllRepo);
    // yield put(setUser(user));
  } catch (e) {
    console.error('erro');
  }
}

export function* feathRepo(): Generator<
  | CallEffect<AxiosResponse<ApiGetResponse<IResponceData>>>
  | PutEffect<PayloadAction<IItems[]>>
> {
  try {
    const result = yield call(getPopularRepo, {
      page: 1,
      per_page: 10,
      q: 'stars:>500'
    });
    yield put(addPopularRepo((result as IResponceData).data.items));
  } catch (e) {
    console.error(e);
  }
}

export function* helloSaga() {
  yield takeEvery(ADD_SEARCH_FILTER, fetchUser);
  yield takeEvery(GET_POPULAR_REPO, feathRepo);
}
