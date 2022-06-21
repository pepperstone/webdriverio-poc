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
  const { Buttons } =
    useStrings().DiscoverScreen.ProfileDrawerMenu.AuthComplete;
  const { loading } = useDiscoverHook();

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextTouchable
          onPress={() => {}} //TODO: ViewProfile
          text={Buttons.ViewProfile}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: TradingAccounts
          text={Buttons.TradingAccounts}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() => {}} //TODO: FinancialStatements
          text={Buttons.FinancialStatements}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: Deposit
          text={Buttons.Deposit}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() => {}} //TODO: Withdraw
          text={Buttons.Withdraw}
          textStyles={styles.linkText}
        />
        <TextTouchable
          onPress={() => {}} //TODO: Transfer
          text={Buttons.Transfer}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: Settings
          text={Buttons.Settings}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: OneClickTrading
          text={Buttons.OneClickTrading}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: ApplyForPepperstonePro
          text={Buttons.ApplyForPepperstonePro}
          textStyles={styles.linkText}
        />
        <HorizontalBorder style={styles.border} />
        <TextTouchable
          onPress={() => {}} //TODO: ReferAFriend
          text={Buttons.ReferAFriend}
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
            text={Buttons.Logout}
            textStyles={styles.linkText}
          />
        )}
      </ScrollView>
    </>
  );
};

export default AuthCompleteMenu;
