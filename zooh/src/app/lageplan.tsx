// H3: Weg zur Fütterung – Besucher finden auf dem Lageplan den Weg zur nächsten Fütterung allein.
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { PrimaerButton } from "@/components/primaer-button";
import { abstand, farben } from "@/theme";

export default function Lageplan() {
  const router = useRouter();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Text style={styles.titel}>Lageplan</Text>
      <Platzhalter label="Karte des Zoos mit Standort" hoehe={240} />
      <Platzhalter label="Liste: Gehege und Fütterungsorte" hoehe={100} />
      <Text style={styles.text}>Nächste Fütterung finden: Route starten.</Text>
      <PrimaerButton titel="Route starten" onPress={() => router.push("/fuetterung")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.m },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  text: { fontSize: 16, color: farben.text },
});
