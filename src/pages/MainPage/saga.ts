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
import { addPopularRepo, repoLoading } from "./sliceRepo";
import { PayloadAction } from "@reduxjs/toolkit";
import { ApiGetResponse } from "../../api/types";
import { filterDataResponse } from "../../utils/filterDataResponce";
import { addSearchFilter } from "./slice";

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
    const result = yield call(getRepositories, {
      q: params.search,
    });

    yield put(addSearchFilter(params.search));

    yield put(
      addPopularRepo(
        filterDataResponse((result as ApiGetResponse<IDataRepo>).data.items)
      )
    );
  } catch (e) {
    console.error("error: ", e);
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
  } catch (e) {
    console.error(e);
  }
}

export function* helloSaga() {
  yield takeEvery(ADD_SEARCH_FILTER, fetchSearch);
  yield takeEvery(GET_POPULAR_REPO, fetchRepo);
}
