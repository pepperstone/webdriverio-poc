import React from 'react';
import { SvgButtonProps } from './types';
import { TouchableOpacity } from 'react-native';

const SvgButton = ({
  onPress,
  buttonStyles,
  Svg,
  fill,
  fillSecondary,
}: SvgButtonProps) => (
  <TouchableOpacity style={buttonStyles} onPress={onPress}>
    <Svg fill={fill} fillSecondary={fillSecondary} />
  </TouchableOpacity>
);

export default SvgButton;
