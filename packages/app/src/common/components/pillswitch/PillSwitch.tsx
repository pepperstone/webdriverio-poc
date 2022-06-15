import React, { useEffect, useState } from "react"
import { Text, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { PillSwitchEntryProps, PillSwitchEntryType, PillSwitchProps } from "./Types"
import styleCreator from './Styles'
import { useTheme } from "src/lib/theme/Theme"

/**
 * a component used to display a selection of entries in a horizontal axis
 * @param props - `PillSwitchProps`
 * ```
 * [option1] [option2] [option3]
 * ```
 */
const PillSwitch = <Type, >(props: PillSwitchProps<Type>) => {
    
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
          props.entries.map((entry) => {

            console.log("is selected %o vs %o == %o", 
              entry.id, props.selectedEntry?.id, entry.id == props.selectedEntry?.id)

            return (
              <PillSwitchEntry 
                entry={entry}
                onPress={props.onSelectedEntry}
                style={props.entryStyle}
                isSelected={entry.id === props.selectedEntry?.id}
              />
            )
          })
        }
      </ScrollView>
    )
}//PillSwitch

/**
 * a component used to display a single entry of an option inside a `PillSwitch`
 * @param props - `PillSwitchEntryProps<Type>`
 */
const PillSwitchEntry = <Type, >(props: PillSwitchEntryProps<Type>) => {

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
}//PillSwitchEntry

export default PillSwitch