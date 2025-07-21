import { StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function MealBadges({ item }) {
  return (
    <View style={styles.badgeContainer}>
      <View style={styles.badge}>
        <Ionicons name="time-outline" size={24} color="black" />
        <Text style={styles.badgeText}>{item.duration}M</Text>
      </View>

      <View style={styles.badge}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.badgeText}>{item.complexity.toUpperCase()}</Text>
      </View>

      <View style={styles.badge}>
        <Ionicons name="wallet-outline" size={24} color="black" />
        <Text style={styles.badgeText}>{item.affordability.toUpperCase()}</Text>
      </View>

      {item.isGlutenFree && (
        <View style={styles.badge}>
          <MaterialCommunityIcons name="wheat-off" size={24} color="black" />
          <Text style={styles.badgeText}>gluten Free</Text>
        </View>
      )}

      {item.isVegan && (
        <View style={styles.badge}>
          <Ionicons name="leaf-outline" size={24} color="black" />
          <Text style={styles.badgeText}>Vegan</Text>
        </View>
      )}

      {item.isVegetarian && (
        <View style={styles.badge}>
          <MaterialCommunityIcons
            name="food-apple-outline"
            size={24}
            color="black"
          />
          <Text style={styles.badgeText}>Vegetarian</Text>
        </View>
      )}

      {item.isLactoseFree && (
        <View style={styles.badge}>
          <MaterialCommunityIcons name="cow-off" size={24} color="black" />
          <Text style={styles.badgeText}>Lactose Free</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontWeight: "semibold",
    fontSize: 16,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontWeight: "600",
    fontSize: 14,
  },
});
