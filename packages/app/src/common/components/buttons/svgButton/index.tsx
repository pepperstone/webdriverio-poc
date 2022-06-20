import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgButtonProps } from './types';

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
