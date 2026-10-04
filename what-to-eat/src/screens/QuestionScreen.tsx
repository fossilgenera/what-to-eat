import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { questions } from "../data/questions";
import { Selection } from "../types/selection";
import { useRouter, Href } from "expo-router";

export default function QuestionScreen() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [selection, setSelection] = useState<Selection>({});

  const question = questions[stepIndex];
  const isLastQuestion = stepIndex === questions.length - 1;

  function finish(finalSelection: Selection) {
    // router.push({ pathname: '/suggestions', params: finalSelection } as Href);
  }

  function goNext(updated: Selection) {
    setSelection(updated);
    if (isLastQuestion) {
      finish(updated);
    } else {
      setStepIndex(stepIndex + 1);
    }
  }

  function handleAnswer(value: string) {
    goNext({ ...selection, [question.key]: value } as Selection);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question.title}</Text>

      <ScrollView>
        {question.options.map((option) => (
          <Pressable
            key={option.value}
            style={styles.option}
            onPress={() => handleAnswer(option.value)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable style={styles.secondary} onPress={() => goNext(selection)}>
        <Text style={styles.secondaryText}>Skip this question</Text>
      </Pressable>
      <Pressable style={styles.secondary} onPress={() => finish(selection)}>
        <Text style={styles.secondaryText}>Show options now</Text>
      </Pressable>
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
