import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { darkColors } from "../constants/colors";

import { Dashboard } from "../screens/dashboard/Dashboard";
import { Inventory } from "../screens/inventory/Inventory";
import Analytics from "../screens/analytics/Analytics";
import Profile from "../screens/profile/Profile";

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
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarActiveTintColor: darkColors.primary,

        tabBarInactiveTintColor:
          darkColors.secondaryText,

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="home"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Inventory"
        component={Inventory}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="archive"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="bar-chart"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome
              name="user"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;