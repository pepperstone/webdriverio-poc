import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import TabProps from './types';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

const Tab = ({ name, Icon, onTabPress, fill, activeColor }: TabProps) => {
  const [styles] = useTheme(stylesCreator, { activeColor });

  return (
    <TouchableOpacity
      onPress={() => onTabPress(name)}
      style={styles.tab}
      hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
    >
      <Icon fill={fill} fillSecondary={activeColor} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Tab;