import React from 'react';
import { useCallback, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import FilterButton from './filterButton';
import {
  FilterButtonHorizontalListHooks,
  FilterButtonHorizontalListHooksProp,
  FilterButtonItem,
} from './types';

export const useFilterHooks = ({
  selectedItemID: selectedItemIDProp,
  onSelectedItemID,
  itemStyle,
}: FilterButtonHorizontalListHooksProp): FilterButtonHorizontalListHooks => {
  const [selectedItemID, setSelectedItemID] = useState(selectedItemIDProp);

  const extractItemID = ({ id }: FilterButtonItem): string => {
    return id;
  };

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

  return {
    extractItemID,
    renderItem,
  };
};

export default useFilterHooks;
