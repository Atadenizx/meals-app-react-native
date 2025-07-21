import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";

export default function MealItem({ item }) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("MealItemScreen", {
      mealId: item.id,
    });
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Pressable
          onPress={onPressHandler}
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        >
          <Image
            style={styles.image}
            source={{
              uri: item.imageUrl,
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.badgeContainer}>
            <Text style={[styles.badge, { backgroundColor: "green" }]}>
              {item.duration}M
            </Text>
            <Text style={styles.badge}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.badge}>{item.affordability.toUpperCase()}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 5,
    padding: 10,
  },
  badge: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontWeight: "semibold",
    fontSize: 16,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
