import { all } from "redux-saga/effects";
import { MainPageSaga } from "../../pages/MainPage/saga";

export default function* rootSaga() {
  yield all([MainPageSaga()]);
  // code after all-effect
}
