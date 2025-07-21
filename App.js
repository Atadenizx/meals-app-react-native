import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealItemScreen from "./screens/MealItemScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
// Stack is a native object with two properties, where every property holds an object that act as a component

// Separate Stack for nested screens under Meals tab
function MealsStack() {
  return (
    <Stack.Navigator initialRouteName="MealsCategories">
      <Stack.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{ title: "All Categories" }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="MealItemScreen" component={MealItemScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "green",
          }}
        >
          <Tab.Screen
            name="MealsTab"
            component={MealsStack}
            options={{
              headerShown: false,
              title: "Meals",
              tabBarIcon: ({ size, color }) => (
                <MaterialCommunityIcons
                  name="food-apple"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialCommunityIcons
                  name="account"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
