export type Ingredient = {
  id: string;
  name: string;
};

export type Effort = "none" | "low" | "medium" | "high";
export type PrepTime = "under5" | "5to15" | "15to30" | "30to60" | "over60";
export type MealType = "breakfast" | "lunch" | "dinner" | "snack" | "drink";
export type Mess = "none" | "low" | "high";
export type Cooking = "none" | "microwave" | "hob" | "oven" | "airfryer";
export type Satiety = "light" | "medium" | "filling";

export type FoodOption = {
  id: string;
  name: string;
  ingredientIds: string[];
  effort: Effort;
  prepTime: PrepTime;
  mealTypes: MealType[];
  mess: Mess;
  cooking: Cooking;
  satiety: Satiety;
  requiresRecipe: boolean;
};
