import { configureStore } from '@reduxjs/toolkit';
import { search_filter } from '../pages/MainPage/slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    search: search_filter
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
