import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  button: {
    backgroundColor: theme.colors.common.blue,
    borderRadius: 4,
    marginTop: 12,
    minHeight: 56,
    padding: 16,
    width: '100%',
  },
  buttonText: {
    alignSelf: 'center',
    color: theme.colors.common.white,
    fontFamily: theme.font.bold,
    fontSize: scale(theme.fontSize.h4),
  },
});

export default stylesCreator;
