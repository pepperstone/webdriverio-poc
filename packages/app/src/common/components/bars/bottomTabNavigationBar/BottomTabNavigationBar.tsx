import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  DiscoverSVG,
  MarketsSVG,
  PortfolioSVG,
  SearchSVG,
  WatchlistsSVG,
} from 'assets/icons';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LiveAccountBar from 'src/common/components/bars/liveAccountBar';
import { useTheme } from 'src/lib/theme/Theme';
import Tab from './components/tab';
import stylesCreator from './styles';

const BottomTabNavigationBar = ({ navigation, state }: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const [styles, theme] = useTheme(stylesCreator, {
    safeAreaBottom: insets.bottom,
  });
  const handleTabPress = useCallback(
    (name: string) => {
      navigation.navigate(name);
    },
    [navigation],
  );

  const activeTab = useMemo(() => state.routes[state.index].name, [state]);

  const activeColor = useCallback(
    (name: string) =>
      activeTab === name
        ? theme.colorsInvert.product.brand.primary
        : theme.colors.product.text.strong,
    [theme, activeTab],
  );

  return (
    <>
      <LiveAccountBar />
      <View style={styles.tabWrapper}>
        <Tab
          name="Discover"
          onTabPress={handleTabPress}
          Icon={DiscoverSVG}
          fill={theme.colors.product.background.base}
          activeColor={activeColor('Discover')}
        />
        <Tab
          name="Watchlists"
          onTabPress={handleTabPress}
          Icon={WatchlistsSVG}
          fill={theme.colors.product.background.base}
          activeColor={activeColor('Watchlists')}
        />
        <Tab
          name="Search"
          onTabPress={handleTabPress}
          Icon={SearchSVG}
          fill={theme.colors.product.background.base}
          activeColor={activeColor('Search')}
        />
        <Tab
          name="Markets"
          onTabPress={handleTabPress}
          Icon={MarketsSVG}
          fill={theme.colors.product.background.base}
          activeColor={activeColor('Markets')}
        />
        <Tab
          name="Portfolio"
          onTabPress={handleTabPress}
          Icon={PortfolioSVG}
          fill={theme.colors.product.background.base}
          activeColor={activeColor('Portfolio')}
        />
      </View>
    </>
  );
};

export default BottomTabNavigationBar;
