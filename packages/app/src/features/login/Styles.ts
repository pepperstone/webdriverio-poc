import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  background: {
    alignItems: 'center',
    flex: 1,
  },
  centeredText: {
    alignSelf: 'center',
    marginTop: 12,
  },
  codeSharing: {
    marginTop: 30,
  },
  form: {
    width: '90%',
  },
  text: {
    color: theme.colors.product.text.strong,
    fontSize: scale(theme.fontSize.h4),
  },
});

export default stylesCreator;
