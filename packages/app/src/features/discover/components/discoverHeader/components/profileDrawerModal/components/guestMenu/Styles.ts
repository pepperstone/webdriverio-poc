import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  copyWrite: {
    color: theme.colors.common.white,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h6),
    fontWeight: theme.fontWeight.regular,
    marginBottom: 19,
    marginLeft: 24,
    marginTop: 66,
  },
  followUsText: {
    color: theme.colors.common.lightGrey,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h4),
    fontWeight: theme.fontWeight.bold,
    marginLeft: 24,
    marginTop: 150,
  },
  linkText: {
    color: theme.colors.common.white,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.h5),
    fontWeight: theme.fontWeight.bold,
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: theme.colors.common.buttons.secondary.default,
    borderRadius: 4,
  },
  signUpButton: {
    borderRadius: 4,
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 80,
  },
  signinWrapper: {
    width: '48%',
  },
  socialIconsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 18,
    width: '60%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 24,
    marginTop: 60,
  },
});

export default stylesCreator;
