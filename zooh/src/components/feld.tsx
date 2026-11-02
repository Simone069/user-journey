import { StyleSheet, Text, TextInput, View } from "react-native";
import type { TextInputProps } from "react-native";
import { abstand, farben } from "@/theme";

type Props = TextInputProps & { label: string; fehler?: string };

export function Feld({ label, fehler, ...rest }: Props) {
  return (
    <View style={styles.gruppe}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.eingabe}
        placeholderTextColor={farben.textSekundaer}
        accessibilityLabel={label}
        {...rest}
      />
      {fehler ? <Text style={styles.fehler}>{fehler}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  gruppe: { gap: abstand.s },
  label: { fontSize: 14, color: farben.text },
  eingabe: {
    borderWidth: 1,
    borderColor: farben.rahmen,
    padding: 12,
    color: farben.text,
  },
  fehler: { color: farben.fehler, fontSize: 14 },
});
