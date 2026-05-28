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

const Analytics = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Analytics</Text>

          <Text style={styles.subtitle}>
            Track your clothing store performance
          </Text>
        </View>

        {/* Revenue Card */}
        <View style={styles.revenueCard}>
          <View>
            <Text style={styles.revenueLabel}>Monthly Revenue</Text>

            <Text style={styles.revenueAmount}>₹1,24,500</Text>
          </View>

          <View style={styles.growthBadge}>
            <Ionicons
              name="trending-up"
              size={16}
              color={lightColors.success}
            />

            <Text style={styles.growthText}>+18%</Text>
          </View>
        </View>

        {/* Chart Placeholder */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Sales Overview</Text>

            <Text style={styles.chartSub}>Last 7 Days</Text>
          </View>

          <View style={styles.chartContainer}>
            <View style={[styles.bar, { height: 80 }]} />
            <View style={[styles.bar, { height: 120 }]} />
            <View style={[styles.bar, { height: 60 }]} />
            <View style={[styles.bar, { height: 150 }]} />
            <View style={[styles.bar, { height: 100 }]} />
            <View style={[styles.bar, { height: 170 }]} />
            <View style={[styles.bar, { height: 130 }]} />
          </View>

          <View style={styles.daysContainer}>
            <Text style={styles.dayText}>M</Text>
            <Text style={styles.dayText}>T</Text>
            <Text style={styles.dayText}>W</Text>
            <Text style={styles.dayText}>T</Text>
            <Text style={styles.dayText}>F</Text>
            <Text style={styles.dayText}>S</Text>
            <Text style={styles.dayText}>S</Text>
          </View>
        </View>

        {/* Insights */}
        <View style={styles.insightsContainer}>
          <Text style={styles.sectionTitle}>Store Insights</Text>

          <View style={styles.insightCard}>
            <Ionicons
              name="shirt-outline"
              size={24}
              color={darkColors.primary}
            />

            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Top Category</Text>

              <Text style={styles.insightValue}>Streetwear</Text>
            </View>
          </View>

          <View style={styles.insightCard}>
            <Ionicons
              name="calendar-outline"
              size={24}
              color={darkColors.accent}
            />

            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Best Sales Day</Text>

              <Text style={styles.insightValue}>Saturday</Text>
            </View>
          </View>

          <View style={styles.insightCard}>
            <Ionicons
              name="cube-outline"
              size={24}
              color={lightColors.success}
            />

            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Inventory Efficiency</Text>

              <Text style={styles.insightValue}>92% Turnover</Text>
            </View>
          </View>
        </View>

        {/* Bottom Card */}
        <View style={styles.performanceCard}>
          <Text style={styles.performanceTitle}>
            Revenue Performance
          </Text>

          <Text style={styles.performanceText}>
            Your store revenue increased significantly this month due to
            higher weekend sales and strong streetwear demand.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View Full Report</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: darkColors.background,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#fff",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: darkColors.secondaryText,
  },

  revenueCard: {
    marginTop: 28,
    marginHorizontal: 20,
    backgroundColor: "#111827",
    borderRadius: 28,
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  revenueLabel: {
    color: darkColors.secondaryText,
    fontSize: 14,
  },

  revenueAmount: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
  },

  growthBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(34,197,94,0.15)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    gap: 6,
  },

  growthText: {
    color: lightColors.success,
    fontWeight: "700",
  },

  chartCard: {
    marginTop: 24,
    marginHorizontal: 20,
    backgroundColor: "#111827",
    borderRadius: 28,
    padding: 24,
  },

  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  chartTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },

  chartSub: {
    color: darkColors.secondaryText,
  },

  chartContainer: {
    marginTop: 30,
    height: 180,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  bar: {
    width: 24,
    backgroundColor: darkColors.primary,
    borderRadius: 999,
  },

  daysContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  dayText: {
    color: darkColors.secondaryText,
    width: 24,
    textAlign: "center",
  },

  insightsContainer: {
    marginTop: 28,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 18,
  },

  insightCard: {
    backgroundColor: "#111827",
    borderRadius: 22,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  insightContent: {
    marginLeft: 16,
  },

  insightTitle: {
    color: darkColors.secondaryText,
    fontSize: 14,
  },

  insightValue: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },

  performanceCard: {
    marginTop: 12,
    marginHorizontal: 20,
    backgroundColor: darkColors.primary,
    borderRadius: 28,
    padding: 24,
  },

  performanceTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
  },

  performanceText: {
    marginTop: 14,
    color: "rgba(255,255,255,0.85)",
    lineHeight: 24,
    fontSize: 15,
  },

  button: {
    marginTop: 24,
    backgroundColor: "#fff",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },

  buttonText: {
    color: darkColors.primary,
    fontSize: 15,
    fontWeight: "700",
  },
});