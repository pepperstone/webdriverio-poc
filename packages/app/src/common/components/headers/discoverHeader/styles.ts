import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  headerRightContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    color: theme.colors.product.text.strong,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h2),
    fontWeight: theme.fontWeight.bold,
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
  },
});

export default stylesCreator;
