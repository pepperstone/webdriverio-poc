import { Text, View } from 'react-native';

import React from 'react';
import stylesCreator from './Styles';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';

const AnalysisScreen = () => {
  const [styles] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <View style={styles.box} />
      <Text style={styles.text}>{strings.AnalysisScreen.Name}</Text>
    </View>
  );
};

export default AnalysisScreen;
