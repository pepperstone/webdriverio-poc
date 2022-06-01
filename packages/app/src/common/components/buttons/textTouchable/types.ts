import { Style } from '../../../../lib/types/StyleTypes';

interface TextTouchableProps {
  text: string;
  onPress: () => void;
  textStyles: Style;
}

export type { TextTouchableProps };
