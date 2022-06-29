import { StyleSheet } from 'react-native';
import { StylesCreator } from 'src/lib/theme/Theme';
import TabProps from './types';

const stylesCreator: StylesCreator = (theme, scale, _, props: TabProps ) => StyleSheet.create({
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: props.activeColor,
    fontFamily: theme.font.regular,
    fontSize: scale(theme.fontSize.s1),
    fontWeight: theme.fontWeight.semibold,
    paddingVertical: scale(5),
  },
});

export default stylesCreator;
