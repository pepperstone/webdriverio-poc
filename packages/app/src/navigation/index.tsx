import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AuthStatus } from 'src/lib/user/types';
import { AppState } from '../app/types';
import { BottomTabNavigationBar } from '../common/components';
import WebView from '../common/components/webView';
import LandingScreen from '../features/landing';
import LoginScreen from '../features/login';
import MarketsScreen from '../features/markets';
import PortfolioScreen from '../features/portfolio';
import RegisterScreen from '../features/register';
import SearchScreen from '../features/search';
import WatchlistsScreen from '../features/watchlists';
import { useTheme } from '../lib/theme/Theme';
import DiscoverStackNavigator from './stacks/discover';
import stylesCreator from './Styles';
import {
  MainStackParamList,
  MainTabParamList,
  RootStackParamList,
} from './Types';

const MainTabStack = createBottomTabNavigator<MainTabParamList>();
const bottomTabNavigation = (props: BottomTabBarProps) => (
  <BottomTabNavigationBar {...props} />
);
const MainTabNavigation = () => (
  <MainTabStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Discover"
    tabBar={(props) => bottomTabNavigation(props)}
  >
    <MainTabStack.Screen name="Discover" component={DiscoverStackNavigator} />
    <MainTabStack.Screen name="Watchlists" component={WatchlistsScreen} />
    <MainTabStack.Screen name="Search" component={SearchScreen} />
    <MainTabStack.Screen name="Markets" component={MarketsScreen} />
    <MainTabStack.Screen name="Portfolio" component={PortfolioScreen} />
  </MainTabStack.Navigator>
);

const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainNavigation = () => {
  const [, theme] = useTheme(stylesCreator);
  const { authStatus } = useSelector((state: AppState) => state.user);
  const screenOptions = {
    headerShown: true,
    headerTintColor: theme.colors.product.text.strong,
    headerStyle: {
      backgroundColor: theme.colors.product.background.base,
    },
  };
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {authStatus === AuthStatus.NONE ? (
        <MainStack.Group screenOptions={screenOptions}>
          <MainStack.Screen name="Landing" component={LandingScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Register" component={RegisterScreen} />
        </MainStack.Group>
      ) : (
        <>
          <MainStack.Screen
            name="MainStackTabs"
            component={MainTabNavigation}
          />
          {authStatus === AuthStatus.GUEST && (
            <MainStack.Group screenOptions={screenOptions}>
              <MainStack.Screen name="Login" component={LoginScreen} />
              <MainStack.Screen name="Register" component={RegisterScreen} />
            </MainStack.Group>
          )}
          <MainStack.Screen
            name="WebView"
            component={WebView}
            options={({ route }) => ({
              title: route.params.title,
              headerShown: true,
              headerTintColor: theme.colors.product.text.strong,
              headerStyle: {
                backgroundColor: theme.colors.product.background.base,
              },
            })}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation = () => {
  const Main = useCallback(() => <MainNavigation />, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={Main} />
    </RootStack.Navigator>
  );
};

export default RootNavigation;
