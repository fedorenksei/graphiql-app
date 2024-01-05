import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  baseUrl: string;
  query: string;
};

const initialState: State = {
  baseUrl: '',
  query: '',
};

const { reducer, actions } = createSlice({
  name: 'urlSlice',
  initialState,
  reducers: {
    setUrl: (state, { payload }: PayloadAction<string>) => {
      state.baseUrl = payload;
    },
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
  },
});

export const { setUrl, setQuery } = actions;
export default reducer;
