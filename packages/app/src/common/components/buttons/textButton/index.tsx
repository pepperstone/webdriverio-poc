import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { TextButtonProps } from './types';
import stylesCreator from './Styles';
import { useTheme } from '../../../../lib/theme/Theme';

const TextButton = ({
  onPress,
  text,
  loading = false,
  buttonStyles,
}: TextButtonProps) => {
  const [styles, theme] = useTheme(stylesCreator);

  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
