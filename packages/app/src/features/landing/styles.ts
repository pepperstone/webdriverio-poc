import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = () => StyleSheet.create({
  centeredText: {
    alignSelf: 'center',
    marginTop: 12,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 25,
  },
});

export default stylesCreator;
