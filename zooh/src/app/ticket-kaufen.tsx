import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { abstand, farben } from "@/theme";

export default function TicketKaufen() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Text style={styles.titel}>Ticket kaufen</Text>
      <Platzhalter label="Auswahl: Datum und Anzahl Personen" hoehe={120} />
      <Platzhalter label="Eingabe: E-Mail-Adresse für das Ticket" hoehe={80} />
      <Text style={styles.text}>Zweck: Eintritt vorab in der App kaufen</Text>
      <Text style={styles.text}>Hauptaktion: «Jetzt bezahlen»</Text>
      <Link href="/tickets" style={styles.link}>
        Weiter zu «Mein Ticket»
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.m },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  text: { fontSize: 16, color: farben.text },
  link: { fontSize: 18, color: farben.primaer, paddingVertical: abstand.s },
});
