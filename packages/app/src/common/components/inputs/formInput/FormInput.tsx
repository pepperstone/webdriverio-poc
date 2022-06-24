import React, { forwardRef } from 'react';
import { Text, TextInput } from 'react-native';

import { FormInputProps } from './types';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

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
