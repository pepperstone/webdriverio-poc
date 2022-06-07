import { ScrollView, View } from 'react-native';

import InstrumentTile from '../../common/components/tiles/instrumentTile';
import React from 'react';
import TextButton from 'src/common/components/buttons/textButton/index';
import stylesCreator from './Styles';
import { useDiscoverHook } from './Hooks';
import { useTheme } from '../../lib/theme/Theme';

const DiscoverScreen = () => {
  const [styles] = useTheme(stylesCreator);
  const { loading, doLogout } = useDiscoverHook();

  return (
    <View style={styles.background}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        <InstrumentTile id="USD/JPY" />
        <InstrumentTile id="GOLD" />
        <InstrumentTile id="GER40" />
      </ScrollView>

      <View style={styles.form}>
        <TextButton onPress={doLogout} text="Logout" loading={loading} />
      </View>
    </View>
  );
};

export default DiscoverScreen;
