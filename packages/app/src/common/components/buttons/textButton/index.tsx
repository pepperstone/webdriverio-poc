import { ActivityIndicator, Pressable, Text } from 'react-native';
import React, { FC } from 'react';

import { TextButtonProps } from './types';
import stylesCreator from './Styles';
import { useTheme } from '../../../../lib/theme/Theme';

const TextButton: FC<TextButtonProps> = ({
  onPress,
  text,
  loading = false,
}) => {
  const [styles, theme] = useTheme(stylesCreator);

  return (
    <Pressable style={styles.button} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </Pressable>
  );
};

export default TextButton;
