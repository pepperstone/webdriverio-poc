import { Text, View } from 'react-native';

import { PortfolioSVG } from 'assets/icons';
import React from 'react';
import stylesCreator from './styles';
import { useStrings } from '../../common/hooks';
import { useTheme } from 'src/lib/theme/Theme';

const PortfolioScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <PortfolioSVG
        fill={theme.colors.product.background.base}
        fillSecondary={theme.colors.product.text.strong}
      />
      <Text style={styles.text}>{strings.PortfolioScreen.Name}</Text>
    </View>
  );
};

export default PortfolioScreen;
