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
import { useTheme } from '../../../lib/theme/Theme';
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

  const activeColor = (name: string) =>
    activeTab === name
      ? theme.colorsInvert.product.brand.primary
      : theme.colors.product.text.strong;

  return (
    <View style={styles.tabWrapper}>
      <Tab
        name="Discover"
        onTabPress={handleTabPress}
        textColor={activeColor('Discover')}
        tabIcon={
          <DiscoverSVG
            fill={theme.colors.product.background.base}
            fillSecondary={activeColor('Discover')}
          />
        }
      />
      <Tab
        name="Watchlists"
        onTabPress={handleTabPress}
        textColor={activeColor('Watchlists')}
        tabIcon={
          <WatchlistsSVG
            fill={theme.colors.product.background.base}
            fillSecondary={activeColor('Watchlists')}
          />
        }
      />
      <Tab
        name="Search"
        onTabPress={handleTabPress}
        textColor={activeColor('Search')}
        tabIcon={
          <SearchSVG
            fill={theme.colors.product.background.base}
            fillSecondary={activeColor('Search')}
          />
        }
      />
      <Tab
        name="Markets"
        onTabPress={handleTabPress}
        textColor={activeColor('Markets')}
        tabIcon={
          <MarketsSVG
            fill={theme.colors.product.background.base}
            fillSecondary={activeColor('Markets')}
          />
        }
      />
      <Tab
        name="Portfolio"
        onTabPress={handleTabPress}
        textColor={activeColor('Portfolio')}
        tabIcon={
          <PortfolioSVG
            fill={theme.colors.product.background.base}
            fillSecondary={activeColor('Portfolio')}
          />
        }
      />
    </View>
  );
};

export default BottomTabNavigationBar;
