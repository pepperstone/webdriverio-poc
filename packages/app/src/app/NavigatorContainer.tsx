import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode, setUserDarkModeOveride } from '../lib/theme/slices';
import { getTheme } from '../lib/theme/Theme';
import RootNavigator from '../navigation';
import { navigationRef } from '../navigation/NavigationUtils';
import { AppState } from './types';

const NavigatorContainer = () => {
  const dispatch = useDispatch();
  const { darkMode, userDarkModeOveride } = useSelector(
    (state: AppState) => state.theme,
  );
  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    if (userDarkModeOveride === false) {
      dispatch(setDarkMode(colorScheme === 'dark'));
    }
    if (darkMode && colorScheme === 'dark') {
      dispatch(setUserDarkModeOveride(false));
    }
  }, [colorScheme, userDarkModeOveride, dispatch, darkMode]);

  const barStyle = darkMode ? 'light-content' : 'dark-content';
  const statusBarColor = getTheme().colors.product.background.base;
  const backgroundColor = statusBarColor;

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <NavigationContainer ref={navigationRef} theme={getTheme()}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
};

export default NavigatorContainer;
