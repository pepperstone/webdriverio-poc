import React from 'react';
import { ScrollView, View } from 'react-native';
import TextButton from 'src/common/components/buttons/textButton/index';
import FilterButtonHorizontalList from 'src/common/components/lists/filterButtonHorizontalList';
import InstrumentTile from 'src/common/components/tiles/instrumentTile';
import { useTheme } from 'src/lib/theme/Theme';
import { useDiscoverHook } from '../../hooks';
import useDiscoverFeedHook from './hooks';
import stylesCreator from './styles';

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
