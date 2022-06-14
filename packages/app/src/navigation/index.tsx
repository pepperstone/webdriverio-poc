import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import RegisterScreen from 'src/features/register';
import { AppState } from '../app/types';
import { BottomTabNavigationBar } from '../common/components';
import WebView from '../common/components/webView';
import LoginScreen from '../features/login';
import MarketsScreen from '../features/markets';
import PortfolioScreen from '../features/portfolio';
import SearchScreen from '../features/search';
import WatchlistsScreen from '../features/watchlists';
import { useTheme } from '../lib/theme/Theme';
import DiscoverStackNavigator from './stacks/discover';
import stylesCreator from './Styles';
import {
  AuthStackParamList,
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
const MainNavigation = () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="MainStackTabs" component={MainTabNavigation} />
  </MainStack.Navigator>
);

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AuthNavigation = () => {
  const [, theme] = useTheme(stylesCreator);
  const screenOptions = {
    headerShown: true,
    headerTintColor: theme.colors.product.text.strong,
    headerStyle: {
      backgroundColor: theme.colors.product.background.base,
    },
  };

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={screenOptions}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={screenOptions}
        name="Register"
        component={RegisterScreen}
      />
    </AuthStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigation = () => {
  const Main = useCallback(() => <MainNavigation />, []);
  const Auth = useCallback(() => <AuthNavigation />, []);
  const { isLoggedIn } = useSelector((state: AppState) => state.user);
  const [, theme] = useTheme(stylesCreator);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <RootStack.Screen name="Main" component={Main} />
      ) : (
        <RootStack.Screen name="Auth" component={Auth} />
      )}
      <RootStack.Screen
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
    </RootStack.Navigator>
  );
};

export default RootNavigation;
