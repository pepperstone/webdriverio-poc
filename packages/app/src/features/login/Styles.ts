import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    width: '90%',
  },
  text: {
    fontSize: scale(theme.fontSize.h4),
    color: theme.colors.product.text.strong,
  },
  centeredText: {
    marginTop: 12,
    alignSelf: 'center',
  },
  codeSharing: {
    marginTop: 30,
  },
});

export default stylesCreator;
