import React from 'react';
import { HorizontalBorderProps } from './types';
import { View } from 'react-native';
import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './Styles';

const HorizontalBorder = ({ style }: HorizontalBorderProps) => {
  const [styles] = useTheme(stylesCreator);
  return <View style={[styles.border, style]} />;
};

export default HorizontalBorder;
