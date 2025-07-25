import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

export default function CategoryGridTile({ title, color, onPress }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: "#ccc",
        }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={[styles.title]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
