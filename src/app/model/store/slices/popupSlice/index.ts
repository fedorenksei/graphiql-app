import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PopupType } from './types';

const initialState: PopupType = {
  name: null,
  isShown: false,
};

const { actions, reducer } = createSlice({
  name: 'popupSlice',
  reducers: {
    openPopup: (
      state,
      { payload: { name } }: PayloadAction<Omit<PopupType, 'isShown'>>,
    ) => {
      state.isShown = true;
      state.name = name;
    },
    closePopup: (state) => {
      state.isShown = false;
    },
  },
  initialState,
});

export const { closePopup, openPopup } = actions;
export default reducer;
