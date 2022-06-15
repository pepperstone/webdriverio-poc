import { ComponentProps, ReactComponentElement, ReactNode } from "react";
import { StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { VStyle } from "src/lib/types/StyleTypes";

///callback selected entry that returns void
type Callback<Type> = (arg: Type) => void

/**
 * defines the props of PillSwitch 
 * @extends ViewProps
 * @type Type - the type of the value of the entries displayed 
 */
export interface PillSwitchProps<Type> extends ViewProps {
  /** contains the entries to be displayed */
  entries           : PillSwitchEntryType<Type>[]
  /** callback returns selected entry */
  onSelectedEntry?  : Callback<PillSwitchEntryType<Type>>
  /** the selected entry */
  selectedEntry?    : PillSwitchEntryType<Type>
  /** overrides the child component style */
  entryStyle?       : VStyle
}//PillSwitchProps


/**
 * defines the props of the PillSwitchEntry
*/
export interface PillSwitchEntryProps<Type> extends ViewProps {
  /** contains the entry to be displayed */
  entry       : PillSwitchEntryType<Type>
  /** callback on press returns the entry */
  onPress?    : Callback<PillSwitchEntryType<Type>>
  /** used to determine if the entry is selected or highlighted */
  isSelected  : boolean
}//PillSwitchEntryProps


/**
 * defines the entry to be displayed inside a PillSwitch
 */
export interface PillSwitchEntryType<Type>  {
  /** unique id for each entry*/
  id      : string
  /** string value represent the entry */
  name    : string 
  /** value of the entry*/ 
  value   : Type 
}//PillSwitchEntryType