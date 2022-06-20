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
