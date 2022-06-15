import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"

import styleCreator from './Styles'
import { useTheme } from "src/lib/theme/Theme"
import { FilterButtonGroupProps, FilterButtonProps } from "./Types"

/**
 * a component used to display a selection of entries in a horizontal axis
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

    return (
      <ScrollView
        horizontal={true}
        automaticallyAdjustContentInsets={true}
        bounces={false}
        style={[
          styles.pillswitch,
          props.style
        ]}
      >
        {
          (props.entries || []).map((entry) => {
            return (
              <FilterButton 
                entry={entry}
                onPress={ (selected) => {
                  if (selected.id != props.selectedEntry?.id && props.onSelectedEntry) {
                    props.onSelectedEntry(selected)
                  }
                }}
                style={props.entryStyle}
                isSelected={entry.id === props.selectedEntry?.id}
              />
            )
          })
        }
      </ScrollView>
    )
}

export default FilterButtonGroup


/**
 * a component used to display a single entry of an option inside a `PillSwitch`
 * @param props - `PillSwitchEntryProps<Type>`
 * ```
 * component: 
 * 
 * [ option ]
 * 
 * ```
 */
const FilterButton = <Type, >(props: FilterButtonProps<Type>) => {

  const [styles, theme] = useTheme(styleCreator)

  return (
    <TouchableOpacity 
      key={props.entry.id}
      onPress={() => props.onPress ? props.onPress(props.entry) : undefined}
      style={[
        styles.pillSwitchEntry,
        props.isSelected ? styles.pillSwitchEntrySelected : {},
        props.style
      ]}
    >
      <Text style={[
        styles.pillSwitchEntryText,
        props.isSelected ? styles.pillSwitchEntrySelectedText : {}
      ]}>{props.entry.name}</Text>
    </TouchableOpacity>
  )
}

