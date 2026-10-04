import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { foodOptions } from "../data/foodOptions";
import { getIngredientName } from "@/types/ingredients";

export default function DetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const option = foodOptions.find((o) => o.id === id);

  if (!option) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Food option not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{option.name}</Text>
      <Text style={styles.label}>You need</Text>
      <Text style={styles.body}>
        {option.ingredientIds
          .map((ingredientId) => getIngredientName(ingredientId))
          .join(", ")}
      </Text>
      <Text style={styles.label}>Effort</Text>
      <Text style={styles.body}>{option.effort}</Text>
      <Text style={styles.label}>Prep time</Text>
      <Text style={styles.body}>{option.prepTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 16 },
  label: { fontSize: 14, color: "#555", marginTop: 12 },
  body: { fontSize: 18 },
});
