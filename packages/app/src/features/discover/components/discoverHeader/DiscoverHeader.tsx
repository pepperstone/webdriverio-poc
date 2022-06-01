import React, { FC } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

import useStrings from 'src/common/hooks/useStrings';
import DarkModeSwitch from 'src/common/components/darkModeSwitch';
import ProfileDrawerModal from './components/profileDrawerModal';
import { UserIconSVG } from 'src/../assets/icons';

import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './Styles';
import { useDiscoverHook } from '../../Hooks';

const DiscoverHeader: FC = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const { DiscoverScreen } = useStrings();
  const { toggleSideMenu, handleLogin } = useDiscoverHook();

  return (
    <>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Text style={styles.headerTitle}>{DiscoverScreen.Name}</Text>
          <View style={styles.headerRightContainer}>
            <DarkModeSwitch />
            <TouchableOpacity onPress={toggleSideMenu}>
              <UserIconSVG fill={theme.colors.background} fillSecondary={theme.colors.text}/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <ProfileDrawerModal handleLogin={handleLogin} handleSignup={handleLogin} />
    </>
  );
};

export default DiscoverHeader;
