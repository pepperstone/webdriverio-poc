import { Pressable, View } from 'react-native';
import React, { FunctionComponent } from 'react';

import { CloseIconSVG } from 'assets/icons';
import Modal from 'react-native-modal';
import ModalHeader from '../../headers/modalHeader';
import { ModalProps } from './types';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

const BaseModal: FunctionComponent<ModalProps> = ({
  isShowing,
  toggle,
  headerText,
  children,
}) => {
  const [styles] = useTheme(stylesCreator);

  return (
    <Modal
      isVisible={isShowing}
      style={styles.modal}
      useNativeDriver
      useNativeDriverForBackdrop
    >
      <Pressable style={styles.children} onPress={toggle}>
        <View style={styles.contents}>
          <ModalHeader text={headerText} icon={CloseIconSVG} onPress={toggle} />
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

export default BaseModal;
