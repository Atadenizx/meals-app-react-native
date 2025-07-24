import { Pressable, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

export default function FavBtn({ isFaved, onHandlePress }) {
  return (
    <View>
      <Pressable
        onPress={onHandlePress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        {isFaved ? (
          <Ionicons name="heart-sharp" size={24} color="red" />
        ) : (
          <Ionicons name="heart-outline" size={24} color="black" />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
});
