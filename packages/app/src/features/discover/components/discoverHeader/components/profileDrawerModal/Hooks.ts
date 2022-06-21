import { useDiscoverHook } from 'src/features/discover/Hooks';
import { ProfileDrawerModalHooks } from './types';

export const useProfileDrawerModalHooks = () : ProfileDrawerModalHooks  => {

  const { toggleSideMenu, doLogout } = useDiscoverHook();

  const handleLogout = () => {
    toggleSideMenu();
    setTimeout(() => {
      doLogout();
    });
  };

  return {
    handleLogout,
  };
};
