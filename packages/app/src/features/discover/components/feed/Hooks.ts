import { useState } from 'react';
import { FilterButtonItem } from 'src/common/components/filterButtonHorizontalList/types';
import { UseDiscoverFeedProps } from './types';

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
