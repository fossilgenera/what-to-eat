import { Text, View, StyleSheet } from "react-native";
import FoodOptionsScreen from "../screens/FoodOptionsScreen";
import QuestionScreen from "@/screens/QuestionScreen";

export default function Index() {
  return <QuestionScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
