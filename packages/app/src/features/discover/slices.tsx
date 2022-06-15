import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterButtonEntryType } from 'src/common/components/pillswitch/Types';

interface DiscoverState {
  isSideMenuOpen  : boolean;
  filters         : FilterButtonEntryType<string>[]
  selectedFilter? : FilterButtonEntryType<string>
}

const initialState: DiscoverState = {
  isSideMenuOpen  : false,
  filters         :  []
};

const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {
    setIsSideMenuOpen: (state: DiscoverState, action: PayloadAction<boolean>) => ({
      ...state,
      isSideMenuOpen: action.payload,
    }),
    setFilters: (state: DiscoverState, action: PayloadAction<{ entries: FilterButtonEntryType<string>[], selected?: FilterButtonEntryType<string>}>) => ({
      ...state,
      filters       : action.payload.entries,
      selectedFilter: action.payload.selected
    }),
    setFilter: (state: DiscoverState, action: PayloadAction<FilterButtonEntryType<string>>) => ({
      ...state,
      selectedFilter: action.payload
    })
   },
});

// Slice actions
export const { setIsSideMenuOpen, setFilter, setFilters } = discoverSlice.actions;

// Slide reducer
export default discoverSlice.reducer;
