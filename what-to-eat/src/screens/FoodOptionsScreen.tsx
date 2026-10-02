import { FlatList, StyleSheet, Text, View } from "react-native";
import { foodOptions } from "@/types/foodOptions";
import { getIngredientName } from "@/types/ingredients";

export default function FoodOptionsScreen() {
  return (
    <FlatList
      data={foodOptions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.ingredients}>
            {item.ingredientIds.map((id) => getIngredientName(id)).join(", ")}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ddd" },
  name: { fontSize: 18, fontWeight: "600" },
  ingredients: { fontSize: 14, color: "#555", marginTop: 4 },
});
