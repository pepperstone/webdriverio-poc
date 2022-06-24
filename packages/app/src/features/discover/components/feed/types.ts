import { FilterButtonItem } from 'src/common/components/lists/filterButtonHorizontalList/types';

export interface UseDiscoverFeedProps  {
  filters: FilterButtonItem[];
  selectedItemID: string;
  setSelectedItemID: (id: string) => void;
}
