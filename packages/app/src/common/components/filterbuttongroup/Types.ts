import { ComponentProps, ReactComponentElement, ReactNode } from "react";
import { StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { VStyle } from "src/lib/types/StyleTypes";



export interface FilterButtonGroupProps<Type> extends ViewProps {
  entries: FilterButtonEntry<Type>[]
  onSelectedEntry?: (arg: FilterButtonEntry<Type>) => void
  selectedEntry?: FilterButtonEntry<Type>
  entryStyle?: VStyle
}


export interface FilterButtonProps<Type> extends ViewProps {
  entry: FilterButtonEntry<Type>
  onPress?: (arg: FilterButtonEntry<Type>) => void
  isSelected: boolean
}


/**
 * represents the object as an option displayed 
 * inside the FilterButton
*/
export interface FilterButtonEntry<Type>  {
  id: string
  name: string 
  value: Type 
}