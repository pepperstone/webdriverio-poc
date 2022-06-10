import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  input: {
    marginTop: 12,
    backgroundColor: theme.colors.product.background.base,
    padding: 16,
    borderRadius: 12,
    borderTopColor: theme.colors.product.border.primary,
    borderLeftColor: theme.colors.product.border.primary,
    borderBottomColor: theme.colors.product.border.primary,
    borderRightColor: theme.colors.product.border.primary,
    borderWidth: 1,
    color: theme.colors.product.text.strong,
  },
  errorInput: {
    borderTopColor: theme.colors.common.red,
    borderLeftColor: theme.colors.common.red,
    borderBottomColor: theme.colors.common.red,
    borderRightColor: theme.colors.common.red,
    backgroundColor: `${theme.colors.common.red}11`,
  },
  error: {
    marginTop: 4,
    color: theme.colors.common.red,
  },
});

export default stylesCreator;
