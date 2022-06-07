
import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../../lib/theme/Theme';
import TabProps from './types';

const stylesCreator: StylesCreator = (theme, scale, moderateScale, props: TabProps ) => StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: scale(5),
    color: props.textColor,
    fontSize: scale(theme.fontSize.s1),
    fontFamily: theme.font.regular,
    fontWeight: theme.fontWeight.semibold,
  },
});

export default stylesCreator;
