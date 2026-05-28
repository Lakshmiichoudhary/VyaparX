import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { darkColors, lightColors } from "../../constants/colors";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import Toast from "react-native-toast-message";
import { getFirebaseErrorMessage } from "../../utils/FirebaseErrors";

const Profile = () => {
  const navigation = useNavigation<any>();

  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);

      Toast.show({
        type: "success",
        text1: "Logged out successfully",
      });
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Logout Failed",
        text2: getFirebaseErrorMessage(error.code),
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View style={styles.topContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Profile</Text>

            <TouchableOpacity>
              <Ionicons
                name="settings-outline"
                size={24}
                color={darkColors.text}
              />
            </TouchableOpacity>
          </View>

          {/* User Card */}
          <View style={styles.profileCard}>
            <Image
              source={{
                uri:
                  user?.photoURL ||
                  "",
              }}
              style={styles.profileImage}
            />

            <Text style={styles.userName}>{user?.displayName}</Text>

            <Text style={styles.userEmail}>{user?.email}</Text>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statsCard}>
              <Text style={styles.statsNumber}>12</Text>
              <Text style={styles.statsLabel}>Products</Text>
            </View>

            <View style={styles.statsCard}>
              <Text style={styles.statsNumber}>₹45K</Text>
              <Text style={styles.statsLabel}>Revenue</Text>
            </View>

            <View style={styles.statsCard}>
              <Text style={styles.statsNumber}>28</Text>
              <Text style={styles.statsLabel}>Orders</Text>
            </View>
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuContainer}>
          <MenuItem
            onPress={() => navigation.navigate("EditProfile")}
            icon="person-outline"
            title="Edit Profile"
          />

          {/* // TO-DO
          <MenuItem icon="notifications-outline" title="Notifications" />

          <MenuItem icon="lock-closed-outline" title="Privacy & Security" />

          <MenuItem icon="help-circle-outline" title="Help & Support" />*/}

          <MenuItem
            onPress={handleLogout}
            icon="log-out-outline"
            title="Logout"
            danger
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, title, danger, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <View
          style={[
            styles.iconContainer,
            danger && {
              backgroundColor: "#FEE2E2",
            },
          ]}
        >
          <Ionicons
            name={icon}
            size={20}
            color={danger ? "#DC2626" : darkColors.primary}
          />
        </View>

        <Text
          style={[
            styles.menuText,
            danger && {
              color: "#DC2626",
            },
          ]}
        >
          {title}
        </Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: lightColors.background,
  },

  topContainer: {
    backgroundColor: darkColors.background,
    paddingBottom: 28,
    borderBottomEndRadius: 28,
    borderBottomStartRadius: 28,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
  },

  profileCard: {
    paddingVertical: 32,
    alignItems: "center",
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 999,
    backgroundColor: lightColors.background,
  },

  userName: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: "800",
    color: darkColors.text,
  },

  userEmail: {
    marginTop: 8,
    fontSize: 15,
    color: darkColors.secondaryText,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 24,
  },

  statsCard: {
    flex: 1,
    backgroundColor: lightColors.background,
    marginHorizontal: 6,
    borderRadius: 22,
    paddingVertical: 22,
    alignItems: "center",
  },

  statsNumber: {
    fontSize: 22,
    fontWeight: "800",
    color: lightColors.text,
  },

  statsLabel: {
    marginTop: 6,
    color: lightColors.secondaryText,
    fontSize: 13,
  },

  menuContainer: {
    marginTop: 28,
    paddingVertical: 10,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(99,102,241,0.12)",
    justifyContent: "center",
    alignItems: "center",
  },

  menuText: {
    marginLeft: 14,
    fontSize: 15,
    fontWeight: "600",
    color: lightColors.text,
  },
});
