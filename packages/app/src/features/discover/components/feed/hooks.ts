import { FilterButtonItem } from 'src/common/components/lists/filterButtonHorizontalList/types';
import { UseDiscoverFeedProps } from './types';
import { useState } from 'react';

const filters : FilterButtonItem[] = [
  {
    id: '0',
    title: 'All',
  },
  {
    id: '1',
    title: 'Forex',
  },
  {
    id: '2',
    title: 'Shares',
  },
  {
    id: '3',
    title: 'Crypto',
  },
  {
    id: '4',
    title: 'Indices',
  },
];

const useDiscoverFeedHook = () : UseDiscoverFeedProps => {

  const [selectedItemID, setSelectedItemID] = useState(filters[0].id);

  return {
    filters,
    selectedItemID,
    setSelectedItemID,
  };
};

export default useDiscoverFeedHook;
