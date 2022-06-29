import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { TextButtonProps } from './types';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

const TextButton = ({
  onPress,
  text,
  loading = false,
  buttonStyles,
  textStyles,
  disabled,
}: TextButtonProps) => {
  const [styles, theme] = useTheme(stylesCreator);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, buttonStyles]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.common.white} />
      ) : (
        <Text style={[styles.buttonText, textStyles]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
