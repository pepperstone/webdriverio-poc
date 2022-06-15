import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

import styleCreator from './Styles'
import { useTheme } from "src/lib/theme/Theme"
import { FilterButtonGroupProps, FilterButtonProps } from "./Types"

/**
 * a component used to display a group of buttons in a horizontal axis
 * intended for filtering, 
 * where a single option can only be selected
 * @param props - `PillSwitchProps`
 * ```
 * component 
 * 
 * [ option1 ] [ option2 ] [ option3 ] ...etc
 * 
 * ```
 */
const FilterButtonGroup = <Type, >(props: FilterButtonGroupProps<Type>) => {
    
  const [styles, theme] = useTheme(styleCreator)
  const {onSelectedEntry, selectedEntry, entryStyle, style} = props
    

  return (
    <ScrollView
      horizontal={true}
      automaticallyAdjustContentInsets={true}
      bounces={false}
      style={[
        styles.pillswitch,
        style
      ]}
      >
      {
        (props.entries || []).map((entry) => {
          return (
            <FilterButton 
              entry={entry}
              onPress={ (selected) => {
                if (selected.id != selectedEntry?.id && onSelectedEntry) {
                  onSelectedEntry(selected)
                }
              }}
              style={entryStyle}
              isSelected={entry.id === selectedEntry?.id}
            />
          )
        })
      }
    </ScrollView>
  )
}

export default FilterButtonGroup


/**
 * a component used to display a single entry of an option inside a `FilterButtonGroup`
 * @param props - `PillSwitchEntryProps<Type>`
 * ```
 * component: 
 * 
 * [ option ]
 * 
 * ```
 */
export const FilterButton = <Type, >(props: FilterButtonProps<Type>) => {

  const [styles, theme] = useTheme(styleCreator)
  const {onPress, isSelected, style, entry} = props

  return (
    <TouchableOpacity 
      key={entry.id}
      onPress={() => onPress ? onPress(entry) : undefined}
      style={[
        styles.pillSwitchEntry,
        isSelected ? styles.pillSwitchEntrySelected : {},
        style
      ]}
    >
      <Text style={[
        styles.pillSwitchEntryText,
        isSelected ? styles.pillSwitchEntrySelectedText : {}
      ]}>{entry.name}</Text>
    </TouchableOpacity>
  )
}

