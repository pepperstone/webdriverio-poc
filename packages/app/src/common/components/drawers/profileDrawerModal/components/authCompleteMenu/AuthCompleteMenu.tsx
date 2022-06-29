import React from 'react';
import { View } from 'react-native';
import TextTouchable from 'src/common/components/buttons/textTouchable';
import { useStrings } from 'src/common/hooks';
import { useTheme } from 'src/lib/theme/Theme';
import { useProfileDrawerModalHooks } from '../../hooks';
import stylesCreator from './styles';
import { AuthCompleteMenuProps } from './types';

const AuthCompleteMenu = ({ handleLogout }: AuthCompleteMenuProps) => {
  const [styles] = useTheme(stylesCreator);
  const {
    Authenticated: { Complete },
  } = useStrings().DiscoverScreen.ProfileDrawerMenu;
  const { setAuthKYCIncomplete } = useProfileDrawerModalHooks();

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.ViewProfile}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={setAuthKYCIncomplete}
          text={'View Incomplete Menu'}
          textStyles={styles.linkButton}
        />
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.TradingAccounts}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.FinancialStatements}
          textStyles={styles.linkButton}
        />
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.Deposit}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.Withdraw}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.Transfer}
          textStyles={styles.linkButton}
        />
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.Settings}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.OneClickTrading}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.ApplyForPepperstonePro}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.ReferAFriend}
          textStyles={styles.linkButton}
        />
      </View>

      <View style={styles.groupLast}>
        <TextTouchable
          onPress={handleLogout}
          text={Complete.Buttons.Logout}
          textStyles={styles.linkButton}
        />
      </View>
    </View>
  );
};

export default AuthCompleteMenu;
