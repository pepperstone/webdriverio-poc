import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  background: {
    flex: 1,
    alignSelf: 'center',
    zIndex: 10,
  },
  box: {
    height: theme.SCREEN_HEIGHT / 2,
    width: theme.SCREEN_WIDTH / 2,
    backgroundColor: theme.colors.primary,
  },
  text: {
    fontSize: scale(theme.fontSize.h1),
    color: theme.colors.text,
  },
});

export default stylesCreator;
