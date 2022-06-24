import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  error: {
    color: theme.colors.common.red,
    marginTop: 4,
  },
  errorInput: {
    backgroundColor: `${theme.colors.common.red}11`,
    borderBottomColor: theme.colors.common.red,
    borderLeftColor: theme.colors.common.red,
    borderRightColor: theme.colors.common.red,
    borderTopColor: theme.colors.common.red,
  },
  input: {
    backgroundColor: theme.colors.product.background.base,
    borderBottomColor: theme.colors.product.border.primary,
    borderLeftColor: theme.colors.product.border.primary,
    borderRadius: 12,
    borderRightColor: theme.colors.product.border.primary,
    borderTopColor: theme.colors.product.border.primary,
    borderWidth: 1,
    color: theme.colors.product.text.strong,
    marginTop: 12,
    padding: 16,
  },
});

export default stylesCreator;
