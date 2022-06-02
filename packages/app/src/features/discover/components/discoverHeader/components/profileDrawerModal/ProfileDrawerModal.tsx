import React, { FC, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { AppState } from 'src/app/types';

import Modal from 'react-native-modal';
import GuestMenu from './components/guestMenu';
import { CloseIconSVG } from 'src/../assets/icons';

import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './Styles';
import { useDiscoverHook } from 'src/features/discover/Hooks';
import { ProfileDrawerModalProps } from './types';

const ProfileDrawerModal: FC<ProfileDrawerModalProps> = ({
  handleLogin,
  handleSignup,
}) => {
  const [styles, theme] = useTheme(stylesCreator);
  const { isSideMenuOpen } = useSelector((state: AppState) => state.discover);
  const [isGuestUser] = useState(true);
  const { toggleSideMenu } = useDiscoverHook();

  return (
    <Modal
      isVisible={isSideMenuOpen}
      onBackdropPress={toggleSideMenu} // Android back press
      onSwipeComplete={toggleSideMenu} // Swipe to discard
      animationIn="slideInRight" // Has others, we want slide in from the left
      animationOut="slideOutRight" // When discarding the drawer
      swipeDirection="right" // Discard the drawer with swipe to left
      useNativeDriver // Faster animation
      hideModalContentWhileAnimating // Better performance, try with/without
      propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
      style={styles.modal}
    >
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleSideMenu}>
          <CloseIconSVG fill={theme.colorsInvert.card} fillSecondary={theme.colorsInvert.text} />
        </TouchableOpacity>
        {isGuestUser && <GuestMenu handleLogin={handleLogin} handleSignup={handleSignup} />}
      </SafeAreaView>
    </Modal>
  );
};

export default ProfileDrawerModal;
