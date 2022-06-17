import { type } from "os";
import { FilterButtonItem } from "src/common/components/filterButtonHorizontalList/types"

interface UseDiscoverFeedProps  {
  filters: FilterButtonItem[];
  selectedItemID: string;
  setSelectedItemID: (id: string) => void;
}

export type {
  UseDiscoverFeedProps
}
