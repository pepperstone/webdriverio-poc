import { PillSwitchEntryType } from "../../common/components/pillswitch/Types";

interface UseDiscoverProps {
  doLogout: () => void;
  handleLogin: () => void,
  toggleSideMenu: () => void;
  loading: boolean;
  filter    : PillSwitchEntryType<String>;
  setFilter : (arg: PillSwitchEntryType<String>) => void;
  entries   : PillSwitchEntryType<String>[];
}

export type {
  UseDiscoverProps,
};
