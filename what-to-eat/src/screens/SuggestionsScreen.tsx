import { getSuggestions } from "@/logic/suggestions";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams, useRouter, Href } from "expo-router";
import { useMemo, useState } from "react";
import { Selection } from "../types/selection";
const PAGE_SIZE = 3;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SuggestionsScreen() {
  const router = useRouter();
  const { energy, mood, desiredEffort } = useLocalSearchParams<{
    energy?: string;
    mood?: string;
    desiredEffort?: string;
  }>();
  const [page, setPage] = useState(0);

  const matches = useMemo(
    () => shuffle(getSuggestions({ energy, mood, desiredEffort } as Selection)),
    [energy, mood, desiredEffort],
  );

  if (matches.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nothing matches those answers.</Text>
        <Pressable style={styles.secondary} onPress={() => router.back()}>
          <Text style={styles.secondaryText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  const pageCount = Math.ceil(matches.length / PAGE_SIZE);
  const start = (page % pageCount) * PAGE_SIZE;
  const visible = matches.slice(start, start + PAGE_SIZE);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How about one of these</Text>

      {visible.map((option) => (
        <Pressable
          key={option.id}
          style={styles.option}
          onPress={() => router.push(`/detail/${option.id}` as Href)}
        >
          <Text style={styles.optionText}>{option.name}</Text>
        </Pressable>
      ))}

      {pageCount > 1 && (
        <Pressable style={styles.secondary} onPress={() => setPage(page + 1)}>
          <Text style={styles.secondaryText}>Show me others</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 16 },
  option: {
    padding: 20,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: "#e8eef7",
  },
  optionText: { fontSize: 18 },
  secondary: { padding: 14, alignItems: "center" },
  secondaryText: { fontSize: 16, color: "#555" },
});
