import { Selection } from "../types/selection";

export type Question = {
  key: keyof Selection;
  title: string;
  options: { value: string; label: string }[];
};

export const questions: Question[] = [
  {
    key: "energy",
    title: "How much energy do you have?",
    options: [
      { value: "veryLow", label: "Very low" },
      { value: "some", label: "Some" },
      { value: "canCook", label: "I could cook" },
      { value: "overflowing", label: "Overflowing with energy" },
    ],
  },
  {
    key: "mood",
    title: "What sounds good?",
    options: [
      { value: "familiar", label: "Something familiar" },
      { value: "light", label: "Something fresh or light" },
      { value: "filling", label: "Something filling" },
      { value: "snacky", label: "Something snacky" },
      { value: "warm", label: "Something warm" },
      { value: "unsure", label: "I don't know" },
    ],
  },
  {
    key: "desiredEffort",
    title: "How much do you want to do?",
    options: [
      { value: "nothing", label: "Basically nothing" },
      { value: "little", label: "A little effort" },
      { value: "happyToCook", label: "I'm happy to cook" },
      { value: "somethingNew", label: "Something brand new" },
    ],
  },
];
