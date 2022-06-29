import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale, _, props) => StyleSheet.create({
  headerTitle: {
    color: theme.colors.product.text.strong,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h2),
    fontWeight: theme.fontWeight.bold,
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '20%',
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: scale(80),
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: props.safeAreaTop,
    width: '100%',
  },
  rightIcon: {
    marginLeft: props.leftIcon && 32,
  },
});

export default stylesCreator;
