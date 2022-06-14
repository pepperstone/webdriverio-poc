import { SearchSVG } from 'assets/icons';
import React from 'react';
import { Text, View } from 'react-native';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';
import stylesCreator from './Styles';

const SearchScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <SearchSVG
        fill={theme.colors.product.background.base}
        fillSecondary={theme.colors.product.text.strong}
      />
      <Text style={styles.text}>{strings.SearchScreen.Name}</Text>
    </View>
  );
};

export default SearchScreen;
