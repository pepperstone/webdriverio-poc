import React from 'react';
import { AuthCompleteMenuProps } from './types';
import { ActivityIndicator, View } from 'react-native';
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
    <View style={styles.main}>
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: ViewProfile
          text={AuthComplete.Buttons.ViewProfile}
          textStyles={styles.linkText}
        />
      </View>
      <HorizontalBorder style={styles.border} />
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: TradingAccounts
          text={AuthComplete.Buttons.TradingAccounts}
          textStyles={styles.linkText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: FinancialStatements
          text={AuthComplete.Buttons.FinancialStatements}
          textStyles={styles.linkText}
        />
      </View>
      <HorizontalBorder style={styles.border} />
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: Deposit
          text={AuthComplete.Buttons.Deposit}
          textStyles={styles.linkText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: Withdraw
          text={AuthComplete.Buttons.Withdraw}
          textStyles={styles.linkText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: Transfer
          text={AuthComplete.Buttons.Transfer}
          textStyles={styles.linkText}
        />
      </View>
      <HorizontalBorder style={styles.border} />
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: Settings
          text={AuthComplete.Buttons.Settings}
          textStyles={styles.linkText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: OneClickTrading
          text={AuthComplete.Buttons.OneClickTrading}
          textStyles={styles.linkText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: ApplyForPepperstonePro
          text={AuthComplete.Buttons.ApplyForPepperstonePro}
          textStyles={styles.linkText}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextTouchable
          onPress={() => {}} //TODO: ReferAFriend
          text={AuthComplete.Buttons.ReferAFriend}
          textStyles={styles.linkText}
        />
      </View>
      <HorizontalBorder style={styles.border} />

      {loading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <TextTouchable
            onPress={handleLogout}
            text={AuthComplete.Buttons.Logout}
            textStyles={styles.linkText}
          />
        </View>
      )}
    </View>
  );
};

export default AuthCompleteMenu;
