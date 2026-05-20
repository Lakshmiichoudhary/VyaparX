import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";

import { darkColors, lightColors } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoginScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={darkColors.background}
      />

      <View style={styles.container}>
        {/* Logo Section */}
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../assets/icons/VyaparX.png")}
          />
        </View>

        {/* Login Card */}
        <View style={styles.contentContainer}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>Welcome to VyaparX</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupText}> Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={styles.input}
            />
          </View>

          
          <TouchableOpacity style={styles.forgotContainer}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

         
          <TouchableOpacity activeOpacity={0.8} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: darkColors.background,
    overflow: "hidden"
  },

  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
  },

  imageContainer: {
   
    height: 100 ,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:105    
  },

  image: {
    width: 450,
    height: 450,
  },

  contentContainer: {
    backgroundColor: lightColors.background,
    borderRadius: 20,
    paddingHorizontal: 24,
    padding: 40,
  },

  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center"
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: lightColors.text,
  },

  inputContainer: {
    marginTop: 22,
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

  forgotContainer: {
    marginTop: 16,
    alignItems: "flex-end",
  },

  forgotText: {
    color: darkColors.primary,
    fontSize: 14,
    fontWeight: "600",
  },

  primaryButton: {
    backgroundColor: darkColors.background,
    marginTop: 28,
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

  signupText: {
    color: darkColors.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});
