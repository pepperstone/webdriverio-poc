import { UserIconSVG } from 'assets/icons';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import DarkModeSwitch from 'src/common/components/switches/darkModeSwitch';
import useStrings from 'src/common/hooks/useStrings';
import { useTheme } from 'src/lib/theme/Theme';
import { useDiscoverHook } from '../../Hooks';
import ProfileDrawerModal from './components/profileDrawerModal';
import stylesCreator from './Styles';

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
