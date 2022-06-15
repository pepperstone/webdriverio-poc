import { FilterButtonEntryType } from "src/common/components/filterbuttongroup/Types";


interface UseDiscoverProps {
  doLogout: () => void;
  handleLogin: () => void,
  toggleSideMenu: () => void;
  loading: boolean;
  filter    : FilterButtonEntryType<string> | undefined;
  setFilter : (arg: FilterButtonEntryType<string>) => void;
  entries   : FilterButtonEntryType<string>[];
}

export type {
  UseDiscoverProps,
};
