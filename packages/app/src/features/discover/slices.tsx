import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterButtonItem } from 'src/common/components/filterButtonHorizontalList/types';

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
    setIsSideMenuOpen: (
      state: DiscoverState,
      action: PayloadAction<boolean>,
    ) => ({
      ...state,
      isSideMenuOpen: action.payload,
    }),
  },
});

// Slice actions
export const { setIsSideMenuOpen } = discoverSlice.actions;

// Slide reducer
export default discoverSlice.reducer;
