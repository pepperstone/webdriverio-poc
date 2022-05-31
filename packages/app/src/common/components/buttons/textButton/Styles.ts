import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  button: {
    marginTop: 12,
    backgroundColor: theme.colors.blue,
    padding: 16,
    borderRadius: 12,
    minHeight: 56,
    width: '100%',
  },
  buttonText: {
    fontSize: scale(theme.fontSize.h4),
    fontFamily: theme.font.bold,
    color: theme.colors.white,
    alignSelf: 'center',
  },
});

export default stylesCreator;
