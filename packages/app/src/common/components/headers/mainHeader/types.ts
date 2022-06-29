import { SvgType } from 'src/lib/types/SvgTypes';

export interface MainHeaderProps {
  title: string,
  leftIcon?: SvgType;
  rightIcon?: SvgType;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
}
