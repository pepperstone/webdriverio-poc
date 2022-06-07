import { Text, View } from 'react-native';

import { MarketsSVG } from 'assets/icons';
import React from 'react';
import stylesCreator from './Styles';
import useStrings from '../../common/hooks/useStrings';
import { useTheme } from '../../lib/theme/Theme';

const MarketsScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <View style={styles.box} />
      <MarketsSVG fill={theme.colors.card} fillSecondary={theme.colors.text} />
      <Text style={styles.text}>{strings.MarketsScreen.Name}</Text>
    </View>
  );
};

export default MarketsScreen;
