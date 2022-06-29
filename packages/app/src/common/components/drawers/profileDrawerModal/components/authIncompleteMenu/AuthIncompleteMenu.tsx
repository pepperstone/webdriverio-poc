import React from 'react';
import { AuthIncompleteMenuProps } from './types';
import { Text, View } from 'react-native';
import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './styles';
import { useStrings } from 'src/common/hooks';
import { TextButton, TextTouchable } from 'src/common/components/buttons';
import { useProfileDrawerModalHooks } from '../../hooks';

const AuthIncompleteMenu = ({ handleLogout }: AuthIncompleteMenuProps) => {
  const [styles] = useTheme(stylesCreator);
  const {
    Authenticated: { Incomplete, Complete },
  } = useStrings().DiscoverScreen.ProfileDrawerMenu;
  const { setAuthComplete } = useProfileDrawerModalHooks();

  return (
    <View style={styles.container}>
      <View style={styles.profileGroup}>
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.ViewProfile}
          textStyles={styles.linkButton}
        />
        <View style={styles.profileIncompleteContainer}>
          <Text style={styles.profileIncompleteMessage}>
            {Incomplete.IncompleteMessage}
          </Text>
          <TextButton
            onPress={setAuthComplete}
            text={Incomplete.Buttons.CompleteSuitabilityTest}
            loading={false}
            buttonStyles={styles.profileIncompleteButton}
            textStyles={styles.profileIncompleteButtonText}
          />
          <TextButton
            onPress={() => {}}
            text={Incomplete.Buttons.FundYourTradingAccount}
            loading={false}
            buttonStyles={styles.profileIncompleteButtonDisabled}
            textStyles={styles.profileIncompleteButtonText}
            disabled
          />
          <TextButton
            onPress={() => {}}
            text={Incomplete.Buttons.VerifyYourProfile}
            loading={false}
            buttonStyles={styles.profileIncompleteButtonDisabled}
            textStyles={styles.profileIncompleteButtonText}
            disabled
          />
        </View>
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.TradingAccounts}
          textStyles={styles.linkButton}
        />
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}}
          text={Complete.Buttons.Deposit}
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

export default AuthIncompleteMenu;
