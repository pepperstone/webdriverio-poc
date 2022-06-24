import { useCallback, useState } from 'react';

import {
  FilterButtonHorizontalListHooks,
  FilterButtonHorizontalListHooksProp,
  FilterButtonItem,
} from './types';

export const useFilterHooks = ({
  selectedItemID: selectedItemIDProp,
  onSelectedItemID,
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

  return {
    extractItemID,
    onSelect,
  };
};

export default useFilterHooks;
