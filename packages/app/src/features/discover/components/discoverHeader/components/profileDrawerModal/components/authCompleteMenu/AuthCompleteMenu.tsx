import React from 'react';
import { AuthCompleteMenuProps } from './types';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './Styles';
import { useStrings } from 'src/common/hooks';
import TextTouchable from 'src/common/components/buttons/textTouchable';
import HorizontalBorder from 'src/common/components/horizontalBorder';
import { useDiscoverHook } from 'src/features/discover/Hooks';

const AuthCompleteMenu = ({ handleLogout }: AuthCompleteMenuProps) => {
  const [styles] = useTheme(stylesCreator);
  const { AuthComplete } = useStrings().DiscoverScreen.ProfileDrawerMenu;
  const { loading } = useDiscoverHook();

  return (
    <>
      <ScrollView bounces={false} contentContainerStyle={styles.scrollView}>
        <TextTouchable
          onPress={() => {}} //TODO: ViewProfile
          text={AuthComplete.Buttons.ViewProfile}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: TradingAccounts
          text={AuthComplete.Buttons.TradingAccounts}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() => {}} //TODO: FinancialStatements
          text={AuthComplete.Buttons.FinancialStatements}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: Deposit
          text={AuthComplete.Buttons.Deposit}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() => {}} //TODO: Withdraw
          text={AuthComplete.Buttons.Withdraw}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() => {}} //TODO: Transfer
          text={AuthComplete.Buttons.Transfer}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: Settings
          text={AuthComplete.Buttons.Settings}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: OneClickTrading
          text={AuthComplete.Buttons.OneClickTrading}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: ApplyForPepperstonePro
          text={AuthComplete.Buttons.ApplyForPepperstonePro}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: ReferAFriend
          text={AuthComplete.Buttons.ReferAFriend}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />

        {loading ? (
          <View>
            <ActivityIndicator />
          </View>
        ) : (
          <TextTouchable
            onPress={handleLogout}
            text={AuthComplete.Buttons.Logout}
            textStyles={styles.linkText}
          />
        )}
      </ScrollView>
    </>
  );
};

export default AuthCompleteMenu;
