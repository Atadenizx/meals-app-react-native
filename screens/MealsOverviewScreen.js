import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (categroy) => categoryId === categroy.id
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    return <MealItem item={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderMealItem}
        // To add spacing between items
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
