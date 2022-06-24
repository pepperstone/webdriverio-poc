import { useDispatch, useSelector } from 'react-redux';

import { AppState } from 'src/app/types';
import { AuthStatus } from 'src/lib/user/types';
import { LoginScreenNavigationProp } from 'src/navigation/types';
import { UseDiscoverProps } from './types';
import { setAuthStatus } from '../../lib/user/slices';
import { setIsSideMenuOpen } from './slices';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const useDiscoverHook = (): UseDiscoverProps => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { isSideMenuOpen } = useSelector((state: AppState) => state.discover);

  const doLogout = (): void => {
    if (isSideMenuOpen) dispatch(setIsSideMenuOpen(false)); //closes the sidebar to prevent navigation issues
    setLoading(true);
    setTimeout(() => {
      dispatch(setAuthStatus(AuthStatus.NONE));
    }, 500);
  };

  const handleLogin = () => {
    dispatch(setIsSideMenuOpen(false));
    navigation.navigate('Login');
  };

  const handleSignup = () => {
    dispatch(setIsSideMenuOpen(false));
    navigation.navigate('Register');
  };

  const toggleSideMenu = () => dispatch(setIsSideMenuOpen(!isSideMenuOpen));

  return {
    loading,
    doLogout,
    handleLogin,
    handleSignup,
    toggleSideMenu,
  };
};
