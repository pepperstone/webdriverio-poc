import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator : StylesCreator = (theme, scale) => StyleSheet.create({

  border: {
    marginBottom: 24,
  },

  linkText: {
    color: theme.colors.common.white,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h5),
    fontWeight: theme.fontWeight.bold,
    marginBottom: 24,
  },

  scrollView: {
    paddingLeft: 24,
    paddingRight: 61,
    paddingTop: 24,
  },


});

export default stylesCreator;
