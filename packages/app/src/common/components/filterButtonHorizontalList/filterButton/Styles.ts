import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';
import { FilterButtonProps } from './types';

const stylesCreator: StylesCreator = (theme, scale, moderateScale, props: FilterButtonProps) => StyleSheet.create({

  container: {
    alignItems: 'center',
    backgroundColor: props.isSelected ?
      theme.colors.product.button.selected.default :
      theme.colors.product.button.secondary.default,
    borderRadius: 4,
    height: 36,
    justifyContent: 'center',
    marginHorizontal: 4,
    minWidth: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  text: {
    color:  props.isSelected ?
      theme.colors.product.button.text.strong :
      theme.colors.product.button.text.subdued,
    fontSize: scale(theme.fontSize.h5),
    fontWeight: theme.fontWeight.semibold,
  },

});

export default stylesCreator;
