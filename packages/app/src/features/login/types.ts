import { LoginScreenNavigationProp } from '../../navigation/Types';

interface LoginScreenProps extends LoginScreenNavigationProp {}

interface DoLoginProps {
  username: string;
  password: string;
}

interface UseLoginProps {
  doLogin: () => void;
  doRegister: () => void;
  onChangeText: (text: string, name: FormKeys) => void;
  values: DoLoginProps;
  loading: boolean;
  errors: DoLoginProps;
}

type FormKeys = keyof DoLoginProps;

export type {
  LoginScreenProps,
  DoLoginProps,
  UseLoginProps,
  FormKeys,
};
