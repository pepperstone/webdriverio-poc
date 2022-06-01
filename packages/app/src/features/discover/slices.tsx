import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DiscoverState {
  isSideMenuOpen: boolean;
}

const initialState: DiscoverState = {
  isSideMenuOpen: false,
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    setIsSideMenuOpen: (state: DiscoverState, action: PayloadAction<boolean>) => ({
      ...state,
      isSideMenuOpen: action.payload,
    }),
  },
});

// Slice actions
export const { setIsSideMenuOpen } = discoverSlice.actions;

// Slide reducer
export default discoverSlice.reducer;
