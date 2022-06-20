import React, { useCallback, useState } from 'react';
import styleCreator from './Styles';
import { useTheme } from 'src/lib/theme/Theme';
import {
  FilterButtonHorizontalListProps as FilterButtonHorizontalListProps,
  FilterButtonItem,
} from './types';
import { FilterButton } from './filterButton/FilterButton';
import { FlatList, View, ListRenderItemInfo } from 'react-native';

const FilterButtonHorizontalList = ({
  data,
  selectedItemID: selectedItemIDProp,
  onSelectedItemID,
  containerStyle,
  listStyle,
  itemStyle,
}: FilterButtonHorizontalListProps) => {
  const [styles] = useTheme(styleCreator);
  const [selectedItemID, setSelectedItemID] = useState(selectedItemIDProp);

  const extractItemID = useCallback(({ id }: FilterButtonItem): string => {
    return id;
  }, []);

  const onSelect = useCallback(
    (id: string) => {
      if (id !== selectedItemID) {
        onSelectedItemID(id);
        setSelectedItemID(id);
      }
    },
    [selectedItemID, onSelectedItemID],
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<FilterButtonItem>) => {
      const isSelected = item.id === selectedItemID;
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
    [selectedItemID, itemStyle, onSelect],
  );

  //wrapping flatlist inside a view fixes the flex issue of the flatlist
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
