export type Energy = "veryLow" | "some" | "canCook" | "overflowing";
export type FoodMood =
  | "familiar"
  | "light"
  | "filling"
  | "snacky"
  | "warm"
  | "unsure"
  | "comfort";
export type DesiredEffort =
  | "nothing"
  | "little"
  | "happyToCook"
  | "somethingNew";

export type Selection = {
  energy?: Energy;
  mood?: FoodMood;
  desiredEffort?: DesiredEffort;
};
