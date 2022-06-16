import { StyleSheet } from "react-native";
import { StylesCreator } from "src/lib/theme/Theme";
import { FilterButtonProps } from "./types";

const stylesCreator: StylesCreator = (theme, scale, moderateScale, props: FilterButtonProps) => StyleSheet.create({

  container: {
    backgroundColor: props.isSelected ? theme.colors.product.button.selected.default : theme.colors.product.button.secondary.default,
    minWidth: 50,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 4,
  },

  text: {
    color:  props.isSelected ? theme.colors.product.button.text.strong : theme.colors.product.text.strong,
    fontWeight: theme.fontWeight.semibold,
    fontSize: scale(theme.fontSize.h5)
  },

})

export default stylesCreator