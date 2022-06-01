import React, { FC } from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

import { TextButtonProps } from './types';
import stylesCreator from './Styles';
import { useTheme } from '../../../../lib/theme/Theme';

const TextButton: FC<TextButtonProps> = ({
  onPress,
  text,
  loading = false,
  buttonStyles,
}) => {
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
