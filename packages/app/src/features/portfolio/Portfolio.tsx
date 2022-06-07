import { Text, View } from 'react-native';

import { PortfolioSVG } from 'assets/icons';
import React from 'react';
import stylesCreator from './Styles';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';

const PortfolioScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <View style={styles.box} />
      <PortfolioSVG
        fill={theme.colors.card}
        fillSecondary={theme.colors.text}
      />
      <Text style={styles.text}>{strings.PortfolioScreen.Name}</Text>
    </View>
  );
};

export default PortfolioScreen;
