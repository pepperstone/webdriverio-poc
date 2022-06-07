import { CompositeScreenProps, RouteProp } from '@react-navigation/native';
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type NavigatorParams<P> = { screen?: keyof P; params?: Record<string, undefined> };

export type RootStackParamList = {
  Main: NavigatorParams<MainTabParamList>;
  Auth: NavigatorParams<AuthStackParamList>;
  NotFound: undefined;
  WebView: { title: string, url: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type MainTabParamList = {
  Discover: undefined;
  Watchlists: undefined;
  Search: undefined;
  Markets: undefined;
  Portfolio: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
  BottomTabScreenProps<AuthStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
  >;

export type MainStackParamList = {
  MainStackTabs: NavigatorParams<MainTabParamList>;
};

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type WatchlistsScreen = {
  navigation: MainTabScreenProps<'Watchlists'>;
  route: RouteProp<MainTabParamList, 'Watchlists'>;
};
export type SearchScreen = {
  navigation: MainTabScreenProps<'Search'>;
  route: RouteProp<MainTabParamList, 'Search'>;
};
export type MarketsScreen = {
  navigation: MainTabScreenProps<'Markets'>;
  route: RouteProp<MainTabParamList, 'Markets'>;
};
export type PortfolioScreen = {
  navigation: MainTabScreenProps<'Portfolio'>;
  route: RouteProp<MainTabParamList, 'Portfolio'>;
};

type RootNavigation = StackNavigationProp<RootStackParamList>;

export type WebViewScreen = {
  navigation: RootNavigation;
  route: RouteProp<RootStackParamList, 'WebView'>;
};

export type LoginScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;
export type RegisterScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Register'>;
