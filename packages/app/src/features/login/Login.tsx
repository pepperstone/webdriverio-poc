import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useRef } from 'react';

import { AppState } from 'src/app/types';
import { AuthStatus } from 'src/lib/user/types';
import FormInput from 'src/common/components/inputs/formInput';
import { PepperstoneSVG } from 'assets/logos';
import TextButton from 'src/common/components/buttons/textButton';
import stylesCreator from './styles';
import { useLoginHook } from './hooks';
import { useSelector } from 'react-redux';
import { useStrings } from '../../common/hooks';
import { useTheme } from 'src/lib/theme/Theme';

const LoginScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const passwordRef = useRef<TextInput>(null);
  const { authStatus } = useSelector((state: AppState) => state.user);
  const { loading, errors, values, doLogin, onChangeText, goToSignup } =
    useLoginHook();
  const strings = useStrings();

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <PepperstoneSVG
        fill={theme.colors.common.blue}
        fillSecondary={theme.colors.product.background.base}
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
        {authStatus === AuthStatus.NONE && (
          <>
            <Text style={styles.centeredText}>{strings.common.OR}</Text>
            <TextButton
              onPress={goToSignup}
              text={strings.LoginScreen.Buttons.Signup}
            />
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
