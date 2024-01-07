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

    setHeader: (
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string }>,
    ) => {
      state.headers[name] = value;
    },
    deleteHeader: (
      state,
      { payload: { name } }: PayloadAction<{ name: string }>,
    ) => {
      delete state.headers[name];
    },
  },
});

export const { setUrl, setQuery, setVariables, setHeader, deleteHeader } =
  actions;
export default reducer;
