import { useState } from "react"
import { FilterButtonItem } from "src/common/components/filterButtonHorizontalList/types";
import { generateRandomID } from "src/lib/Utils"
import { UseDiscoverFeedProps } from "./types"

const useDiscoverFeedHook = () : UseDiscoverFeedProps => {

  const filterList : string[] = ["All", "Forex", "Shares", "Crypto", "Indices"];

  const [filters] = useState(
    filterList.map((item) : FilterButtonItem => {
      return {
        id: generateRandomID(),
        title: item
      }
    })
  );

  const [selectedItemID, setSelectedItemID] = useState(filters[0].id);

  return {
    filters,
    selectedItemID,
    setSelectedItemID
  };
}

export default useDiscoverFeedHook
