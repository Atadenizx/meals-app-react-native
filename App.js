import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealItemScreen from "./screens/MealItemScreen";

const Stack = createNativeStackNavigator();
// Stack is a native object with two properties, where every property holds an object that act as a component

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name="MealItemScreen" component={MealItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
