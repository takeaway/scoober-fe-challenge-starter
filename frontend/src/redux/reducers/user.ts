import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types';

const initialState: User = {
  socketId: '',
  user: '',
  message: '',
};

const summarySlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserInfo(state, action: PayloadAction<User>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addUserInfo } = summarySlice.actions;
export default summarySlice.reducer;
