import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
