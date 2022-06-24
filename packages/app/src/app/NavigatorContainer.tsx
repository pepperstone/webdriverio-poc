import { Appearance, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { setDarkMode, setUserDarkModeOveride } from 'src/lib/theme/slices';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from './types';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '../navigation';
import { getTheme } from 'src/lib/theme/Theme';
import { navigationRef } from '../navigation/NavigationUtils';

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
