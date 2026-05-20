import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { darkColors } from '../constants/colors';
import { Dashboard } from '../screens/dashboard/Dashboard';
import { Inventory } from '../screens/inventory/Inventory';
import Analytics from '../screens/analytics/Analytics';
import Profile from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: darkColors.card,
          borderTopWidth: 0,
          height: 70,
        },
        tabBarActiveTintColor: darkColors.primary,
        tabBarInactiveTintColor: darkColors.secondaryText,
      }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Inventory" component={Inventory} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;