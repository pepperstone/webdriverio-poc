import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  tabWrapper: {
    backgroundColor: theme.colors.product.background.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    paddingTop: 5,
    paddingHorizontal: scale(10),
  },
});

export default stylesCreator;
