import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';

const stylesCreator: StylesCreator = (theme, scale) => StyleSheet.create({
  signinContainer: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  signinWrapper: {
    width: '48%',
  },
  loginButton: {
    backgroundColor: theme.colors.common.buttons.secondary.default,
    borderRadius: 4,
  },
  signUpButton: {
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 24,
    marginTop: 60,
    justifyContent: 'space-between',
  },
  linkText: {
    marginTop: 15,
    fontSize: scale(theme.fontSize.h5),
    fontFamily: theme.font.regular,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.common.white,
  },
  followUsText: {
    marginTop: 150,
    marginLeft: 24,
    fontFamily: theme.font.regular,
    fontWeight: theme.fontWeight.bold,
    fontSize: scale(theme.fontSize.h4),
    color: theme.colors.common.lightGrey,
  },
  socialIconsContainer: {
    marginTop: 18,
    marginLeft: 24,
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  copyWrite: {
    marginTop: 66,
    marginBottom: 19,
    marginLeft: 24,
    fontSize: scale(theme.fontSize.h6),
    fontFamily: theme.font.regular,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.common.white,
  },
});

export default stylesCreator;
