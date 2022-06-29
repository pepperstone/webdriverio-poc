import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  tabBarContentContainerStyle: {
    flex: 1,
  },
  tabBarIndicatorStyle: {
    backgroundColor: theme.colors.product.brand.primary,
    marginLeft: theme.SCREEN_WIDTH / 25,
    width: '20%',
  },
  tabBarItemStyle: {
    flex: 1,
    marginLeft: 0,
    padding: 0,
    width: 80,
  },
  tabBarLabelStyle: {
    color: theme.colors.product.text.strong,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h5),
    fontWeight: theme.fontWeight.semibold,
    textTransform: 'none',
  },
  tabBarStyle: {
    backgroundColor: theme.colors.product.background.base,
    borderRightColor: theme.colors.common.red,
    padding: 0,
    paddingTop: 24,
    zIndex: 0,
  },
});

export default stylesCreator;
