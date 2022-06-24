import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  form: {
    alignSelf: 'center',
    marginBottom: 15,
    width: '90%',
  },

  mainContainer: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },

  scrollView: {
    paddingRight: 12,
  },

  text: {
    color: theme.colors.product.text.strong,
    fontSize: scale(theme.fontSize.h1),
  },
});

export default stylesCreator;
