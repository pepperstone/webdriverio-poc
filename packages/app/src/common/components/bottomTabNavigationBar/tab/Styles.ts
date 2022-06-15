import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';
import TabProps from './types';

const stylesCreator: StylesCreator = (theme, scale, moderateScale, props: TabProps ) => StyleSheet.create({
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: props.textColor,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.s1),
    fontWeight: theme.fontWeight.semibold,
    marginTop: scale(5),
  },
});

export default stylesCreator;
