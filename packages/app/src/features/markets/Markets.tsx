import { MarketsSVG } from 'assets/icons';
import React from 'react';
import { Text, View } from 'react-native';
import useStrings from '../../common/hooks/useStrings';
import { useTheme } from '../../lib/theme/Theme';
import stylesCreator from './Styles';

const MarketsScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <MarketsSVG
        fill={theme.colors.product.background.base}
        fillSecondary={theme.colors.product.text.strong}
      />
      <Text style={styles.text}>{strings.MarketsScreen.Name}</Text>
    </View>
  );
};

export default MarketsScreen;
