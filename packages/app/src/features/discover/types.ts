interface UseDiscoverProps {
  doLogout: () => void;
  handleLogin: () => void,
  handleSignup: () => void;
  toggleSideMenu: () => void;
  loading: boolean;
}

export type {
  UseDiscoverProps,
};
