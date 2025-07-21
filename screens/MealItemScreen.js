import { useLayoutEffect } from "react";
import { View } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealItemScreen({ route, navigation }) {
  const { mealId } = route.params;

  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => mealId === meal.id).title;

    navigation.setOptions({
      title: mealTitle,
    });
  }, [mealId, navigation]);

  return <View></View>;
}
