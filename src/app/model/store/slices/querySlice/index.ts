import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'querySlice',
  initialState: { value: '' },
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.value = payload;
    },
  },
});

export const { setQuery } = actions;
export default reducer;
