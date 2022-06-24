import { Text, View } from 'react-native';

import React from 'react';
import stylesCreator from './styles';
import { useStrings } from 'src/common/hooks';
import { useTheme } from 'src/lib/theme/Theme';

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
