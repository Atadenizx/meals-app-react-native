import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import MealBadges from "./MealBadges";

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
          <MealBadges item={item} />
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
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
