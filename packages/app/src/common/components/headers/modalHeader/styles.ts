import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    alignSelf: 'center',
    color: theme.colors.text,
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
  },
});

export default stylesCreator;
