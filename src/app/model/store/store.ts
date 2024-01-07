import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice/index';
import requestSlice from './slices/requestSlice/index';
import responseSlice from './slices/responseSlice/index';
import popupSlice from './slices/popupSlice';

const reducers = combineReducers({
  userReducer,
  requestSlice,
  responseSlice,
  popupSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
