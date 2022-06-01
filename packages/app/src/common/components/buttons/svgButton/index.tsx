import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { SvgButtonProps } from './types';

const SvgButton: FC<SvgButtonProps> = ({
  onPress,
  buttonStyles,
  Svg,
  fill,
  fillSecondary,
}) => (
  <TouchableOpacity style={buttonStyles} onPress={onPress}>
    <Svg fill={fill} fillSecondary={fillSecondary}/>
  </TouchableOpacity>
);

export default SvgButton;
