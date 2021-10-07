import { all } from 'redux-saga/effects';
import { helloSaga } from '../../pages/MainPage/saga';

export default function* rootSaga() {
  yield all([helloSaga()]);
  // code after all-effect
}
