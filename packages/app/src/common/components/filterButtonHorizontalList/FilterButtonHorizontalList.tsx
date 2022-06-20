import React from 'react';
import styleCreator from './Styles';
import { useTheme } from 'src/lib/theme/Theme';
import { FlatList, View } from 'react-native';
import useFilterHooks from './Hooks';
import { FilterButtonHorizontalListProps } from './types';

const FilterButtonHorizontalList = ({
  data,
  selectedItemID,
  onSelectedItemID,
  containerStyle,
  listStyle,
  itemStyle,
}: FilterButtonHorizontalListProps) => {
  const [styles] = useTheme(styleCreator);
  const { extractItemID, renderItem } = useFilterHooks({
    selectedItemID,
    onSelectedItemID,
    itemStyle,
  });

  //wrapping flatlist inside a view prevents the flatlist to expand vertically
  return (
    <View style={containerStyle}>
      <FlatList
        horizontal
        style={[styles.list, listStyle]}
        contentContainerStyle={[styles.listContent]}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={extractItemID}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FilterButtonHorizontalList;
