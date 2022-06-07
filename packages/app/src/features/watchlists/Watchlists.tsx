import { Text, View } from 'react-native';

import React from 'react';
import { WatchlistsSVG } from 'assets/icons';
import stylesCreator from './Styles';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';

const WatchlistsScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <View style={styles.box} />
      <WatchlistsSVG
        fill={theme.colors.card}
        fillSecondary={theme.colors.text}
      />
      <Text style={styles.text}>{strings.WatchlistsScreen.Name}</Text>
    </View>
  );
};

export default WatchlistsScreen;
