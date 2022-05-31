import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  tabWrapper: {
    backgroundColor: theme.colors.card,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: scale(30),
    paddingTop: scale(5),
    paddingHorizontal: scale(10),
  },
});

export default stylesCreator;
