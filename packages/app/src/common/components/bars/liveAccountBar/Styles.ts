import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  bar: {
    alignItems: 'center',
    backgroundColor: theme.colors.product.background.secondary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
  },
  red: {
    backgroundColor: `${theme.colors.product.button.bg.fail}33`,
  },
});

export default stylesCreator;
