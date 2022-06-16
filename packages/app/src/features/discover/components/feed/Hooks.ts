import { useState } from "react"
import { FilterButtonItem } from "src/common/components/filterButtonHorizontalList/types"
import { generateRandomID } from "src/lib/Utils"
import { UseDiscoverFeedProps } from "./types"

const filterList: FilterButtonItem<string>[] = ["All", "Forex", "Shares", "Crypto", "Indices"].map((entry) => {
  return {
    id: generateRandomID(),
    title: entry,
    value: entry
  }
})

const useDiscoverFeedHook = () : UseDiscoverFeedProps => {

  const [selectedItem, setSelectedItem] = useState(filterList[0])

  return {
    filters: filterList,
    selectedItem,
    setSelectedItem
  }
}

export default useDiscoverFeedHook