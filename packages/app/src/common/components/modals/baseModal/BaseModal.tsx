import { Modal, Pressable, View } from 'react-native';
import React, { FunctionComponent } from 'react';

import { CloseIconSVG } from 'assets/icons';
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
      visible={isShowing}
      onRequestClose={toggle}
      animationType="slide"
      style={styles.modal}
      onMagicTap={toggle}
      transparent
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
