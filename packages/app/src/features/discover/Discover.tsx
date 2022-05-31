import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { DiscoverSVG } from 'assets/icons';
import { DiscoverScreenProps } from './types';
import TextButton from '../../common/components/buttons/textButton/index';
import stylesCreator from './Styles';
import { useDiscoverHook } from './Hooks';
import useStrings from '../..//common/hooks/useStrings';
import { useTheme } from '../../lib/theme/Theme';

const DiscoverScreen: FC<DiscoverScreenProps> = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const { loading, doLogout } = useDiscoverHook();
  const strings = useStrings();

  return (
    <View style={styles.background}>
      <View style={styles.box} />
      <DiscoverSVG fill={theme.colors.card} fillSecondary={theme.colors.text} />
      <Text style={styles.text}>{strings.DiscoverScreen.Name}</Text>

      <View style={styles.form}>
        <TextButton onPress={doLogout} text="Logout" loading={loading} />
      </View>
    </View>
  );
};

export default DiscoverScreen;
