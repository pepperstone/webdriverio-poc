import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: scale(theme.fontSize.h1),
    color: theme.colors.product.text.strong,
  },
  form: {
    width: '90%',
    marginBottom: 15,
  },
  content: {
    flex: 1 
  }
});

export default stylesCreator;
