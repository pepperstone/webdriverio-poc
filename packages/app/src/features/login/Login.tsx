import { PepperstoneSVG } from 'assets/logos';
import React, { useRef } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import TextButton from 'src/common/components/buttons/textButton';
import FormInput from 'src/common/components/inputs/formInput';
import { useStrings } from '../../common/hooks';
import { useTheme } from '../../lib/theme/Theme';
import { useLoginHook } from './Hooks';
import stylesCreator from './Styles';

const LoginScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const passwordRef = useRef<TextInput>(null);
  const { loading, errors, values, doLogin, doRegister, onChangeText } =
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
