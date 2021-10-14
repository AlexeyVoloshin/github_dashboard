import {
  put,
  call,
  takeEvery,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { getRepositories } from "../../api";
import { AxiosResponse } from "axios";
import { IDataRepo, IItems } from "../../core/components/types/ListComponent";
import { ADD_SEARCH_FILTER, GET_POPULAR_REPO } from "./types";
import { addPopularRepo, repoError, repoLoading } from "./sliceRepo";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiGetResponse } from "../../api/types";
import { filterDataResponse } from "../../utils/filterData";
import { addSearchFilter, searchError, searchLoading } from "./sliceSearch";

interface IPropsSaga {
  search: string;
  type: string;
}

export function* fetchSearch(
  params: IPropsSaga
): Generator<
  | CallEffect<AxiosResponse<ApiGetResponse<IDataRepo>>>
  | PutEffect<PayloadAction<string>>
  | PutEffect<PayloadAction<IItems[]>>
> {
  try {
    yield put(searchLoading(true));

    const result = yield call(getRepositories, {
      q: params.search,
      sort: "stars",
    });
    if ((result as ApiGetResponse<IDataRepo>).data.items) {
      yield put(addSearchFilter(params.search));
      yield put(
        addPopularRepo(
          filterDataResponse((result as ApiGetResponse<IDataRepo>).data.items)
        )
      );
      yield put(searchLoading(false));
    }
  } catch (error) {
    yield put(searchError(error));
  }
}

export function* fetchRepo(): Generator<
  | CallEffect<AxiosResponse<ApiGetResponse<IDataRepo>>>
  | PutEffect<PayloadAction<IItems[]>>
> {
  try {
    yield put(repoLoading(true));
    const result = yield call(getRepositories, {
      page: 1,
      per_page: 10,
      q: "stars:>500",
    });
    if ((result as ApiGetResponse<IDataRepo>).data.items.length > 0) {
      yield put(
        addPopularRepo(
          filterDataResponse((result as ApiGetResponse<IDataRepo>).data.items)
        )
      );
      yield put(repoLoading(false));
    }
  } catch (error) {
    yield put(repoError(error));
  }
}

export function* MainPageSaga() {
  yield takeEvery(ADD_SEARCH_FILTER, fetchSearch);
  yield takeEvery(GET_POPULAR_REPO, fetchRepo);
}
