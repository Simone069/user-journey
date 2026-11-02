import { Pressable, StyleSheet, Text, View } from "react-native";
import { abstand, farben } from "@/theme";

type Props = {
  label: string;
  wert: number;
  onChange: (neu: number) => void;
  max?: number;
};

export function Zaehler({ label, wert, onChange, max = 10 }: Props) {
  const knopf = (zeichen: string, name: string, neu: number) => (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${label}: ${name}`}
      onPress={() => onChange(neu)}
    >
      <Text style={styles.knopf}>{zeichen}</Text>
    </Pressable>
  );
  return (
    <View style={styles.zeile}>
      <Text style={styles.text}>{label}</Text>
      {knopf("−", "eins weniger", Math.max(0, wert - 1))}
      <Text style={styles.text}>{wert}</Text>
      {knopf("+", "eins mehr", Math.min(max, wert + 1))}
    </View>
  );
}

const styles = StyleSheet.create({
  zeile: { flexDirection: "row", alignItems: "center", gap: abstand.m },
  text: { fontSize: 16, color: farben.text },
  knopf: { fontSize: 28, color: farben.text, padding: abstand.s },
});
