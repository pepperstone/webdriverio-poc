import { NavigatorParams } from 'src/navigation/types';
export interface UseDiscoverProps {
  doLogout: () => void;
  handleLogin: () => void,
  handleSignup: () => void;
  toggleSideMenu: () => void;
  loading: boolean;
}

export type DiscoverTabStackParamList = {
  Event: undefined;
  Analysis: undefined;
  Feed: undefined;
};

export type DiscoverParamList = {
  DiscoverScreen: NavigatorParams<DiscoverTabStackParamList>;
};
