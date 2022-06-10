import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: scale(theme.fontSize.h5),
    textTransform: 'none',
    fontFamily: theme.font.regular,
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.product.text.strong,
  },
  tabBarItemStyle: {
    width: 80,
    padding: 0,
    marginLeft: 0,
  },
  tabBarStyle: {
    padding: 0,
    paddingTop: 25,
    backgroundColor: theme.colors.product.background.base,
    borderRightColor: 'red',
    zIndex: 0,
  },
  tabBarIndicatorStyle: {
    backgroundColor: theme.colors.product.brand.primary,
    marginLeft: theme.SCREEN_WIDTH / 25,
    width: '20%',
  },
});

export default stylesCreator;
