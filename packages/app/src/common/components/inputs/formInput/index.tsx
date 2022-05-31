import React, { forwardRef } from 'react';
import { Text, TextInput } from 'react-native';

import { FormInputProps } from './types';
import stylesCreator from './Styles';
import { useTheme } from '../../../../lib/theme/Theme';

const FormInput = forwardRef<TextInput, FormInputProps>(
  ({ error, ...props }, ref) => {
    const [styles] = useTheme(stylesCreator);
    const style = [styles.input, error ? styles.errorInput : {}];

    return (
      <>
        <TextInput ref={ref} {...props} style={style} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </>
    );
  },
);

export default FormInput;
