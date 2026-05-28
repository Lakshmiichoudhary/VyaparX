import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";

import { darkColors, lightColors } from "../../constants/colors";

export const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.heroTop}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>

            <Text style={styles.storeName}>VyaparX</Text>
          </View>

          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.salesContainer}>
          <View>
            <Text style={styles.salesLabel}>Today's Revenue</Text>

            <Text style={styles.salesAmount}>₹28,450</Text>

            <Text style={styles.salesSubtext}>+18% from yesterday</Text>
          </View>

          <View style={styles.salesIcon}>
            <Ionicons name="trending-up" size={34} color="#fff" />
          </View>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <View style={styles.statsRow}>
          <View style={styles.statsCard}>
            <View
              style={[
                styles.statsIconContainer,
                {
                  backgroundColor: "rgba(139,92,246,0.15)",
                },
              ]}
            >
              <Ionicons
                name="shirt-outline"
                size={22}
                color={darkColors.primary}
              />
            </View>

            <Text style={styles.statsNumber}>248</Text>

            <Text style={styles.statsLabel}>Products</Text>
          </View>

          <View style={styles.statsCard}>
            <View
              style={[
                styles.statsIconContainer,
                {
                  backgroundColor: "rgba(6,182,212,0.15)",
                },
              ]}
            >
              <Ionicons
                name="cart-outline"
                size={22}
                color={darkColors.accent}
              />
            </View>

            <Text style={styles.statsNumber}>54</Text>

            <Text style={styles.statsLabel}>Orders</Text>
          </View>
        </View>

        {/* Weekly Performance */}
        <View style={styles.performanceCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weekly Performance</Text>

            <TouchableOpacity>
              <Text style={styles.sectionAction}>Details</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.chartContainer}>
            {[40, 90, 70, 120, 80, 65, 110].map((height, index) => (
              <View key={index} style={styles.chartItem}>
                <View
                  style={[
                    styles.chartBar,
                    {
                      height,
                      opacity: index === 3 ? 1 : 0.55,
                    },
                  ]}
                />

                <Text style={styles.chartLabel}>
                  {["M", "T", "W", "T", "F", "S", "S"][index]}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Top Categories */}
        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Categories</Text>

            <TouchableOpacity>
              <Text style={styles.sectionAction}>View All</Text>
            </TouchableOpacity>
          </View>

          {[
            {
              icon: "shirt-outline",
              name: "Oversized T-Shirts",
              sold: "86 sold",
            },

            {
              icon: "woman-outline",
              name: "Women's Fashion",
              sold: "64 sold",
            },

            {
              icon: "walk-outline",
              name: "Sneakers",
              sold: "41 sold",
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              style={styles.categoryCard}
            >
              <View style={styles.categoryLeft}>
                <View style={styles.categoryIcon}>
                  <Ionicons
                    name={item.icon as any}
                    size={22}
                    color={darkColors.primary}
                  />
                </View>

                <View>
                  <Text style={styles.categoryName}>{item.name}</Text>

                  <Text style={styles.categorySold}>{item.sold}</Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={darkColors.secondaryText}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View style={styles.activityContainer}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>

          {[
            "New stock added for Cargo Pants",
            "5 Oversized T-Shirts sold",
            "Sneakers stock running low",
          ].map((activity, index) => (
            <View key={index} style={styles.activityCard}>
              <View style={styles.activityDot} />

              <Text style={styles.activityText}>{activity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: darkColors.background,
  },

  heroSection: {
    backgroundColor: darkColors.card,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
  },

  heroTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  welcomeText: {
    color: darkColors.secondaryText,
    fontSize: 14,
    fontWeight: "500",
  },

  storeName: {
    marginTop: 6,
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },

  notificationButton: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.08)",
    justifyContent: "center",
    alignItems: "center",
  },

  salesContainer: {
    marginTop: 30,
    backgroundColor: darkColors.primary,
    borderRadius: 28,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  salesLabel: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 14,
  },

  salesAmount: {
    marginTop: 10,
    fontSize: 38,
    fontWeight: "800",
    color: "#fff",
  },

  salesSubtext: {
    marginTop: 8,
    color: "rgba(255,255,255,0.8)",
    fontSize: 14,
  },

  salesIcon: {
    width: 70,
    height: 70,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  statsRow: {
    flexDirection: "row",
    marginTop: 24,
    paddingHorizontal: 14,
  },

  statsCard: {
    flex: 1,
    backgroundColor: darkColors.card,
    marginHorizontal: 6,
    borderRadius: 24,
    paddingVertical: 24,
    alignItems: "center",
  },

  statsIconContainer: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  statsNumber: {
    marginTop: 16,
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
  },

  statsLabel: {
    marginTop: 6,
    fontSize: 14,
    color: darkColors.secondaryText,
  },

  performanceCard: {
    marginTop: 26,
    marginHorizontal: 20,
    backgroundColor: darkColors.card,
    borderRadius: 28,
    padding: 22,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
  },

  sectionAction: {
    color: darkColors.primary,
    fontWeight: "700",
    fontSize: 14,
  },

  chartContainer: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 140,
  },

  chartItem: {
    alignItems: "center",
  },

  chartBar: {
    width: 26,
    borderRadius: 100,
    backgroundColor: darkColors.primary,
  },

  chartLabel: {
    marginTop: 10,
    color: darkColors.secondaryText,
    fontWeight: "600",
    fontSize: 12,
  },

  categoriesSection: {
    marginTop: 28,
    marginHorizontal: 20,
  },

  categoryCard: {
    marginTop: 16,
    backgroundColor: darkColors.card,
    borderRadius: 24,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  categoryLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: "rgba(139,92,246,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  categoryName: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },

  categorySold: {
    marginTop: 4,
    fontSize: 13,
    color: darkColors.secondaryText,
  },

  activityContainer: {
    marginTop: 28,
    marginHorizontal: 20,
  },

  activityCard: {
    marginTop: 14,
    backgroundColor: darkColors.card,
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  activityDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: darkColors.primary,
    marginRight: 14,
  },

  activityText: {
    color: "#fff",
    fontSize: 14,
    flex: 1,
  },
});
