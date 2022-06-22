import { VStyle } from 'src/lib/types/StyleTypes';

export interface FilterButtonHorizontalListProps {
  data: FilterButtonItem[];
  selectedItemID?: string;
  onSelectedItemID: (id: string) => void;
  containerStyle?: VStyle
  listStyle?: VStyle
  itemStyle?: VStyle;
}

export interface FilterButtonItem  {
  id: string;
  title: string;
}

export interface FilterButtonHorizontalListHooks {
  extractItemID: (item: FilterButtonItem) =>  string
  onSelect: (id: string) => void
}

export interface FilterButtonHorizontalListHooksProp {
  selectedItemID?: string;
  onSelectedItemID: (id: string) => void;
  itemStyle?: VStyle;
}
