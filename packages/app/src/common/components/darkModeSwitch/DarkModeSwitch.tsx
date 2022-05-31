import React, { FC } from 'react';
import { setDarkMode, setUserDarkModeOveride } from '../../../lib/theme/slices';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../../app/types';
import DarkModeSwitchProps from './types';
import { Switch } from 'react-native';
import stylesCreator from './Styles';
import { useTheme } from '../../../lib/theme/Theme';

const DarkModeSwitch: FC<DarkModeSwitchProps> = () => {
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
