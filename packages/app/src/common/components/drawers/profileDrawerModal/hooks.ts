import { useDispatch } from 'react-redux';
import { setAuthStatus } from 'src/lib/user/slices';
import { AuthStatus } from 'src/lib/user/types';
import { ProfileDrawerModalHooks } from './types';

export const useProfileDrawerModalHooks = (): ProfileDrawerModalHooks => {
  const dispatch = useDispatch();

  const setAuthKYCIncomplete = () => {
    dispatch(setAuthStatus(AuthStatus.KYC_INCOMPLETE));
  };
  const setAuthComplete = () => {
    dispatch(setAuthStatus(AuthStatus.LOGGED_IN));
  };

  return {
    setAuthKYCIncomplete,
    setAuthComplete,
  };
};
