import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale, _, props) => StyleSheet.create({
  tabWrapper: {
    alignItems: 'center',
    backgroundColor: theme.colors.product.background.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: props.safeAreaBottom,
    paddingHorizontal: scale(10),
    paddingTop: 5,
  },
});

export default stylesCreator;
