import { DiscoverParamList, DiscoverTabStackParamList } from './types';

import DiscoverAnalysisScreen from 'src/features/discover/components/analysis';
import DiscoverEventScreen from 'src/features/discover/components/events';
import DiscoverFeedScreen from 'src/features/discover/components/feed';
import DiscoverHeader from 'src/features/discover/components/discoverHeader/DiscoverHeader';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import stylesCreator from './Styles';
import { useTheme } from 'src/lib/theme/Theme';

const DiscoverTabsStack =
  createMaterialTopTabNavigator<DiscoverTabStackParamList>();
const DiscoverTabsNavigator = () => {
  const [styles, theme] = useTheme(stylesCreator);

  const topTabStyles = {
    ...styles,
    swipeEnabled: false,
    tabBarShowIcon: false,
    tabBarPressColor: theme.colors.product.background.base,
  };

  return (
    <DiscoverTabsStack.Navigator screenOptions={topTabStyles}>
      <DiscoverTabsStack.Screen name="Feed" component={DiscoverFeedScreen} />
      <DiscoverTabsStack.Screen
        name="Analysis"
        component={DiscoverAnalysisScreen}
      />
      <DiscoverTabsStack.Screen name="Event" component={DiscoverEventScreen} />
    </DiscoverTabsStack.Navigator>
  );
};

const DiscoverStack = createNativeStackNavigator<DiscoverParamList>();
const discoverHeader = () => <DiscoverHeader />;
const DiscoverStackNavigator = () => (
  <DiscoverStack.Navigator screenOptions={{ header: () => discoverHeader() }}>
    <DiscoverStack.Screen
      name="DiscoverScreen"
      component={DiscoverTabsNavigator}
    />
  </DiscoverStack.Navigator>
);

export default DiscoverStackNavigator;
