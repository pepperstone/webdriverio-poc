import { Text, View } from 'react-native';

import React from 'react';
import { SearchSVG } from 'assets/icons';
import stylesCreator from './Styles';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';

const SearchScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <View style={styles.box} />
      <SearchSVG fill={theme.colors.card} fillSecondary={theme.colors.text} />
      <Text style={styles.text}>{strings.SearchScreen.Name}</Text>
    </View>
  );
};

export default SearchScreen;
