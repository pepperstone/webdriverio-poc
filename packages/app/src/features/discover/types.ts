import { FilterButtonItem } from "src/common/components/filterButtonHorizontalList/types";


interface UseDiscoverProps {
  doLogout: () => void;
  handleLogin: () => void,
  toggleSideMenu: () => void;
  loading: boolean;
}

export type {
  UseDiscoverProps,
};
