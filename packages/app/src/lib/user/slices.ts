import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus, UserState } from './types';

const initialState: UserState = {
  authStatus: AuthStatus.NONE,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthStatus: (state: UserState, action: PayloadAction<number>) => ({
      ...state,
      authStatus: action.payload,
    }),
  },
});

// Slice actions
export const { setAuthStatus } = userSlice.actions;

// Slide reducer
export default userSlice.reducer;
