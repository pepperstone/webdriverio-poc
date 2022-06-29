import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
    width: '90%',
  },
  modal: {
    margin: 0,
    marginLeft: theme.SCREEN_WIDTH * 0.15,
    width: theme.SCREEN_WIDTH * 0.85,
  },
  safeAreaView: {
    backgroundColor: theme.colors.common.darkGrey,
    flex: 1,
    width: '100%',
  },
});

export default stylesCreator;
