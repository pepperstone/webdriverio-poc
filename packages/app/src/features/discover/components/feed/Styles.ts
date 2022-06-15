import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  form: {
    marginBottom: 15,
    width: '90%',
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: theme.colors.product.text.strong,
    fontSize: scale(theme.fontSize.h1),
  },
});

export default stylesCreator;
