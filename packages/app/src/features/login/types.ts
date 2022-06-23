interface DoLoginProps {
  username: string;
  password: string;
}

interface UseLoginProps {
  doLogin: () => void;
  onChangeText: (text: string, name: FormKeys) => void;
  goToSignup: () => void;
  values: DoLoginProps;
  loading: boolean;
  errors: DoLoginProps;
}

type FormKeys = keyof DoLoginProps;

export type {
  DoLoginProps,
  UseLoginProps,
  FormKeys,
};
