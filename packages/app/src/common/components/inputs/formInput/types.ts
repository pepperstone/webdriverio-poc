import { TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
  error: string;
}

export type {
  FormInputProps,
};
