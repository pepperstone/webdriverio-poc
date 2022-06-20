import { AppState } from 'src/app/types';
import { UseDiscoverProps } from './types';
import { setIsLoggedIn } from '../../lib/user/slices';
import { setIsSideMenuOpen } from './slices';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';

export const useDiscoverHook = (): UseDiscoverProps => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { isSideMenuOpen } = useSelector((state: AppState) => state.discover);

  const doLogout = (): void => {
    setLoading(true);

    setTimeout(() => {
      setLoading(true);
      dispatch(setIsLoggedIn(true));
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
