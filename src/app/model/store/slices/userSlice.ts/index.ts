import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from './types';

const initialState: User = {
  name: null,
  email: null,
  id: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    logoutUser: (state) => {
      state.name = null;
      state.email = null;
      state.id = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
