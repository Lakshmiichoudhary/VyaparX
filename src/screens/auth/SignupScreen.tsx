import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { darkColors, lightColors } from "../../constants/colors";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import Toast from "react-native-toast-message";
import { getFirebaseErrorMessage } from "../../utils/FirebaseErrors";

export const SignupScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Passwords do not match",
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      navigation.replace("MainTabs");
      Toast.show({
        type: "success",
        text1: "Account Created",
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Signup Failed",
        text2: getFirebaseErrorMessage(error.code),
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={darkColors.background}
      />

      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../assets/icons/VyaparX.png")}
          />
        </View>

        {/* Signup Card */}
        <View style={styles.contentContainer}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>Create Account</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>

            <TextInput
              placeholder="Enter your full name"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              placeholder="Create password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>

            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.primaryButton}
            onPress={handleSignup}
          >
            <Text style={styles.primaryButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: darkColors.background,
  },

  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  imageContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 105,
  },

  image: {
    width: 450,
    height: 450,
  },

  contentContainer: {
    backgroundColor: lightColors.background,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },

  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: lightColors.text,
  },

  loginText: {
    color: darkColors.primary,
    fontSize: 20,
    fontWeight: "700",
  },

  inputContainer: {
    marginTop: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: lightColors.text,
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 15,
    color: lightColors.text,
  },

  primaryButton: {
    backgroundColor: darkColors.background,
    marginTop: 30,
    paddingVertical: 18,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});
