import { Text, View, StyleSheet } from "react-native";
import FoodOptionsScreen from "../screens/FoodOptionsScreen";

export default function Index() {
  return <FoodOptionsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
