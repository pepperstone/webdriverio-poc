import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  green: {
    color: theme.colors.product.button.bg.success,
  },
  red: {
    color: theme.colors.product.button.bg.fail,
  },
  text: {
    color: theme.colors.product.text.strong,
    fontSize: 10,
    marginRight: 4,
    marginTop: 4,
  },
});

export default stylesCreator;
