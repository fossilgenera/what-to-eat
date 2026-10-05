// TODO: migrate to SQLite later.
import AsyncStorage from "@react-native-async-storage/async-storage";

const INVENTORY_KEY = "inventory";

export async function loadInventory(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(INVENTORY_KEY);
  if (raw === null) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveInventory(ingredientIds: string[]): Promise<void> {
  await AsyncStorage.setItem(INVENTORY_KEY, JSON.stringify(ingredientIds));
}
