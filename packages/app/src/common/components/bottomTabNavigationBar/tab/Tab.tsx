import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { useTheme } from '../../../../lib/theme/Theme';
import stylesCreator from './Styles';
import TabProps from './types';

const Tab: FC<TabProps> = ({
  name,
  tabIcon,
  onTabPress,
  textColor,
}) => {
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
