import { ScrollView, View } from 'react-native';

import FilterButtonHorizontalList from 'src/common/components/lists/filterButtonHorizontalList';
import InstrumentTile from 'src/common/components/tiles/instrumentTile';
import React from 'react';
import TextButton from 'src/common/components/buttons/textButton/index';
import stylesCreator from './styles';
import useDiscoverFeedHook from './hooks';
import { useDiscoverHook } from '../../hooks';
import { useTheme } from 'src/lib/theme/Theme';

const DiscoverFeedScreen = () => {
  const [styles] = useTheme(stylesCreator);
  const { loading, doLogout } = useDiscoverHook();
  const { filters, selectedItemID, setSelectedItemID } = useDiscoverFeedHook();

  return (
    <View style={styles.mainContainer}>
      <FilterButtonHorizontalList
        data={filters}
        selectedItemID={selectedItemID}
        onSelectedItemID={setSelectedItemID}
        containerStyle={styles.filter}
      />
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

export default DiscoverFeedScreen;
