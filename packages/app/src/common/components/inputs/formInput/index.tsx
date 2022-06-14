import React, { forwardRef } from 'react';
import { Text, TextInput } from 'react-native';
import { useTheme } from '../../../../lib/theme/Theme';
import stylesCreator from './Styles';
import { FormInputProps } from './types';

const FormInput = forwardRef<TextInput, FormInputProps>(
  ({ error, ...props }, ref) => {
    const [styles, theme] = useTheme(stylesCreator);
    const style = [styles.input, error ? styles.errorInput : {}];

    return (
      <>
        <TextInput
          placeholderTextColor={theme.colors.product.text.subdued}
          ref={ref}
          {...props}
          style={style}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </>
    );
  },
);

export default FormInput;
