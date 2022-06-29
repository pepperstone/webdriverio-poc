import { darkTheme, lightTheme } from '@monorepo/shared/theme/colors';
import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 61,
    },

    group: {
      alignItems: 'stretch',
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
      justifyContent: 'space-evenly',
      paddingVertical: 6,
    },

    groupLast: {
      alignItems: 'flex-start',
      paddingTop: 6,
    },

    linkButton: {
      color: theme.colors.common.white,
      fontFamily: theme.font.regular,
      fontSize: scale(theme.fontSize.h5),
      fontWeight: theme.fontWeight.bold,
      marginVertical: 12,
    },

    profileGroup: {
      alignItems: 'flex-start',
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
      paddingVertical: 6,
    },

    profileIncompleteButton: {
      backgroundColor: darkTheme.product.button.primary.hover,
      borderRadius: 4,
      marginTop: 12,
      marginVertical: 6,
      minHeight: 36,
      paddingHorizontal: 16,
      paddingVertical: 8,
      width: '100%',
    },

    profileIncompleteButtonDisabled: {
      backgroundColor: darkTheme.product.button.secondary.default,
      borderRadius: 4,
      marginTop: 12,
      marginVertical: 6,
      minHeight: 36,
      paddingHorizontal: 16,
      paddingVertical: 8,
      width: '100%',
    },

    profileIncompleteButtonText: {
      alignSelf: 'center',
      color: theme.colors.common.black,
      fontFamily: theme.font.medium,
      fontSize: scale(theme.fontSize.h5),
      fontWeight: theme.fontWeight.semibold,
    },

    profileIncompleteContainer: {
      paddingBottom: 12,
    },

    profileIncompleteMessage: {
      color: lightTheme.product.button.text.strong,
      fontFamily: theme.font.medium,
      fontWeight: theme.fontWeight.semibold,
      marginVertical: 6,
    },
  });

export default stylesCreator;
