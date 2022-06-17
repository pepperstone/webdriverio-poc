import { ComponentProps, ReactComponentElement, ReactNode } from "react";
import { StyleProp, StyleSheet, ViewProps, ViewStyle } from "react-native";
import { VStyle } from "src/lib/types/StyleTypes";

export interface FilterButtonGroupProps<Type> {
  data: FilterButtonItem<Type>[];
  selectedItem: FilterButtonItem<Type>;
  onSelectedItem: (arg: FilterButtonItem<Type>) => void;
  containerStyle?: VStyle
  listStyle?: VStyle
  itemStyle?: VStyle;
}

export interface FilterButtonItem<Type>  {
  id: string;
  title: string;
  value: Type;
}