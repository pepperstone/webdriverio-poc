import React, { FC } from 'react';
import { Text, View } from 'react-native';

import TextButton from 'src/common/components/buttons/textButton/index';
import { useDiscoverHook } from '../../Hooks';
import { useTheme } from 'src/lib/theme/Theme';

import useStrings from 'src/common/hooks/useStrings';
import stylesCreator from './Styles';
import DiscoverFeedScreenProps from './types';

const DiscoverFeedScreen: FC<DiscoverFeedScreenProps> = () => {
  const [styles] = useTheme(stylesCreator);
  const strings = useStrings();
  const { loading, doLogout } = useDiscoverHook();

  return (
    <View style={styles.background}>
      <Text style={styles.text}>{strings.DiscoverScreen.Tabs.Feed.Name}</Text>
      <View style={styles.form}>
        <TextButton onPress={doLogout} text="Logout" loading={loading} />
      </View>
    </View>
  );
};

export default DiscoverFeedScreen;
