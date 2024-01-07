import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/index';
import urlReducer from './slices/urlSlice/index';

const reducers = combineReducers({
  userReducer,
  urlReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
