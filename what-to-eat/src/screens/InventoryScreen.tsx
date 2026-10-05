import { useInventory } from "@/context/InventoryContext";
import { ingredients } from "@/types/ingredients";
import { FlatList, Pressable, StyleSheet, Text } from "react-native";

export default function InventoryScreen() {
  const { inventory, toggleIngredient } = useInventory();

  return (
    <FlatList
      data={ingredients}
      keyExtractor={(item) => item.id}
      extraData={inventory}
      renderItem={({ item }) => {
        const have = inventory.includes(item.id);
        return (
          <Pressable
            style={[styles.row, have && styles.rowHave]}
            onPress={() => toggleIngredient(item.id)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.status}>
              {have ? "I have this" : "Don't have"}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    padding: 20,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: "#f0f0f0",
  },
  rowHave: { backgroundColor: "#d6ecd6" },
  name: { fontSize: 18 },
  status: { fontSize: 14, color: "#555", marginTop: 4 },
});
