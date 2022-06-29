import { TStyle, VStyle } from 'src/lib/types/StyleTypes';

interface TextButtonProps {
  onPress: () => void;
  text: string;
  loading?: boolean;
  buttonStyles?: VStyle;
  textStyles?: TStyle;
  disabled?: boolean;
}

export type { TextButtonProps };
