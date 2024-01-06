import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  baseUrl: string;
  query: string;
  variables: string;
};

const initialState: State = {
  baseUrl: '',
  query: '',
  variables: '',
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
  },
});

export const { setUrl, setQuery, setVariables } = actions;
export default reducer;
