import { moderateScale, scale } from 'react-native-size-matters';

import { Dimensions, Platform } from 'react-native';
import { Style } from '../types/StyleTypes';
import { useTheme as reactNavigationTheme } from '@react-navigation/native';
import store from '../../app/store';

const { height, width } = Dimensions.get('screen');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const BORDER_RADIUS = 15;

const fontWeightAndroid = {
  light: '400',
  regular: '500',
  semibold: '700',
  bold: '800',
  black: '900',
} as const;

const fontWeightIOS = {
  light: '300',
  regular: '400',
  semibold: '600',
  bold: '700',
  black: '800',
} as const;

const fontWeight = Platform.OS === 'ios'
  ? fontWeightIOS
  : fontWeightAndroid;

const CORE_THEME = {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  BORDER_RADIUS,
  fontWeight,
  fontSize: {
    // WIP: Still Evolving with designs.
    // Heading
    h1: 32,
    h2: 24,
    h3: 19,
    h4: 16,
    h5: 14,
    h6: 12,
    // Subheading
    s1: 11,
    // Body
    b1: 10,
    b2: 8,
  },
  font: {
    light: 'PlusJakartaSans-Light',
    lightItalic: 'PlusJakartaSans-LightItalic',
    extraLight: 'PlusJakartaSans-ExtraLight',
    extraLightItalic: 'PlusJakartaSans-ExtraLightItalic',

    regular: 'PlusJakartaSans-Regular',
    regularItalic: 'PlusJakartaSans-Italic',

    medium: 'PlusJakartaSans-Medium',
    mediumItalic: 'PlusJakartaSans-MediumItalic',

    bold: 'PlusJakartaSans-Bold',
    boldItalic: 'PlusJakartaSans-BoldItalic',
    extraBold: 'PlusJakartaSans-ExtraBold',
    extraBoldItalic: 'PlusJakartaSans-ExtraBoldItalic',
  },
};

const baseColor = {
  white: '#FFFFFF',
  black: '#000000',
  blue: '#0064FA',
  red: '#FF0000',
  buttons: {
    secondaryDefault: '#2C2C2C',
  },
};

export const LightTheme = {
  dark: false,
  colors: {
    ...baseColor,
    primary: '#FFFFFF',
    background: '#FFFFFF',
    card: '#F7F7F7',
    text: '#000000',
    border: '#999999',
    notification: '#FFFFFF',
  },
};

export const DarkTheme  = {
  dark: true,
  colors: {
    ...baseColor,
    primary: '#000000',
    background: '#000000',
    card: '#000000',
    text: '#FFFFFF',
    border: '#CCCCCC',
    notification: '#000000',
  },
};

/**
 * Get theme depending on darkmode settings.
 */
export const getTheme = () => {
  const darkMode = store.getState().theme.darkMode;

  return {
    dark: darkMode ? true : false,
    colors: darkMode ? DarkTheme.colors : LightTheme.colors,
    colorsInvert: !darkMode ? DarkTheme.colors : LightTheme.colors, // the opposite color to darkmode.
    ...CORE_THEME,
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
