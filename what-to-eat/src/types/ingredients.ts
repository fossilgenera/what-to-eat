import { Ingredient } from "../types/food";

export const ingredients: Ingredient[] = [
  { id: "bread", name: "Bread" },
  { id: "cheese", name: "Cheese" },
  { id: "peanut-butter", name: "Peanut butter" },
  { id: "eggs", name: "Eggs" },
  { id: "ham", name: "Ham" },
  { id: "chicken", name: "Chicken" },
  { id: "rice", name: "Rice" },
  { id: "yoghurt", name: "Yoghurt" },
  { id: "bananas", name: "Bananas" },
  { id: "apples", name: "Apples" },
  { id: "instant-noodles", name: "Instant noodles" },
  { id: "cereal", name: "Cereal" },
  { id: "milk", name: "Milk" },
  { id: "crackers", name: "Crackers" },
  { id: "frozen-pizza", name: "Frozen pizza" },
  { id: "potato", name: "Potatoes" },
  { id: "tuna", name: "Tuna" },
  { id: "mayonnaise", name: "Mayonnaise" },
  { id: "bacon", name: "Bacon" },
];

export const getIngredientName = (id: string): string =>
  ingredients.find((ingredient) => ingredient.id === id)?.name ?? id;
