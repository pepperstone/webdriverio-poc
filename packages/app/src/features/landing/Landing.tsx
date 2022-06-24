import { Text, View } from 'react-native';

import { PepperstoneSVG } from 'assets/logos';
import React from 'react';
import TextButton from 'src/common/components/buttons/textButton';
import stylesCreator from './styles';
import { useLandingHook } from './hooks';
import { useStrings } from 'src/common/hooks';
import { useTheme } from 'src/lib/theme/Theme';

const LandingScreen = () => {
  const [styles, theme] = useTheme(stylesCreator);
  const strings = useStrings();
  const { goToLogin, goToDiscover, goToSignup } = useLandingHook();

  return (
    <View style={styles.container}>
      <PepperstoneSVG
        fill={theme.colors.common.blue}
        fillSecondary={theme.colors.product.background.base}
        width={140}
        height={300}
      />
      <TextButton onPress={goToLogin} text={strings.LandingScreen.Login} />
      <TextButton onPress={goToSignup} text={strings.LandingScreen.Signup} />
      <Text style={styles.centeredText}>{strings.common.OR}</Text>
      <TextButton onPress={goToDiscover} text={strings.LandingScreen.Guest} />
    </View>
  );
};

export default LandingScreen;
