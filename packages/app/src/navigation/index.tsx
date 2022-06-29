import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { BottomTabNavigationBar } from 'src/common/components/bars';
import { WebView } from 'src/common/components/views';
import Discover from 'src/features/discover';
import { useTheme } from 'src/lib/theme/Theme';
import { AuthStatus } from 'src/lib/user/types';
import { AppState } from '../app/types';
import LandingScreen from '../features/landing';
import LoginScreen from '../features/login';
import MarketsScreen from '../features/markets';
import PortfolioScreen from '../features/portfolio';
import RegisterScreen from '../features/register';
import SearchScreen from '../features/search';
import WatchlistsScreen from '../features/watchlists';
import stylesCreator from './styles';
import {
  MainStackParamList,
  MainTabParamList,
  RootStackParamList,
} from './types';

const MainTabStack = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigation = () => {
  const bottomTabNavigation = (props: BottomTabBarProps) => (
    <BottomTabNavigationBar {...props} />
  );

  return (
    <MainTabStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Discover"
      tabBar={(props) => bottomTabNavigation(props)}
    >
      <MainTabStack.Screen name="Discover" component={Discover} />
      <MainTabStack.Screen name="Watchlists" component={WatchlistsScreen} />
      <MainTabStack.Screen name="Search" component={SearchScreen} />
      <MainTabStack.Screen name="Markets" component={MarketsScreen} />
      <MainTabStack.Screen name="Portfolio" component={PortfolioScreen} />
    </MainTabStack.Navigator>
  );
};

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
