import {
  put,
  call,
  takeEvery,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import { getAllContributors, getLanguages } from "../../api";
import { AxiosResponse } from "axios";
import {
  IContributors,
  ILanguages,
  IOwner,
} from "../../core/components/types/ListComponent";

import { PayloadAction } from "@reduxjs/toolkit";
import { ApiGetResponse } from "../../api/types";
import { filterDataContributors } from "../../utils/filterData";
import { GET_CONTRIBUTORS, GET_LANGUAGE } from "./types";
import {
  addContributors,
  addContributorError,
  changeContributorIsLoading,
} from "./sliceContributors";
import { IPropsSaga } from "../../core/types";
import {
  addLangError,
  addLanguages,
  changeLangIsLoading,
} from "./sliceLanguages";

export function* fetchContributors(
  params: IPropsSaga
): Generator<
  | CallEffect<AxiosResponse<ApiGetResponse<IContributors>>>
  | PutEffect<PayloadAction<IOwner[]>>
  | PutEffect<PayloadAction<boolean>>
  | PutEffect<PayloadAction<string>>
> {
  try {
    yield put(changeContributorIsLoading(true));

    const result = yield call(getAllContributors, {
      per_page: 10,
      url: params.payload,
    });

    if ((result as ApiGetResponse<IOwner[]>).data.length > 0) {
      yield put(
        addContributors(
          filterDataContributors((result as ApiGetResponse<IOwner[]>).data)
        )
      );
      yield put(changeContributorIsLoading(false));
    }
  } catch (error) {
    yield put(addContributorError(error as string));
  }
}

export function* fetchLanguages(
  params: IPropsSaga
): Generator<
  | CallEffect<AxiosResponse<ApiGetResponse<ILanguages>>>
  | PutEffect<PayloadAction<ILanguages>>
  | PutEffect<PayloadAction<boolean>>
  | PutEffect<PayloadAction<string>>
> {
  try {
    yield put(changeLangIsLoading(true));

    const result = yield call(getLanguages, {
      url: params.payload,
    });

    if (result) {
      yield put(addLanguages((result as ApiGetResponse<ILanguages>).data));
      yield put(changeLangIsLoading(false));
    }
  } catch (error) {
    yield put(addLangError(error as string));
  }
}

export function* CardDetailSaga() {
  yield takeEvery(GET_CONTRIBUTORS, fetchContributors);
  yield takeEvery(GET_LANGUAGE, fetchLanguages);
}
