import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/auth/SplashScreen";
import OnboardingScreen from "../screens/auth/OnboardingScreen";
import { LoginScreen } from "../screens/auth/LoginScreen";
import BottomTabs from "./BottomTabs";
import SignupScreen from "../screens/auth/SignupScreen";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/config";
import EditProfileScreen from "../screens/profile/EditProfileScreen";

const Stack = createNativeStackNavigator();

import AsyncStorage from "@react-native-async-storage/async-storage";

const AppNavigator = () => {
  const [user, setUser] = useState<User | null>(null);

  const [isGuest, setIsGuest] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkGuestMode();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const checkGuestMode = async () => {
    const guest = await AsyncStorage.getItem("guestMode");

    if (guest === "true") {
      setIsGuest(true);
    }
  };

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user && !isGuest ? (
          <>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainTabs">
              {() => <BottomTabs isGuest={isGuest} />}
            </Stack.Screen>
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
