import { FlatList, ScrollView, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen() {
  console.log(CATEGORIES[0]);
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

function RenderCategoryItem(itemData) {
  return (
    <CategoryGridTile color={itemData.item.color} title={itemData.item.title} />
  );
}
