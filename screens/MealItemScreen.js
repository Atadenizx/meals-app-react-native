import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealBadges from "../components/MealBadges";
import FavBtn from "../components/FavBtn";

export default function MealItemScreen({ route, navigation }) {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return <FavBtn />;
      },
    });
  }, [mealId, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      </View>
      <View style={styles.textContainer}>
        <MealBadges item={meal} />
        <Text style={styles.title}>{meal.title}</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          {meal.ingredients.map((ingredient, i) => (
            <Text key={ingredient} style={styles.ingredient}>
              {ingredient}
              {i + 1 !== meal.ingredients.length ? "," : "."}
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Steps</Text>
        <View style={styles.stepsContainer}>
          {meal.steps.map((step, i) => (
            <Text key={step} style={styles.steps}>
              {i + 1}- {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    padding: 16,
    gap: 12,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  imageContainer: {
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200, // ⚠️ must define fixed height for ScrollView
    objectFit: "cover",
  },
  textContainer: {
    gap: 12,
    marginTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "left",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 8,
  },
  ingredient: {
    fontWeight: "500",
    fontSize: 16,
  },
  ingredientsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  steps: {
    fontWeight: "500",
    fontSize: 18,
  },
});
