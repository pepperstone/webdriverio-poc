import { DiscoverScreen } from '../../navigation/Types';

interface DiscoverScreenProps extends DiscoverScreen {}

interface UseDiscoverProps {
  doLogout: () => void;
  handleLogin: () => void,
  toggleSideMenu: () => void;
  loading: boolean;
}

export type {
  DiscoverScreenProps,
  UseDiscoverProps,
};
