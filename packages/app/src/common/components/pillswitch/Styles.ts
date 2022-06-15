import { StyleSheet } from "react-native";
import { StylesCreator } from "src/lib/theme/Theme";

const Style: StylesCreator = (theme) => StyleSheet.create({
  pillswitch: {
    width: '100%',
    paddingVertical: 10,
    paddingLeft: 10
  },

  pillSwitchEntry: {
    backgroundColor: theme.colors.product.button.secondary.default,
    minWidth: 50,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 4
  },

  pillSwitchEntryText: {
    color: theme.colors.product.text.strong,
    fontWeight: theme.fontWeight.semibold
  },

  pillSwitchEntrySelected: {
    backgroundColor: theme.colors.product.button.selected.default,
  },

  pillSwitchEntrySelectedText: {
    color: theme.colors.product.button.text.strong
  }

})

export default Style