import { FilterButtonItem } from 'src/common/components/filterButtonHorizontalList/types';

export interface UseDiscoverFeedProps  {
  filters: FilterButtonItem[];
  selectedItemID: string;
  setSelectedItemID: (id: string) => void;
}
