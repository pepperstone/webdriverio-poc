import { setDarkMode, setUserDarkModeOveride } from 'src/lib/theme/slices';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from 'src/app/types';
import React from 'react';
import { Switch } from 'react-native';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

const DarkModeSwitch = () => {
  const [styles] = useTheme(stylesCreator);
  const dispatch = useDispatch();
  const { darkMode, userDarkModeOveride } = useSelector(
    (state: AppState) => state.theme,
  );

  const toggleSwitch = (e: boolean) => {
    dispatch(setDarkMode(e));
    if (!userDarkModeOveride) dispatch(setUserDarkModeOveride(true));
  };

  return (
    <Switch
      style={styles.switch}
      value={darkMode}
      onValueChange={toggleSwitch}
    />
  );
};

export default DarkModeSwitch;
