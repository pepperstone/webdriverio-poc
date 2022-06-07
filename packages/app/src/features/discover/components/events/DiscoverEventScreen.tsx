import React from 'react';
import { Text, View } from 'react-native';

import stylesCreator from './Styles';
import useStrings from 'src/common/hooks/useStrings';
import { useTheme } from 'src/lib/theme/Theme';

const DiscoverEventScreen = () => {
  const [styles] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <Text style={styles.text}>{strings.DiscoverScreen.Tabs.Events.Name}</Text>
    </View>
  );
};

export default DiscoverEventScreen;