import { WatchlistsSVG } from 'assets/icons';
import React from 'react';
import { Text, View } from 'react-native';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';
import stylesCreator from './Styles';

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
