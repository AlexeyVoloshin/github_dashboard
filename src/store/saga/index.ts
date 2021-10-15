import { all } from "redux-saga/effects";
import { CardDetailSaga } from "../../pages/CardDetails/saga";
import { MainPageSaga } from "../../pages/MainPage/saga";

export default function* rootSaga() {
  yield all([MainPageSaga(), CardDetailSaga()]);
  // code after all-effect
}
