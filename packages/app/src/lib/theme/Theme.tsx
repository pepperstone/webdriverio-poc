import { useTheme as reactNavigationTheme } from '@react-navigation/native';
import { moderateScale, scale } from 'react-native-size-matters';
import store from '../../app/store';
import { Style } from '../types/StyleTypes';
import {
  baseTheme,
  darkTheme,
  dimensions,
  fontFamily,
  fontSize,
  fontWeight,
  lightTheme,
} from './coreTheme';

/**
 * Get theme depending on darkmode settings.
 */
export const getTheme = () => {
  const darkMode = store.getState().theme.darkMode;

  const themePalette = darkMode ? darkTheme : lightTheme;
  const themePaletteInverted = !darkMode ? darkTheme : lightTheme;

  const colors = {
    ...themePalette,
    common: baseTheme,
  };

  return {
    dark: darkMode,
    colors,
    colorsInvert: themePaletteInverted, // the opposite color to darkmode.
    fontWeight,
    fontSize,
    font: fontFamily,
    ...dimensions,
  };
};

const defaultTheme = getTheme();
type ThemeType = typeof defaultTheme;
export interface Theme extends ThemeType {}

export type StylesCreator = (
  theme: Theme,
  scale: (size: number) => number,
  moderateScale: (size: number, factor?: number) => number,
  props?: any,
) => { [key: string]: Style };

/**
 * Hook to enable access to base theme from components.
 *
 * @param stylesCreator The Stylesheet object created from the component's style file.
 * @param props Any props to use within the Stylesheet object.
 */
export const useTheme = (
  stylesCreator?: StylesCreator,
  props?: any,
): [
  ReturnType<StylesCreator>,
  ThemeType,
  (size: number) => number,
  (size: number, factor?: number) => number,
] => {
  const theme = reactNavigationTheme() as ThemeType;
  const styles = stylesCreator
    ? stylesCreator(theme, scale, moderateScale, props || {})
    : {};

  return [styles, theme, scale, moderateScale];
};
