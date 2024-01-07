import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type State = {
  response: string;
  error: string;
};

const initialState: State = {
  response: '',
  error: '',
};

const { reducer, actions } = createSlice({
  name: 'responseSlice',
  initialState,
  reducers: {
    setResponse: (state, { payload }: PayloadAction<string>) => {
      state.response = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const { setResponse, setError } = actions;
export default reducer;
