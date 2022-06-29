import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'src/lib/theme/Theme';
import styleCreator from './styles';
import { FilterButtonProps } from './types';

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
