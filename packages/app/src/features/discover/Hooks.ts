import { UseDiscoverProps } from './types';
import { setIsLoggedIn } from '../../lib/user/slices';
import { setIsSideMenuOpen } from './slices';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AppState } from 'src/app/types';

export const useDiscoverHook = (): UseDiscoverProps => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const { isSideMenuOpen } = useSelector((state: AppState) => state.discover);

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
  };
};
