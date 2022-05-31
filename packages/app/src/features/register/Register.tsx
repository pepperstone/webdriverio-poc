import React, { FC } from 'react';

import { RegisterScreenProps } from './types';
import { WebView } from 'react-native-webview';
import stylesCreator from './Styles';
import useStrings from '../../common/hooks/useStrings';
import { useTheme } from '../../lib/theme/Theme';

const RegisterScreen: FC<RegisterScreenProps> = () => {
  const [styles] = useTheme(stylesCreator);
  const strings = useStrings();

  return (
    <WebView
      source={{
        uri: strings.RegisterScreen.URL,
      }}
      style={styles.webview}
    />
  );
};

export default RegisterScreen;
