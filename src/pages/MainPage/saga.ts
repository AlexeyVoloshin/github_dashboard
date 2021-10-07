import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

export function* fetchUser() {
  try {
    console.log('123');
    // const user = yield call(Api.fetchUser, action.payload.userId);
    // yield put(setUser(user));
  } catch (e) {
    console.log('erro');
    // yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export function* helloSaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}
