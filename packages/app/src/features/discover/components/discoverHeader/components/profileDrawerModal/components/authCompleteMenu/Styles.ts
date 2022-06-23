import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator : StylesCreator = (theme, scale) => StyleSheet.create({

  border: {
    marginVertical: 12,
  },

  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  linkText: {
    color: theme.colors.common.white,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h5),
    fontWeight: theme.fontWeight.bold,
  },

  main: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyConent: 'space-around',
    maxHeight: 700,
    padding: 24,
    paddingRight: 61,
  },


});

export default stylesCreator;
