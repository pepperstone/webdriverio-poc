import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { TextTouchableProps } from './types';

const TextTouchable = ({ text, onPress, textStyles }: TextTouchableProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={textStyles}>{text}</Text>
  </TouchableOpacity>
);

export default TextTouchable;
