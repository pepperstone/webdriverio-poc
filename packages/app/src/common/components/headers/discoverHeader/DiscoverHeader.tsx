import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import DarkModeSwitch from 'src/common/components/switches/darkModeSwitch';
import ProfileDrawerModal from '../../drawers/profileDrawerModal';
import React from 'react';
import { UserIconSVG } from 'assets/icons';
import stylesCreator from './styles';
import { useDiscoverHook } from '../../../../features/discover/hooks';
import useStrings from 'src/common/hooks/useStrings';
import { useTheme } from 'src/lib/theme/Theme';

const DiscoverHeader = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const { DiscoverScreen } = useStrings();
  const { toggleSideMenu, handleLogin, handleSignup } = useDiscoverHook();

  return (
    <>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Text style={styles.headerTitle}>{DiscoverScreen.Name}</Text>
          <View style={styles.headerRightContainer}>
            <DarkModeSwitch />
            <TouchableOpacity onPress={toggleSideMenu}>
              <UserIconSVG
                fill={theme.colors.product.background.base}
                fillSecondary={theme.colors.product.text.strong}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ProfileDrawerModal
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    </>
  );
};

export default DiscoverHeader;
