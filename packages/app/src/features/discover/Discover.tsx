import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserIconSVG } from 'assets/icons';
import React from 'react';
import { ProfileDrawerModal } from 'src/common/components/drawers';
import { MainHeader } from 'src/common/components/headers';
import useStrings from 'src/common/hooks/useStrings';
import { useDiscoverHook } from 'src/features/discover/hooks';
import { HeaderTabsNavigator } from './components';
import { DiscoverParamList } from './types';

const Discover = () => {
  const { DiscoverScreen } = useStrings();
  const { toggleSideMenu, handleLogin, handleSignup } = useDiscoverHook();
  const DiscoverStack = createNativeStackNavigator<DiscoverParamList>();

  const discoverHeader = () => (
    <MainHeader
      title={DiscoverScreen.Name}
      rightIcon={UserIconSVG}
      onRightIconPress={toggleSideMenu}
    />
  );

  return (
    <>
      <DiscoverStack.Navigator
        screenOptions={{ header: () => discoverHeader() }}
      >
        <DiscoverStack.Screen
          name="DiscoverScreen"
          component={HeaderTabsNavigator}
        />
      </DiscoverStack.Navigator>
      <ProfileDrawerModal
        handleLogin={handleLogin}
        handleSignup={handleSignup}
      />
    </>
  );
};

export default Discover;
