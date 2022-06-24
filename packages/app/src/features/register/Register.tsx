import React from 'react';
import { WebView } from 'react-native-webview';
import stylesCreator from './styles';
import useStrings from '../../common/hooks/useStrings';
import { useTheme } from 'src/lib/theme/Theme';

const RegisterScreen = () => {
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
