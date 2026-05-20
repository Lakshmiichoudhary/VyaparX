import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { darkColors } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={darkColors.background}
      />

      <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../assets/icons/VyaparX.png")}
          />
        </View>

        {/* Bottom Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Manage Your Business Smartly</Text>

          <Text style={styles.subtitle}>
            Track sales, inventory, expenses and profits with a powerful modern
            dashboard built for growing businesses.
          </Text>

          <View style={styles.bottomContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.primaryButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.secondaryButton}
              onPress={() => navigation.replace("MainTabs")}
            >
              <Text style={styles.secondaryButtonText}>Skip for now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: darkColors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },

  imageContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 115,
  },

  image: {
    width: 450,
    height: 450,
  },

  contentContainer: {
    paddingBottom: 30,
  },

  title: {
    color: darkColors.text,
    fontSize: 34,
    fontWeight: "800",
    lineHeight: 42,
    letterSpacing: 0.3,
  },

  subtitle: {
    color: darkColors.secondaryText,
    fontSize: 16,
    marginTop: 18,
    lineHeight: 26,
  },

  bottomContainer: {
    marginTop: 40,
  },

  primaryButton: {
    backgroundColor: darkColors.primary,
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

  secondaryButton: {
    marginTop: 20,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: darkColors.secondaryText,
    fontSize: 15,
    fontWeight: "500",
  },
});
