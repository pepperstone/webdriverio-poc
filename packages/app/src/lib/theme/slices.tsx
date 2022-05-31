import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  userDarkModeOveride: boolean;
  darkMode: boolean;
}

const initialState: ThemeState = {
  userDarkModeOveride: false,
  darkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkMode: (state: ThemeState, action: PayloadAction<boolean>) => ({
      ...state,
      darkMode: action.payload,
    }),
    setUserDarkModeOveride: (
      state: ThemeState,
      action: PayloadAction<boolean>,
    ) => ({ ...state, userDarkModeOveride: action.payload }),
  },
});

// Slice actions
export const { setDarkMode, setUserDarkModeOveride } = themeSlice.actions;

// Slide reducer
export default themeSlice.reducer;
