import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgButton } from 'src/common/components/buttons';
import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './styles';
import { MainHeaderProps } from './types';

const MainHeader = ({
  title,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
}: MainHeaderProps) => {
  const insets = useSafeAreaInsets();
  const [styles, theme] = useTheme(stylesCreator, {
    leftIcon,
    safeAreaTop: insets.top,
  });
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.iconContainer}>
        {leftIcon && onLeftIconPress && (
          <SvgButton
            Icon={leftIcon}
            onPress={onLeftIconPress}
            fill={theme.colors.product.background.base}
            fillSecondary={theme.colors.product.text.strong}
          />
        )}
        {rightIcon && onRightIconPress && (
          <SvgButton
            Icon={rightIcon}
            buttonStyles={styles.rightIcon}
            onPress={onRightIconPress}
            fill={theme.colors.product.background.base}
            fillSecondary={theme.colors.product.text.strong}
          />
        )}
      </View>
    </View>
  );
};

export default MainHeader;
