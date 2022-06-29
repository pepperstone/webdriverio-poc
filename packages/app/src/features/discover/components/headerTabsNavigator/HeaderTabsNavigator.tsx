import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  DiscoverAnalysisScreen,
  DiscoverEventScreen,
  DiscoverFeedScreen,
} from 'src/features/discover/containers';
import { useTheme } from 'src/lib/theme/Theme';
import stylesCreator from './styles';
import { DiscoverTabStackParamList } from './types';

const DiscoverTabsStack =
  createMaterialTopTabNavigator<DiscoverTabStackParamList>();
const HeaderTabsNavigator = () => {
  const [styles, theme] = useTheme(stylesCreator);

  const topTabStyles = {
    ...styles,
    swipeEnabled: false,
    tabBarShowIcon: false,
    tabBarPressColor: theme.colors.product.background.base,
  };

  return (
    <DiscoverTabsStack.Navigator
      initialRouteName="Feed"
      tabBarPosition="top"
      screenOptions={topTabStyles}
    >
      <DiscoverTabsStack.Screen name="Feed" component={DiscoverFeedScreen} />
      <DiscoverTabsStack.Screen
        name="Analysis"
        component={DiscoverAnalysisScreen}
      />
      <DiscoverTabsStack.Screen name="Event" component={DiscoverEventScreen} />
    </DiscoverTabsStack.Navigator>
  );
};

export default HeaderTabsNavigator;
