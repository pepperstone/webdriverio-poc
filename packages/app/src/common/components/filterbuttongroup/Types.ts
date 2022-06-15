import { ComponentProps, ReactComponentElement, ReactNode } from "react";
import { StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { VStyle } from "src/lib/types/StyleTypes";



export interface FilterButtonGroupProps<Type> extends ViewProps {
  entries: FilterButtonEntryType<Type>[]
  onSelectedEntry?: (arg: FilterButtonEntryType<Type>) => void
  selectedEntry?: FilterButtonEntryType<Type>
  entryStyle?: VStyle
}


export interface FilterButtonProps<Type> extends ViewProps {
  entry: FilterButtonEntryType<Type>
  onPress?: (arg: FilterButtonEntryType<Type>) => void
  isSelected: boolean
}


export interface FilterButtonEntryType<Type>  {
  id: string
  name: string 
  value: Type 
}