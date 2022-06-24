import { FilterButtonHorizontalListProps, FilterButtonItem } from './types';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import React, { useCallback } from 'react';

import { FilterButton } from '../../buttons';
import styleCreator from './styles';
import useFilterHooks from './hooks';
import { useTheme } from 'src/lib/theme/Theme';

const FilterButtonHorizontalList = ({
  data,
  selectedItemID,
  onSelectedItemID,
  containerStyle,
  listStyle,
  itemStyle,
}: FilterButtonHorizontalListProps) => {
  const [styles] = useTheme(styleCreator);
  const { extractItemID, onSelect } = useFilterHooks({
    selectedItemID,
    onSelectedItemID,
    itemStyle,
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<FilterButtonItem>) => {
      const isSelected = item.id === selectedItemID;
      return (
        <FilterButton
          title={item.title}
          id={item.id}
          onPress={onSelect}
          style={itemStyle}
          isSelected={isSelected}
        />
      );
    },
    [selectedItemID, itemStyle, onSelect],
  );

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
