import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  baseUrl: string;
  query: string;
  variables: string;
  headers: Record<string, string>;
};

const initialState: State = {
  baseUrl: '',
  query: '',
  variables: '',
  headers: {},
};

const { reducer, actions } = createSlice({
  name: 'requestSlice',
  initialState,
  reducers: {
    setUrl: (state, { payload }: PayloadAction<string>) => {
      state.baseUrl = payload;
    },
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    setVariables: (state, { payload }: PayloadAction<string>) => {
      state.variables = payload;
    },

    setHeaders: (state, { payload }: PayloadAction<Record<string, string>>) => {
      state.headers = payload;
    },
  },
});

export const { setUrl, setQuery, setVariables, setHeaders } = actions;
export default reducer;
