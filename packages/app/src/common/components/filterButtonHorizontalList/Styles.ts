import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = () => StyleSheet.create({
  list: {
    paddingVertical: 10,
    width: '100%',
  },
  listContent: {
    paddingHorizontal: 10,
  },
});

export default stylesCreator;
