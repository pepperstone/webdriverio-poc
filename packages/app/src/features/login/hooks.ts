import { DoLoginProps, FormKeys, UseLoginProps } from './types';

import { AuthStatus } from 'src/lib/user/types';
import { LoginScreenNavigationProp } from '../../navigation/types';
import { isValidEmail } from '@monorepo/shared/helpers/RegexHelpers';
import { setAuthStatus } from '../../lib/user/slices';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useStrings } from '../../common/hooks';

export const useLoginHook = (): UseLoginProps => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const initialValues = { username: '', password: '' };
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState<DoLoginProps>(initialValues);
  const [errors, setErrors] = useState<DoLoginProps>(initialValues);
  const strings = useStrings();
  const dispatch = useDispatch();

  const doLogin = (): void => {
    setErrors({ ...initialValues });

    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(setAuthStatus(AuthStatus.LOGGED_IN));
    }, 2000);
  };

  const validate = (): boolean => {
    // no username
    if (!values.username) {
      setErrors({ ...initialValues, username: strings.LoginScreen.Errors.Username });
      return false;
    }

    // username is not valid email
    if (!isValidEmail(values.username)) {
      setErrors({ ...initialValues, username: strings.LoginScreen.Errors.Email });
      return false;
    }

    // no password
    if (!values.password) {
      setErrors({ ...initialValues, password: strings.LoginScreen.Errors.Password });
      return false;
    }

    return true;
  };

  const goToSignup = (): void => {
    navigation.navigate('Register');
  };

  const onChangeText = (text: string, name: FormKeys): void => {
    setValues({ ...values, [name]: text });
    setErrors({ ...errors, [name]: undefined });
  };

  return {
    errors,
    loading,
    values,
    goToSignup,
    doLogin,
    onChangeText,
  };
};
