import React from 'react';
import { AuthCompleteMenuProps } from './types';
import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './Styles';
import { useStrings } from 'src/common/hooks';
import TextTouchable from 'src/common/components/buttons/textTouchable';
import { useDiscoverHook } from 'src/features/discover/Hooks';

const AuthCompleteMenu = ({ handleLogout }: AuthCompleteMenuProps) => {
  const [styles] = useTheme(stylesCreator);
  const { AuthComplete } = useStrings().DiscoverScreen.ProfileDrawerMenu;
  const { loading } = useDiscoverHook();

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}} //TODO: ViewProfile
          text={AuthComplete.Buttons.ViewProfile}
          textStyles={styles.linkButton}
        />
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}} //TODO: TradingAccounts
          text={AuthComplete.Buttons.TradingAccounts}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}} //TODO: FinancialStatements
          text={AuthComplete.Buttons.FinancialStatements}
          textStyles={styles.linkButton}
        />
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}} //TODO: Deposit
          text={AuthComplete.Buttons.Deposit}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}} //TODO: Withdraw
          text={AuthComplete.Buttons.Withdraw}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}} //TODO: Transfer
          text={AuthComplete.Buttons.Transfer}
          textStyles={styles.linkButton}
        />
      </View>
      <View style={styles.group}>
        <TextTouchable
          onPress={() => {}} //TODO: Settings
          text={AuthComplete.Buttons.Settings}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}} //TODO: OneClickTrading
          text={AuthComplete.Buttons.OneClickTrading}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}} //TODO: ApplyForPepperstonePro
          text={AuthComplete.Buttons.ApplyForPepperstonePro}
          textStyles={styles.linkButton}
        />
        <TextTouchable
          onPress={() => {}} //TODO: ReferAFriend
          text={AuthComplete.Buttons.ReferAFriend}
          textStyles={styles.linkButton}
        />
      </View>

      <View style={styles.groupBottom}>
        <TextTouchable
          onPress={handleLogout}
          text={AuthComplete.Buttons.Logout}
          textStyles={styles.linkButton}
        />
      </View>
    </View>
  );
};

export default AuthCompleteMenu;
