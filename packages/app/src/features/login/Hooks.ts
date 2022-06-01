import { DoLoginProps, FormKeys, UseLoginProps } from './types';

import { LoginScreenNavigationProp } from '../../navigation/Types';
import { isValidEmail } from '@monorepo/shared/helpers/RegexHelpers';
import { setIsLoggedIn } from '../../lib/user/slices';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useStrings } from '../../common/hooks';

export const useLoginHook = (): UseLoginProps => {
  const initialValues = { username: '', password: '' };
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState<DoLoginProps>(initialValues);
  const [errors, setErrors] = useState<DoLoginProps>(initialValues);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const strings = useStrings();
  const dispatch = useDispatch();

  const doLogin = (): void => {
    setErrors({ ...initialValues });

    if (!validate()) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(setIsLoggedIn(true));
    }, 2000);
  };

  const doRegister = (): void => {
    navigation.navigate('Register');
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

  const onChangeText = (text: string, name: FormKeys): void => {
    setValues({ ...values, [name]: text });
    setErrors({ ...errors, [name]: undefined });
  };

  return {
    errors,
    loading,
    values,
    doLogin,
    doRegister,
    onChangeText,
  };
};
