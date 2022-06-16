import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { StylesCreator } from "src/lib/theme/Theme";

const Style: StylesCreator = (theme) => StyleSheet.create({
  pillswitch: {
    width: '100%',
    padding: 10
  },

  pillSwitchEntry: {
    backgroundColor: theme.colors.product.button.secondary.default,
    minWidth: 50,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 4
  },

  pillSwitchEntryText: {
    color: theme.colors.product.text.strong,
    fontWeight: theme.fontWeight.semibold,
    fontSize: scale(theme.fontSize.h5)
  },

  pillSwitchEntrySelected: {
    backgroundColor: theme.colors.product.button.selected.default,
  },

  pillSwitchEntrySelectedText: {
    color: theme.colors.product.button.text.strong
  }

})

export default Style