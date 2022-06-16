import { type } from "os";
import { FilterButtonItem } from "src/common/components/filterButtonHorizontalList/types"

interface UseDiscoverFeedProps  {
  filters: FilterButtonItem<string>[];
  selectedItem: FilterButtonItem<string>;
  setSelectedItem: (arg: FilterButtonItem<string>) => void;
}

export type {
  UseDiscoverFeedProps
}