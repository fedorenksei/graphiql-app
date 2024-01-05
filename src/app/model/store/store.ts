import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/index';
import urlReducer from './slices/urlSlice/index';
import responseSlice from './slices/responseSlice/index';

const reducers = combineReducers({
  userReducer,
  urlReducer,
  responseSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
