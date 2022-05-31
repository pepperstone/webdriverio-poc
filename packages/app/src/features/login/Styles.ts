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
    color: theme.colors.text,
  },
  centeredText: {
    marginTop: 12,
    alignSelf: 'center',
  },
  codeSharing: {
    marginTop: 30,
  },
  codeWorking: {
    fontWeight: 'bold',
    fontSize: theme.fontSize.h2,
    color: theme.colors.blue,
  },
});

export default stylesCreator;
