import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import TabProps from './types';
import stylesCreator from './Styles';
import { useTheme } from '../../../../lib/theme/Theme';

const Tab = ({ name, tabIcon, onTabPress, textColor }: TabProps) => {
  const [styles] = useTheme(stylesCreator, { textColor });
  return (
    <TouchableOpacity
      onPress={() => onTabPress(name)}
      style={styles.tab}
      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
    >
      {tabIcon}
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;
