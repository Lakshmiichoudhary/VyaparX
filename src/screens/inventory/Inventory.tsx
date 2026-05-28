import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";

import { darkColors, lightColors } from "../../constants/colors";

export const Inventory = () => {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Oversized T-Shirt",
      category: "Men",
      stock: 24,
      price: "₹899",
      lowStock: false,
    },

    {
      id: 2,
      name: "Slim Fit Jeans",
      category: "Men",
      stock: 8,
      price: "₹1,499",
      lowStock: true,
    },

    {
      id: 3,
      name: "Women's Hoodie",
      category: "Women",
      stock: 15,
      price: "₹1,899",
      lowStock: false,
    },

    {
      id: 4,
      name: "Sneakers",
      category: "Footwear",
      stock: 5,
      price: "₹2,999",
      lowStock: true,
    },

    {
      id: 5,
      name: "Cargo Pants",
      category: "Men",
      stock: 19,
      price: "₹1,299",
      lowStock: false,
    },
  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.smallTitle}>Store Inventory</Text>

            <Text style={styles.mainTitle}>
              Manage Products 
            </Text>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Ionicons
              name="add"
              size={26}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#94A3B8"
          />

          <TextInput
            placeholder="Search products..."
            placeholderTextColor="#94A3B8"
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Overview Cards */}
        <View style={styles.statsRow}>
          <View style={styles.statsCard}>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor:
                    "rgba(139,92,246,0.12)",
                },
              ]}
            >
              <Ionicons
                name="cube-outline"
                size={22}
                color={darkColors.primary}
              />
            </View>

            <Text style={styles.statsNumber}>248</Text>

            <Text style={styles.statsLabel}>
              Total Products
            </Text>
          </View>

          <View style={styles.statsCard}>
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor:
                    "rgba(239,68,68,0.12)",
                },
              ]}
            >
              <Ionicons
                name="alert-circle-outline"
                size={22}
                color={lightColors.danger}
              />
            </View>

            <Text style={styles.statsNumber}>13</Text>

            <Text style={styles.statsLabel}>
              Low Stock
            </Text>
          </View>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Product List
          </Text>

          <TouchableOpacity>
            <Text style={styles.filterText}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>

        {/* Product Cards */}
        <View style={styles.productsContainer}>
          {filteredProducts.map((item) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={item.id}
              style={styles.productCard}
            >
              <View style={styles.productLeft}>
                <View style={styles.productImage}>
                  <Ionicons
                    name="shirt-outline"
                    size={24}
                    color={darkColors.primary}
                  />
                </View>

                <View>
                  <Text style={styles.productName}>
                    {item.name}
                  </Text>

                  <Text style={styles.productCategory}>
                    {item.category}
                  </Text>

                  <Text style={styles.productPrice}>
                    {item.price}
                  </Text>
                </View>
              </View>

              <View style={styles.stockContainer}>
                <Text
                  style={[
                    styles.stockText,
                    item.lowStock && {
                      color: lightColors.danger,
                    },
                  ]}
                >
                  {item.stock} left
                </Text>

                <View
                  style={[
                    styles.statusBadge,
                    {
                      backgroundColor: item.lowStock
                        ? "rgba(239,68,68,0.12)"
                        : "rgba(34,197,94,0.12)",
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      {
                        color: item.lowStock
                          ? lightColors.danger
                          : lightColors.success,
                      },
                    ]}
                  >
                    {item.lowStock
                      ? "Low"
                      : "In Stock"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: darkColors.background
  },

  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  smallTitle: {
    fontSize: 14,
    color: darkColors.secondaryText,
    fontWeight: "500",
  },

  mainTitle: {
    marginTop: 4,
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },

  addButton: {
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: darkColors.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  searchContainer: {
    marginTop: 24,
    marginHorizontal: 20,
    backgroundColor: "#111827",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#fff",
    fontSize: 15,
  },

  statsRow: {
    flexDirection: "row",
    marginTop: 24,
    paddingHorizontal: 14,
  },

  statsCard: {
    flex: 1,
    backgroundColor: "#111827",
    marginHorizontal: 6,
    borderRadius: 28,
    paddingVertical: 26,
    alignItems: "center",
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  statsNumber: {
    marginTop: 18,
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },

  statsLabel: {
    marginTop: 6,
    fontSize: 14,
    color: darkColors.secondaryText,
  },

  sectionHeader: {
    marginTop: 34,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#fff",
  },

  filterText: {
    color: darkColors.primary,
    fontWeight: "700",
    fontSize: 14,
  },

  productsContainer: {
    marginTop: 18,
    paddingHorizontal: 20,
  },

  productCard: {
    backgroundColor: "#111827",
    borderRadius: 28,
    padding: 18,
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  productLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  productImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: "rgba(139,92,246,0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },

  productName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },

  productCategory: {
    marginTop: 4,
    fontSize: 13,
    color: darkColors.secondaryText,
  },

  productPrice: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: "700",
    color: darkColors.primary,
  },

  stockContainer: {
    alignItems: "flex-end",
  },

  stockText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },

  statusBadge: {
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
});