import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/index';
import urlReducer from './slices/urlSlice/index';
import queryReducer from './slices/querySlice/index';

const reducers = combineReducers({
  userReducer,
  urlReducer,
  queryReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
