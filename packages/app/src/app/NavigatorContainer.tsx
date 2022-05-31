import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import { setDarkMode, setUserDarkModeOveride } from '../lib/theme/slices';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../navigation/NavigationUtils';
import RootNavigator from '../navigation';
import { getTheme } from '../lib/theme/Theme';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from './types';

const NavigatorContainer = () => {
  const dispatch = useDispatch();
  const { darkMode, userDarkModeOveride } = useSelector((state: AppState) => state.theme);
  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    if (userDarkModeOveride === false) dispatch(setDarkMode(colorScheme === 'dark'));
    if (darkMode && colorScheme === 'dark') dispatch(setUserDarkModeOveride(false));
  }, [
    colorScheme,
    userDarkModeOveride,
    dispatch,
    darkMode,
  ]);

  return (
    <NavigationContainer ref={navigationRef} theme={getTheme()}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default NavigatorContainer;


