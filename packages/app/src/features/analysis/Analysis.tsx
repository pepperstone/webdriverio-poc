import React, { FC } from 'react';
import { Text, View } from 'react-native';

import AnalysisScreenProps from './types';
import stylesCreator from './Styles';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';

const AnalysisScreen: FC<AnalysisScreenProps> = () => {
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
