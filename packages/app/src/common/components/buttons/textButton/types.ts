import { VStyle } from '../../../../lib/types/StyleTypes';
interface TextButtonProps {
  onPress: () => void;
  text: string;
  loading?: boolean;
  buttonStyles?: VStyle;
}

export type { TextButtonProps };
