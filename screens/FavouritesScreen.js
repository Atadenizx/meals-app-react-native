import { useContext, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function FavouritesScreen() {
  const { addFav, ids: favMealIds, removeFav } = useContext(FavouritesContext);
  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

  console.log("favs:", favMealIds);
  console.log("meals", favMeals.length);

  // useLayoutEffect(() => {
  //   const categoryTitle = CATEGORIES.find(
  //     (categroy) => categoryId === categroy.id
  //   ).title;

  //   navigation.setOptions({
  //     title: categoryTitle,
  //   });
  // }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    console.log("item data", itemData.item);
    return <MealItem item={itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favMeals}
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
