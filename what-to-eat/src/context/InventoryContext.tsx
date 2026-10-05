import { loadInventory, saveInventory } from "@/storage/inventoryStorage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type InventoryContextValue = {
  inventory: string[];
  isLoaded: boolean;
  toggleIngredient: (id: string) => void;
};

const InventoryContext = createContext<InventoryContextValue | null>(null);

export function InventoryProvider({ children }: { children: ReactNode }) {
  const [inventory, setInventory] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadInventory().then((ids) => {
      setInventory(ids);
      setIsLoaded(true);
    });
  });

  function toggleIngredient(id: string) {
    const updated = inventory.includes(id)
      ? inventory.filter((existing) => existing !== id)
      : [...inventory, id];
    setInventory(updated);
    saveInventory(updated);
  }

  return (
    <InventoryContext.Provider
      value={{ inventory, isLoaded, toggleIngredient }}
    >
      {children}
    </InventoryContext.Provider>
  );
}

export function useInventory(): InventoryContextValue {
  const value = useContext(InventoryContext);
  if (value === null) {
    throw new Error("useInventory must be used inside an InventoryProvider");
  }
  return value;
}
