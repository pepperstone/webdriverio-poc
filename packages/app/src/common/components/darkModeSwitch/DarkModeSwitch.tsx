import React from 'react';
import { Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../app/types';
import { setDarkMode, setUserDarkModeOveride } from '../../../lib/theme/slices';
import { useTheme } from '../../../lib/theme/Theme';
import stylesCreator from './Styles';

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
