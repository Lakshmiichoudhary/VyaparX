import React from "react";

import { Alert } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

import { darkColors } from "../constants/colors";

import { Dashboard } from "../screens/dashboard/Dashboard";
import { Inventory } from "../screens/inventory/Inventory";
import Analytics from "../screens/analytics/Analytics";
import Profile from "../screens/profile/Profile";
import Toast from "react-native-toast-message";

const Tab = createBottomTabNavigator();

const BottomTabs = ({ isGuest }: any) => {
  const navigation: any = useNavigation();

  const handleGuestNavigation = (e: any) => {
    if (isGuest) {
      e.preventDefault();

      Toast.show({
        type: "info",
        text1: "Login Required",
        text2: "Please login to access this feature",
      });

      setTimeout(() => {
        navigation.navigate("Login");
      }, 1200);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: darkColors.card,
          borderTopWidth: 0,
          height: 85,
          paddingTop: 10,
        },

        tabBarActiveTintColor: darkColors.primary,

        tabBarInactiveTintColor: darkColors.secondaryText,

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
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Inventory"
        component={Inventory}
        listeners={{
          tabPress: handleGuestNavigation,
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="archive" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Analytics"
        component={Analytics}
        listeners={{
          tabPress: handleGuestNavigation,
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bar-chart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        listeners={{
          tabPress: handleGuestNavigation,
        }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
