import { StyleSheet } from 'react-native';
import { StylesCreator } from "src/lib/theme/Theme";

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  mainContainer: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    color: theme.colors.product.text.strong,
    fontSize: scale(theme.fontSize.h1),
  },
  
  filter: {
    
  },
  
  scrollView: {
    paddingRight: 12
  },

  content: {
    flex: 1,
  },

  form: {
    marginBottom: 15,
    width: '90%',
    alignSelf: 'center'
  },
});

export default stylesCreator;
