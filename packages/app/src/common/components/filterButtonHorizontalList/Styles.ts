import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { StylesCreator } from "src/lib/theme/Theme";

const stylesCreator: StylesCreator = (theme) => StyleSheet.create({

  mainContainer: {

  },

  list: {
    width: '100%',
    paddingVertical: 10
  },

  content: {
    paddingHorizontal: 10
  }
})

export default stylesCreator
