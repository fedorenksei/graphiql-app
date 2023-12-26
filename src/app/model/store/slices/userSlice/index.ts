import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from './types';

const initialState: User = {
  email: null,
  uid: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
    },
    logoutUser: (state) => {
      state.email = null;
      state.uid = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
