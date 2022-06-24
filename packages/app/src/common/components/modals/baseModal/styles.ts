import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  children: {
    flex: 1,
    justifyContent: 'flex-end',
    shadowColor: theme.colors.border,
    shadowOffset: {width: 2, height: -4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  contents: {
    backgroundColor: theme.colors.background,
    borderRadius: 12,
    marginBottom: 12,
    padding: 24,
  },
  modal: {
    flex: 0,
  },
  positions: {
    height: 300,
  },
});

export default stylesCreator;
