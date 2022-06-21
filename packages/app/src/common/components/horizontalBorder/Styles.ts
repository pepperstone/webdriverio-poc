import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator : StylesCreator = (theme) => StyleSheet.create({

  border: {
    backgroundColor: theme.colors.border,
    height: 1,
    width: '100%',
  },

});

export default stylesCreator;
