import { SvgType } from 'src/lib/types/SvgTypes';
import { VStyle } from '../../../../lib/types/StyleTypes';

interface SvgButtonProps {
  onPress: () => void;
  buttonStyles?: VStyle;
  Icon: SvgType;
  fill: string;
  fillSecondary?: string;
}

export type { SvgButtonProps };
