import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UrlType } from './types';

const initialState: UrlType = {
  baseUrl: null,
};

const { reducer, actions } = createSlice({
  name: 'urlSlice',
  initialState,
  reducers: {
    setUrl: (state, { payload: { baseUrl } }: PayloadAction<UrlType>) => ({
      ...state,
      baseUrl,
    }),
  },
});

export const { setUrl } = actions;
export default reducer;
