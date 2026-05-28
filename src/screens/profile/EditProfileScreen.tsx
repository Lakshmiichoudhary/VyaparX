import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

import { auth } from "../../firebase/config";

import { updateProfile } from "firebase/auth";

import { darkColors, lightColors } from "../../constants/colors";
import Toast from "react-native-toast-message";

const EditProfileScreen = ({ navigation }: any) => {
  const user = auth.currentUser;

  const [name, setName] = useState(user?.displayName || "");

  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const [loading, setLoading] = useState(false);

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);

      if (user) {
        await updateProfile(user, {
          displayName: name,
          photoURL,
        });

        Toast.show({
          type: "success",
          text1: "Account Created",
        });

        navigation.goBack();
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Somthing went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePickImage = async () => {
    try {
      
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Toast.show({
          type: "error",
          text1: "Permission required",
          text2: "Please allow gallery access",
        });
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.7,
      });

      if (!result.canceled) {
        setPhotoURL(result.assets[0].uri);
      }
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Failed to open gallery",
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Edit Profile</Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: photoURL || "",
              }}
              style={styles.profileImage}
            />

            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera" size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="#9CA3AF"
              style={styles.input}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>

            <TextInput
              editable={false}
              value={user?.email || ""}
              style={[
                styles.input,
                {
                  backgroundColor: "#F3F4F6",
                  color: "#9CA3AF",
                },
              ]}
            />
          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleUpdateProfile}
            disabled={loading}
          >
            <Text style={styles.saveButtonText}>
              {loading ? "Saving..." : "Save Changes"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: lightColors.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: darkColors.background,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    gap: 15,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
  },

  formCard: {
    flex: 1,
    backgroundColor: lightColors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },

  imageContainer: {
    alignSelf: "center",
    marginBottom: 30,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor: darkColors.background,
  },

  cameraButton: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: 38,
    height: 38,
    borderRadius: 999,
    backgroundColor: darkColors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
  },

  inputGroup: {
    marginBottom: 22,
  },

  label: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "600",
    color: lightColors.text,
  },

  input: {
    height: 58,
    borderRadius: 18,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 18,
    fontSize: 15,
    color: lightColors.text,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  saveButton: {
    marginTop: 20,
    height: 58,
    borderRadius: 18,
    backgroundColor: darkColors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
