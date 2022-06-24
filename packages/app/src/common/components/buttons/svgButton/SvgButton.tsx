import React from 'react';
import { SvgButtonProps } from './types';
import { TouchableOpacity } from 'react-native';

const SvgButton = ({
  onPress,
  buttonStyles,
  Icon,
  fill,
  fillSecondary,
}: SvgButtonProps) => (
  <TouchableOpacity style={buttonStyles} onPress={onPress}>
    <Icon fill={fill} fillSecondary={fillSecondary} />
  </TouchableOpacity>
);

export default SvgButton;
