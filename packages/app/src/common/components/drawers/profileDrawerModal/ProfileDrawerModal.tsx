import { SafeAreaView, TouchableOpacity } from 'react-native';

import { AppState } from 'src/app/types';
import { AuthStatus } from 'src/lib/user/types';
import { CloseIconSVG } from 'assets/icons';
import { GuestMenu } from './components';
import Modal from 'react-native-modal';
import { ProfileDrawerModalProps } from './types';
import React, { useCallback } from 'react';
import stylesCreator from './styles';
import { useDiscoverHook } from 'src/features/discover/hooks';
import { useSelector } from 'react-redux';
import { useTheme } from 'src/lib/theme/Theme';
import AuthCompleteMenu from './components/authCompleteMenu';

const ProfileDrawerModal = ({
  handleLogin,
  handleSignup,
}: ProfileDrawerModalProps) => {
  const [styles, theme] = useTheme(stylesCreator);
  const {
    user: { authStatus },
    discover: { isSideMenuOpen },
  } = useSelector((state: AppState) => state);
  const { doLogout, toggleSideMenu } = useDiscoverHook();

  const getContent = useCallback(() => {
    switch (authStatus) {
      case AuthStatus.LOGGED_IN:
        return <AuthCompleteMenu handleLogout={doLogout} />;
      default:
        return (
          <GuestMenu handleLogin={handleLogin} handleSignup={handleSignup} />
        );
    }
  }, [authStatus, handleLogin, handleSignup, doLogout]);

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
          <CloseIconSVG
            fill={theme.colors.common.darkGrey}
            fillSecondary={theme.colors.common.white}
          />
        </TouchableOpacity>
        {getContent()}
      </SafeAreaView>
    </Modal>
  );
};

export default ProfileDrawerModal;