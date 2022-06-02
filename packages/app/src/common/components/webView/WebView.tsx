import React, { FC, useCallback, useRef, useState } from 'react';

import { ActivityIndicator, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

import { useTheme } from '../../../lib/theme/Theme';

import stylesCreator from './Styles';
import { WebViewProps } from './types';

const WebViewScreen: FC<WebViewProps> = ({ route }) => {
  const [styles, theme] = useTheme(stylesCreator);
  const ref = useRef<WebView>(null);
  const [visible, setVisible] = useState(false);

  const handleLoading = useCallback(() => {
    ref.current?.reload();
    setVisible(true);
  }, []);

  const renderActivityIndicator = useCallback(() => (
    <ActivityIndicator
      style={styles.activityIndicator}
      color={theme.colors.black}
      size="small"
    />
  ), [styles, theme]);

  return (
    <>
      <WebView
        ref={ref}
        source={{ uri: route.params.url }}
        style={styles.webview}
        pullToRefreshEnabled
        originWhitelist={['*']}
        onLoad={(syntheticEvent) => {
          if (Platform.OS === 'ios') return;
          const { nativeEvent } = syntheticEvent;
          if (nativeEvent.title === '') handleLoading();
          if (nativeEvent.title !== '') setVisible(false);
        }}
      />
      {visible && renderActivityIndicator()}
  </>
  );
};

export default WebViewScreen;
