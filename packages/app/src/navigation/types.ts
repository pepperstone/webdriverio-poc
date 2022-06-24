import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, RouteProp } from '@react-navigation/native';
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
export type NavigatorParams<P> = { screen?: keyof P; params?: Record<string, undefined> };

export type RootStackParamList = {
  Main: NavigatorParams<MainTabParamList>;
  NotFound: undefined;
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

export type MainStackParamList = {
  MainStackTabs: NavigatorParams<MainTabParamList>;
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  WebView: { title: string, url: string };
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

export type WebViewScreen =  StackNavigationProp<MainStackParamList, 'WebView'>;
export type LandingScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Landing'>;
export type LoginScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Login'>;
export type RegisterScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Register'>;