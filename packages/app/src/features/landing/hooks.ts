import { AuthStatus } from 'src/lib/user/types';
import { LandingScreenNavigationProp } from 'src/navigation/types';
import { UseLandingProps } from './types';
import { setAuthStatus } from '../../lib/user/slices';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const useLandingHook = (): UseLandingProps => {
  const navigation = useNavigation<LandingScreenNavigationProp>();
  const dispatch = useDispatch();

  const goToLogin = (): void => {
    navigation.navigate('Login');
  };

  const goToSignup = (): void => {
    navigation.navigate('Register');
  };

  const goToDiscover = (): void => {
    dispatch(setAuthStatus(AuthStatus.GUEST));
  };

  return {
    goToLogin,
    goToSignup,
    goToDiscover,
  };
};
