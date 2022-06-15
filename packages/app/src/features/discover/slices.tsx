import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterButtonEntry } from 'src/common/components/filterbuttongroup/Types';

interface DiscoverState {
  isSideMenuOpen  : boolean;
  filters         : FilterButtonEntry<string>[]
  selectedFilter? : FilterButtonEntry<string>
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
    setFilters: (state: DiscoverState, action: PayloadAction<{ entries: FilterButtonEntry<string>[], selected?: FilterButtonEntry<string>}>) => ({
      ...state,
      filters       : action.payload.entries,
      selectedFilter: action.payload.selected
    }),
    setFilter: (state: DiscoverState, action: PayloadAction<FilterButtonEntry<string>>) => ({
      ...state,
      selectedFilter: action.payload
    })
   },
});

// Slice actions
export const { setIsSideMenuOpen, setFilter, setFilters } = discoverSlice.actions;

// Slide reducer
export default discoverSlice.reducer;
