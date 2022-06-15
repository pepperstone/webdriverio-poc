import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  background: {
    alignSelf: 'center',
    flex: 1,
    zIndex: 10,
  },
  text: {
    color: theme.colors.product.text.strong,
    fontSize: scale(theme.fontSize.h1),
  },
});

export default stylesCreator;
