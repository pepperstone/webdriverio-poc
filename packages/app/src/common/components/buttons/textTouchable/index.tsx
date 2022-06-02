import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { TextTouchableProps } from './types';

const TextTouchable: FC<TextTouchableProps> = ({
  text,
  onPress,
  textStyles,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={textStyles}>
      {text}
    </Text>
</TouchableOpacity>
);

export default TextTouchable;
