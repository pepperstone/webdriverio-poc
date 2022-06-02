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
    backgroundColor: theme.colors.buttons.secondaryDefault,
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
    color: theme.colorsInvert.text,
  },
  followUsText: {
    marginTop: 150,
    marginLeft: 24,
    fontFamily: theme.font.regular,
    fontWeight: theme.fontWeight.bold,
    fontSize: scale(theme.fontSize.h4),
    color: theme.colorsInvert.text,
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
    color: theme.colorsInvert.text,
  },
});

export default stylesCreator;
