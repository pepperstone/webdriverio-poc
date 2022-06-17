import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import styleCreator from './Styles';
import { useTheme } from 'src/lib/theme/Theme';
import { FilterButtonGroupProps, FilterButtonItem } from './types';
import { FilterButton } from './filterButton/FilterButton';
import { View } from 'react-native';

const FilterButtonHorizontalList = <Type,>({
  data,
  selectedItem,
  onSelectedItem,
  containerStyle,
  listStyle,
  itemStyle,
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
        style={itemStyle}
        isSelected={isSelected}
      />
    );
  };

  /*
   * wrapping flatlist inside a view fixes the flex of the flatlist
   * causes it to expand expanding without setting the maxHeight
   */
  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <FlatList
        horizontal={true}
        style={[styles.list, listStyle]}
        contentContainerStyle={[styles.content]}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => renderList(item)}
      ></FlatList>
    </View>
  );
};

export default FilterButtonHorizontalList;
