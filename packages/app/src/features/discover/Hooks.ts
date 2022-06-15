import { UseDiscoverProps } from './types';
import { setIsLoggedIn } from '../../lib/user/slices';
import { setIsSideMenuOpen } from './slices';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppState } from 'src/app/types';
import { PillSwitchEntryType } from '../../common/components/pillswitch/Types';
import {uuid} from '../../lib/Utils'

const entries : PillSwitchEntryType<String>[] = 
  ["All", "Forex", "Shares", "Crypto", "Indices"].map((entry) => {
    return {
      id    : uuid(),
      name  : entry,
      value : entry
    }
  })

export const useDiscoverHook = (): UseDiscoverProps => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { isSideMenuOpen } = useSelector((state: AppState) => state.discover);
  const [filter, setFilter] = useState<PillSwitchEntryType<String>>(entries[0])
  const _entries = useState<PillSwitchEntryType<String>[]>(entries)

  const doLogout = (): void => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(setIsLoggedIn(false));
    }, 2000);
  };

  const handleLogin = () => {
    dispatch(setIsSideMenuOpen(false));
    setTimeout(() => dispatch(setIsLoggedIn(false)), 500);
  };

  const toggleSideMenu = () => dispatch(setIsSideMenuOpen(!isSideMenuOpen));

  return {
    loading,
    doLogout,
    handleLogin,
    toggleSideMenu,
    filter,
    setFilter,
    entries : _entries[0]
  };
};
