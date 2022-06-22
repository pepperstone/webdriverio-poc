import { Alert, View } from 'react-native';
import React, { FunctionComponent } from 'react';

import BaseModal from '../baseModal';
import { ModalProps } from './types';
import TextButton from 'src/common/components/buttons/textButton';
import stylesCreator from './Styles';
import { useTheme } from 'src/lib/theme/Theme';

const FundAccountModal: FunctionComponent<ModalProps> = ({
  isShowing,
  toggle,
}) => {
  const [styles] = useTheme(stylesCreator);

  return (
    <BaseModal isShowing={isShowing} toggle={toggle} headerText="Positions">
      <>
        <View style={styles.positions} />
        <TextButton
          text="Fund account"
          onPress={() => Alert.alert('Coming Soon')}
        />
      </>
    </BaseModal>
  );
};

export default FundAccountModal;
