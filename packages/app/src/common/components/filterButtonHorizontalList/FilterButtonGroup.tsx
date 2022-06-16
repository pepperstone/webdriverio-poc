import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import styleCreator from './Styles';
import { useTheme } from 'src/lib/theme/Theme';
import { FilterButtonGroupProps, FilterButtonItem } from './types';
import { FilterButton } from './filterButton/FilterButton';
import { Text, View } from 'react-native';

const FilterButtonHorizontalList = <Type,>({
  data,
  selectedItem,
  onSelectedItem,
  itemStyle: entryStyle,
  containerStyle,
}: FilterButtonGroupProps<Type>) => {
  const [styles, theme] = useTheme(styleCreator);

  const [_selectedItem, setSelectedItem] = useState(selectedItem);

  const onSelect = (id: string, item: FilterButtonItem<Type>) => {
    if (id !== _selectedItem.id) {
      onSelectedItem(item);
      setSelectedItem(item);
    }
  };

  const renderList = (item: FilterButtonItem<Type>) => {
    const isSelected = item.id === _selectedItem?.id;
    return (
      <FilterButton
        id={item.id}
        title={item.title}
        onPress={(id: string) => onSelect(id, item)}
        style={entryStyle}
        isSelected={isSelected}
      />
    );
  };

  return (
    <View style={[containerStyle]}>
      <FlatList
        horizontal={true}
        style={[styles.container]}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => renderList(item)}
      ></FlatList>
    </View>
  );
};

export default FilterButtonHorizontalList;
