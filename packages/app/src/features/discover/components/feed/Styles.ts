import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: scale(theme.fontSize.h1),
    color: theme.colors.product.text.strong,
  },
  form: {
    width: '90%',
    marginBottom: 15,
  },
});

export default stylesCreator;
