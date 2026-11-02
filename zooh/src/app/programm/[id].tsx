import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { PrimaerButton } from "@/components/primaer-button";
import { findeProgrammpunkt } from "@/daten/programm";
import { abstand, farben } from "@/theme";

export default function Programmpunkt() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const punkt = findeProgrammpunkt(id);

  if (!punkt) {
    return (
      <View style={styles.inhalt}>
        <Text style={styles.text}>
          Programmpunkt nicht gefunden. Bitte zurück zur Fütterung und einen Eintrag aus der Liste wählen.
        </Text>
        <PrimaerButton titel="Zurück zur Fütterung" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.inhalt}>
      <Stack.Screen options={{ title: punkt.titel }} />
      <Text style={styles.text}>{punkt.zeit} Uhr</Text>
      <PrimaerButton titel="Zurück zur Fütterung" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.l },
  text: { fontSize: 16, color: farben.text },
});
