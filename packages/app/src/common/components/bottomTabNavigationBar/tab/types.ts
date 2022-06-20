import { SvgType } from 'src/lib/types/SvgTypes';
interface TabProps {
  name: string;
  activeColor: string;
  Icon: SvgType;
  fill: string;
  onTabPress: (name: string) => void;
}

export default TabProps;
