import { FlatList, ScrollView, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function RenderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        color={itemData.item.color}
        title={itemData.item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={RenderCategoryItem}
        keyExtractor={(item) => {
          return item.id;
        }}
        numColumns={2}
      />
    </View>
  );
}
