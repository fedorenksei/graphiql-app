import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice.ts';

const reducers = combineReducers({
  userReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
