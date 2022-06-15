import { FilterButtonEntry } from "src/common/components/filterbuttongroup/Types";


interface UseDiscoverProps {
  doLogout: () => void;
  handleLogin: () => void,
  toggleSideMenu: () => void;
  loading: boolean;
  filter    : FilterButtonEntry<string> | undefined;
  setFilter : (arg: FilterButtonEntry<string>) => void;
  entries   : FilterButtonEntry<string>[];
}

export type {
  UseDiscoverProps,
};
