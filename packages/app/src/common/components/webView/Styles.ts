import { StyleSheet } from 'react-native';
import { StylesCreator } from '../../../lib/theme/Theme';

const stylesCreator: StylesCreator = () => StyleSheet.create({
  activityIndicator: {
    alignContent: 'center',
    bottom: 0,
    flexWrap: 'wrap',
    jusityContent: 'space-around',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  webview: {
    flex: 1,
  },
});

export default stylesCreator;
