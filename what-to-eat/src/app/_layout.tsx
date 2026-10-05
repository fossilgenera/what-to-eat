import { InventoryProvider } from "@/context/InventoryContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <InventoryProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "What do you feel like eating?" }}
        />
        <Stack.Screen name="suggestions" options={{ title: "Suggestions" }} />
        <Stack.Screen name="detail/[id]" options={{ title: "Details" }} />
        <Stack.Screen name="inventory" options={{ title: "My ingredients" }} />
      </Stack>
    </InventoryProvider>
  );
}
