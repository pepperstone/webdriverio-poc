import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({
  safeAreaView: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.colors.common.darkGrey,
  },
  modal: {
    margin: 0,
    width: theme.SCREEN_WIDTH * 0.85,
    marginLeft: theme.SCREEN_WIDTH * 0.15,
  },
  closeButton: {
    marginTop: 10,
    marginLeft: 30,
  },
});

export default stylesCreator;
