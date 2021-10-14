import { call, takeEvery, CallEffect, PutEffect } from "redux-saga/effects";
import { getAllContributors } from "../../api";
import { AxiosResponse } from "axios";
import {
  IContributors,
  IOwner,
} from "../../core/components/types/ListComponent";

import { PayloadAction } from "@reduxjs/toolkit";
import { ApiGetResponse } from "../../api/types";
import { filterDataContributors } from "../../utils/filterData";
import { GET_CONTRIBUTORS } from "./types";

export function* fetchContributors(): Generator<
  | CallEffect<AxiosResponse<ApiGetResponse<IContributors>>>
  | PutEffect<PayloadAction<IOwner[]>>
> {
  try {
    const result = yield call(getAllContributors, {
      per_page: 10,
      url: "",
    });

    if (
      (result as ApiGetResponse<IContributors>).data.contributors.length > 0
    ) {
      filterDataContributors((result as ApiGetResponse<IContributors>).data);
    }
  } catch (error) {
    //   yield put(repoError(error));
    console.error(error);
  }
}

export function* CardDetailSaga() {
  yield takeEvery(GET_CONTRIBUTORS, fetchContributors);
}
