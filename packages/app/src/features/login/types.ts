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
  DoLoginProps,
  UseLoginProps,
  FormKeys,
};
