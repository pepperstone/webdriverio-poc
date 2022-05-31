import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  switch: {
    marginRight: scale(20),
  },
});

export default stylesCreator;
