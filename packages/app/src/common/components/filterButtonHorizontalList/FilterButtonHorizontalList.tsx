import React, { memo, useCallback, useState } from 'react';
import styleCreator from './Styles';
import { useTheme } from 'src/lib/theme/Theme';
import {
  FilterButtonHorizontalListProps as FilterButtonHorizontalListProps,
  FilterButtonItem,
} from './types';
import { FilterButton } from './filterButton/FilterButton';
import {
  ListRenderItem,
  FlatList,
  View,
  ListRenderItemInfo,
} from 'react-native';

const FilterButtonHorizontalList = ({
  data,
  selectedItemID,
  onSelectedItemID,
  containerStyle,
  listStyle,
  itemStyle,
}: FilterButtonHorizontalListProps) => {
  const [styles, theme] = useTheme(styleCreator);
  const [_selectedItemID, setSelectedItemID] = useState(selectedItemID);

  const extractItemID = useCallback(
    ({ id }: FilterButtonItem): string => {
      return id;
    },
    [data],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<FilterButtonItem>) => {
      const isSelected = item.id === _selectedItemID;
      return (
        <FilterButton
          id={item.id}
          title={item.title}
          onPress={onSelect}
          style={itemStyle}
          isSelected={isSelected}
        />
      );
    },
    [_selectedItemID],
  );

  const onSelect = useCallback(
    (id: string) => {
      if (id !== _selectedItemID) {
        onSelectedItemID(id);
        setSelectedItemID(id);
      }
    },
    [_selectedItemID],
  );

  //wrapping flatlist inside a view fixes the flex issue of the flatlist
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <FlatList
        horizontal
        style={[styles.list, listStyle]}
        contentContainerStyle={[styles.content]}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={extractItemID}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FilterButtonHorizontalList;
