import {
  AuthStackParamList,
  MainStackParamList,
  MainTabParamList,
  RootStackParamList,
} from './Types';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, { FC, useCallback } from 'react';

import { AppState } from '../app/types';
import { BottomTabNavigationBar } from '../common/components';
import DarkModeSwitch from '../common/components/darkModeSwitch';
import DiscoverScreen from '../features/discover';
import LoginScreen from '../features/login';
import MarketsScreen from '../features/markets';
import PortfolioScreen from '../features/portfolio';
import RegisterScreen from '../features/register';
import SearchScreen from '../features/search';
import WatchlistsScreen from '../features/watchlists';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import stylesCreator from './Styles';
import { useSelector } from 'react-redux';
import { useTheme } from '../lib/theme/Theme';

const darkModeSwitch = () => <DarkModeSwitch />;
const bottomTabNavigationBar = (props: BottomTabBarProps) => (
  <BottomTabNavigationBar {...props} />
);

const MainTabStack = createBottomTabNavigator<MainTabParamList>();
const MainTabNavigation: FC = () => {
  return (
    <MainTabStack.Navigator
      screenOptions={{
        headerRight: () => darkModeSwitch(),
      }}
      initialRouteName="Discover"
      tabBar={(props) => bottomTabNavigationBar(props)}
    >
      <MainTabStack.Screen name="Discover" component={DiscoverScreen} />
      <MainTabStack.Screen name="Watchlists" component={WatchlistsScreen} />
      <MainTabStack.Screen name="Search" component={SearchScreen} />
      <MainTabStack.Screen name="Markets" component={MarketsScreen} />
      <MainTabStack.Screen name="Portfolio" component={PortfolioScreen} />
    </MainTabStack.Navigator>
  );
};

const MainStack = createNativeStackNavigator<MainStackParamList>();
const MainNavigation: FC = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="MainStackTabs" component={MainTabNavigation} />
  </MainStack.Navigator>
);

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigation: FC = () => {
  const [, theme] = useTheme(stylesCreator);

  return (
    <AuthStack.Navigator
      screenOptions={{ headerTintColor: theme.colors.black }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation: FC = () => {
  const Main = useCallback(() => <MainNavigation />, []);
  const Auth = useCallback(() => <AuthNavigation />, []);
  const { isLoggedIn } = useSelector((state: AppState) => state.user);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <RootStack.Screen name="Main" component={Main} />
      ) : (
        <RootStack.Screen name="Auth" component={Auth} />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigation;
