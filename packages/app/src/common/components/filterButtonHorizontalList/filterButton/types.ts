import { VStyle } from "src/lib/types/StyleTypes";

export interface FilterButtonProps {
  id: string;
  title: string;
  onPress: (id: string) => void
  isSelected: boolean
  style?: VStyle
}