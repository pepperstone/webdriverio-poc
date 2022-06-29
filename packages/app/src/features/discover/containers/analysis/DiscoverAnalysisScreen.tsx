import { Text, View } from 'react-native';

import React from 'react';
import stylesCreator from './styles';
import useStrings from 'src/common/hooks/useStrings';
import { useTheme } from 'src/lib/theme/Theme';

const DiscoverAnalysisScreen = () => {
  const [styles] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <Text style={styles.text}>
        {strings.DiscoverScreen.Tabs.Analysis.Name}
      </Text>
    </View>
  );
};

export default DiscoverAnalysisScreen;
