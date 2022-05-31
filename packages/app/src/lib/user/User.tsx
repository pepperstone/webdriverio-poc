import store from '../../app/store';

/**
 * Get user object.
 */
export const useUser = () => {
  return {
    ...store.getState().user,
  };
};
