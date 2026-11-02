// H3: Weg zur Fütterung – Besucher finden auf dem Lageplan den Weg zur nächsten Fütterung allein.
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { abstand, farben } from "@/theme";

export default function Lageplan() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Platzhalter label="Karte des Zoos mit Standort" hoehe={240} />
      <Platzhalter label="Liste: Gehege und Fütterungsorte" hoehe={100} />
      <Text style={styles.text}>Zweck: Weg zur Fütterung finden</Text>
      <Text style={styles.text}>Hauptaktion: «Route starten»</Text>
      <Link href="/fuetterung" style={styles.link}>
        Weiter zu «Fütterung»
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.m },
  text: { fontSize: 16, color: farben.text },
  link: { fontSize: 18, color: farben.primaer, paddingVertical: abstand.s },
});
