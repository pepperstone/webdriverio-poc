import { useTheme } from 'src/lib/theme/Theme';
import { FilterButtonProps } from './types';
import styleCreator from './Styles';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const FilterButton = ({
  id,
  title,
  onPress,
  isSelected,
  style,
}: FilterButtonProps) => {
  const [styles, theme] = useTheme(styleCreator, { isSelected });

  const _onPress = () => {
    onPress(id);
  };

  return (
    <TouchableOpacity
      key={id}
      onPress={_onPress}
      style={[styles.container, style]}
    >
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};
