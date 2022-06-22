import { SvgType } from 'src/lib/types/SvgTypes';

export interface ModalHeaderProps {
  icon: SvgType;
  text: string;
  onPress: () => void;
}
