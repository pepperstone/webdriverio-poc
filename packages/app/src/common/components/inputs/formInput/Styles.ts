import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  input: {
    marginTop: 12,
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: 12,
    borderTopColor: theme.colors.border,
    borderLeftColor: theme.colors.border,
    borderBottomColor: theme.colors.border,
    borderRightColor: theme.colors.border,
    borderWidth: 1,
  },
  errorInput: {
    borderTopColor: theme.colors.red,
    borderLeftColor: theme.colors.red,
    borderBottomColor: theme.colors.red,
    borderRightColor: theme.colors.red,
    backgroundColor: `${theme.colors.red}11`,
  },
  error: {
    marginTop: 4,
    color: theme.colors.red,
  },
});

export default stylesCreator;
