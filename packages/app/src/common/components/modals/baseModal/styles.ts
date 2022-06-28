import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  children: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contents: {
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 24,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default stylesCreator;
