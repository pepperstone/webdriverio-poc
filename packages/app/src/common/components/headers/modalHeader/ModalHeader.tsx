import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';

import { ModalHeaderProps } from './types';
import SvgButton from 'src/common/components/buttons/svgButton';
import stylesCreator from './styles';
import { useTheme } from 'src/lib/theme/Theme';

const ModalHeader: FunctionComponent<ModalHeaderProps> = ({
  icon,
  text,
  onPress,
}) => {
  const [styles, theme] = useTheme(stylesCreator);

  return (
    <View style={styles.header}>
      <SvgButton
        onPress={onPress}
        buttonStyles={styles.icon}
        fill={theme.colors.text}
        fillSecondary={theme.colors.text}
        Icon={icon}
      />

      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default ModalHeader;
