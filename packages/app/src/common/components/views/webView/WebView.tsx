import { ActivityIndicator, Platform } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';

import { WebView } from 'react-native-webview';
import { WebViewProps } from './types';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

const WebViewScreen = ({ route }: WebViewProps) => {
  const [styles, theme] = useTheme(stylesCreator);
  const ref = useRef<WebView>(null);
  const [visible, setVisible] = useState(false);

  const handleLoading = useCallback(() => {
    ref.current?.reload();
    setVisible(true);
  }, []);

  const renderActivityIndicator = useCallback(
    () => (
      <ActivityIndicator
        style={styles.activityIndicator}
        color={theme.colors.common.black}
        size="small"
      />
    ),
    [styles, theme],
  );

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
