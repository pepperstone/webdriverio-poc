import { Text, TouchableOpacity } from 'react-native';

import { FilterButtonProps } from './types';
import React from 'react';
import styleCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

export const FilterButton = ({
  id,
  title,
  onPress,
  isSelected,
  style,
}: FilterButtonProps) => {
  const [styles] = useTheme(styleCreator, { isSelected });

  const onPressButton = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity
      key={id}
      onPress={onPressButton}
      style={[styles.container, style]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
