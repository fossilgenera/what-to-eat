import { FoodOption, Effort } from "../types/food";
import { Selection, Energy, DesiredEffort, FoodMood } from "../types/selection";
import { foodOptions } from "../data/foodOptions";

const effortLevel: Record<Effort, number> = {
  none: 0,
  low: 1,
  medium: 2,
  high: 3,
};

const maxEffortFromEnergy: Record<Energy, number> = {
  veryLow: 1,
  some: 2,
  canCook: 3,
  overflowing: 4,
};

const maxEffortFromDesired: Record<DesiredEffort, number> = {
  nothing: 1,
  little: 2,
  happyToCook: 3,
  somethingNew: 4,
};

function matchesMood(option: FoodOption, mood: FoodMood | undefined): boolean {
  switch (mood) {
    case "light":
      return option.satiety === "light";
    case "filling":
      return option.satiety === "filling";
    case "snacky":
      return option.mealTypes.includes("snack");
    case "warm":
      return option.cooking !== "none";
    default:
      return true;
  }
}

export function getSuggestions(selection: Selection): FoodOption[] {
  const effortLimits: number[] = [];

  if (selection.energy !== undefined) {
    effortLimits.push(maxEffortFromEnergy[selection.energy]);
  }
  if (selection.desiredEffort !== undefined) {
    effortLimits.push(maxEffortFromDesired[selection.desiredEffort]);
  }

  const maxEffort = Math.min(...effortLimits, Infinity);

  return foodOptions.filter((option) => {
    if (effortLevel[option.effort] > maxEffort) {
      return false;
    }
    return matchesMood(option, selection.mood);
  });
}
