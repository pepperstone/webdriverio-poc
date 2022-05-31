import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: theme.SCREEN_HEIGHT / 3,
    width: theme.SCREEN_WIDTH / 2,
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontSize: scale(theme.fontSize.h1),
    color: theme.colors.text,
  },
  form: {
    width: '90%',
  },
});

export default stylesCreator;
