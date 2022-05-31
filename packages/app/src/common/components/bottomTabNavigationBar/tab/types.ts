import { ReactNode } from 'react';

interface TabProps {
  name: string;
  textColor: string;
  tabIcon: ReactNode;
  onTabPress: (name: string) => void;
}

export default TabProps;
