import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  tabWrapper: {
    alignItems: 'center',
    backgroundColor: theme.colors.product.background.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: scale(10),
    paddingTop: 5,
  },
});

export default stylesCreator;
