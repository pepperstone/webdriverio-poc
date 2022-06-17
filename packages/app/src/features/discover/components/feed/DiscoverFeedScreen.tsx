import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import InstrumentTile from '../../../../common/components/tiles/instrumentTile';
import TextButton from 'src/common/components/buttons/textButton/index';
import stylesCreator from './Styles';
import { useDiscoverHook } from '../../Hooks';
import { useTheme } from '../../../../lib/theme/Theme';
import FilterButtonHorizontalList from 'src/common/components/filterButtonHorizontalList';
import useDiscoverFeedHook from './Hooks';

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
      <View style={styles.content}></View>
      <View style={styles.form}>
        <TextButton onPress={doLogout} text="Logout" loading={loading} />
      </View>
    </View>
  );
};

export default DiscoverFeedScreen;
