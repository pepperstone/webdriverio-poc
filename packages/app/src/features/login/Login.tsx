import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { FC, useRef } from 'react';

import FormInput from '../../common/components/inputs/formInput';
import { LoginScreenProps } from './types';
import { PepperstoneSVG } from 'assets/logos';
import { StringsType } from 'assets/Localisation/Languages/types';
import TextButton from '../../common/components/buttons/textButton';
import { getCodeSharingMessage } from '../../../../../shared/helpers/CodeSharing';
import stylesCreator from './Styles';
import { useLoginHook } from './Hooks';
import useStrings from '../../common/hooks/useStrings';
import { useTheme } from '../../lib/theme/Theme';

const LoginScreen: FC<LoginScreenProps> = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const passwordRef = useRef<TextInput>(null);
  const { loading, errors, values, doLogin, doRegister, onChangeText } =
    useLoginHook();
  const strings: StringsType = useStrings();
  const isSharing = getCodeSharingMessage();

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.codeSharing}>
        <Text style={styles.text}>Code sharing </Text>
        <Text style={styles.codeWorking}>{isSharing}</Text>
      </View>

      <PepperstoneSVG
        fill={theme.colors.blue}
        fillSecondary={theme.colors.background}
        width={140}
        height={300}
      />
      <View style={styles.form}>
        <Text style={styles.text}>{strings.LoginScreen.Message}</Text>
        <FormInput
          placeholder={strings.LoginScreen.Placeholders.Username}
          value={values.username}
          error={errors.username}
          keyboardType={'email-address'}
          onChangeText={(value) => onChangeText(value, 'username')}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <FormInput
          secureTextEntry
          placeholder={strings.LoginScreen.Placeholders.Password}
          value={values.password}
          error={errors.password}
          ref={passwordRef}
          onChangeText={(value) => onChangeText(value, 'password')}
          onSubmitEditing={doLogin}
          returnKeyType="done"
        />
        <TextButton
          onPress={doLogin}
          loading={loading}
          text={strings.LoginScreen.Buttons.Login}
        />
        <Text style={styles.centeredText}>OR</Text>
        <TextButton
          onPress={doRegister}
          text={strings.LoginScreen.Buttons.Register}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
