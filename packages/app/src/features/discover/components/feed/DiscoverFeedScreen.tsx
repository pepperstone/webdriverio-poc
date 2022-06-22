import { ScrollView, View } from 'react-native';

import FilterButtonHorizontalList from 'src/common/components/filterButtonHorizontalList';
import InstrumentTile from 'src/common/components/tiles/instrumentTile';
import React from 'react';
import TextButton from 'src/common/components/buttons/textButton/index';
import stylesCreator from './Styles';
import useDiscoverFeedHook from './Hooks';
import { useDiscoverHook } from '../../Hooks';
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
