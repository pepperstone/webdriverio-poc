import { UseDiscoverProps } from './types';
import { setIsLoggedIn } from '../../lib/user/slices';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const useDiscoverHook = (): UseDiscoverProps => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const doLogout = (): void => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(setIsLoggedIn(false));
    }, 2000);
  };

  return {
    loading,
    doLogout,
  };
};
