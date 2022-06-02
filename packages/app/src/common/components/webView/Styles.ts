import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../lib/theme/Theme';

const stylesCreator: StylesCreator = () => StyleSheet.create({
  webview: {
    flex: 1,
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    jusityContent: 'space-around',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});

export default stylesCreator;
