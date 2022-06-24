import { Text, View } from 'react-native';

import React from 'react';
import { WatchlistsSVG } from 'assets/icons';
import stylesCreator from './styles';
import { useStrings } from '../../common/hooks';
import { useTheme } from 'src/lib/theme/Theme';

const WatchlistsScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <WatchlistsSVG
        fill={theme.colors.product.background.base}
        fillSecondary={theme.colors.product.text.strong}
      />
      <Text style={styles.text}>{strings.WatchlistsScreen.Name}</Text>
    </View>
  );
};

export default WatchlistsScreen;
