import { Text, View } from 'react-native';

import { LiveAccountDataProps } from './types';
import React from 'react';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

const LiveAccountData = ({
  title,
  amount,
  showColor = false,
}: LiveAccountDataProps) => {
  const [styles] = useTheme(stylesCreator);
  const amountStyle = showColor
    ? amount < 0
      ? [styles.text, styles.red]
      : [styles.text, styles.green]
    : styles.text;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={amountStyle}>${amount}</Text>
    </View>
  );
};

export default LiveAccountData;
