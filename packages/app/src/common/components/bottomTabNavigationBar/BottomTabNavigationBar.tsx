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
import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './Styles';
import Tab from './tab';

const BottomTabNavigationBar = ({ navigation, state }: BottomTabBarProps) => {
  const [styles, theme] = useTheme(stylesCreator);
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
  );
};

export default BottomTabNavigationBar;
