import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileLinkButtons({ title, screenName }) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("ProfileTab", { screen: screenName });
  }

  return (
    <View>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 1.5,
    alignItems: "center",
    justifyContent: "center",
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
