import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: scale(theme.fontSize.h2),
    color: theme.colors.text,
    fontFamily: theme.font.regular,
    fontWeight: theme.fontWeight.bold,
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default stylesCreator;
