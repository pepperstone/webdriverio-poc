import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state: UserState, action: PayloadAction<boolean>) => ({
      ...state,
      isLoggedIn: action.payload,
    }),
  },
});

// Slice actions
export const { setIsLoggedIn } = userSlice.actions;

// Slide reducer
export default userSlice.reducer;
