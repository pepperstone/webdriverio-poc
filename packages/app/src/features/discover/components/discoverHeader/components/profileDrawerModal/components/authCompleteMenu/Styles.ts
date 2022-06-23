import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator : StylesCreator = (theme, scale) => StyleSheet.create({

  container: {
    flex: 1,
    paddingBottom: 24,
    paddingLeft:24,
    paddingRight: 61,
  },

  group: {
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
    paddingVertical: 12,
  },

  groupBottom: {
    alignItems: 'flex-start',
    paddingVertical: 12,
  },

  linkButton: {
    color: theme.colors.common.white,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h5),
    fontWeight: theme.fontWeight.bold,
    marginVertical: 12,
  },

});

export default stylesCreator;
