import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../lib/theme/Theme';
import stylesCreator from './Styles';
import { TextButtonProps } from './types';

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
        <ActivityIndicator color={theme.colors.common.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
