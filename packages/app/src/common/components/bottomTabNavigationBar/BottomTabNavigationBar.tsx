import {
  DiscoverSVG,
  MarketsSVG,
  PortfolioSVG,
  SearchSVG,
  WatchlistsSVG,
} from 'assets/icons';
import React, { useCallback, useMemo } from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Tab from './tab';
import { View } from 'react-native';
import stylesCreator from './Styles';
import { useTheme } from '../../../lib/theme/Theme';

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
    activeTab === name ? theme.colors.blue : theme.colors.text;

  return (
    <View style={styles.tabWrapper}>
      <Tab
        name="Discover"
        onTabPress={handleTabPress}
        textColor={activeColor('Discover')}
        tabIcon={
          <DiscoverSVG
            fill={theme.colors.card}
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
            fill={theme.colors.card}
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
            fill={theme.colors.card}
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
            fill={theme.colors.card}
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
            fill={theme.colors.card}
            fillSecondary={activeColor('Portfolio')}
          />
        }
      />
    </View>
  );
};

export default BottomTabNavigationBar;
