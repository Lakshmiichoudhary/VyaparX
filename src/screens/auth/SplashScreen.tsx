import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

import { darkColors } from "../../constants/colors";

const SplashScreen = ({ navigation }: any) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
       <Image source={require('../../assets/icons//VyaparX.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkColors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});