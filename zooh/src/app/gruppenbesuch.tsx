// H2: Klassenticket – Lehrpersonen bestellen die Eintritte für eine ganze Klasse in einem Durchgang.
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { abstand, farben } from "@/theme";

export default function Gruppenbesuch() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Text style={styles.titel}>Gruppenbesuch</Text>
      <Platzhalter label="Eingabe: Gruppenname und Anzahl Personen" hoehe={100} />
      <Platzhalter label="Liste: ein QR-Code pro Person" hoehe={200} />
      <Text style={styles.text}>Zweck: Eintritt für die ganze Gruppe auf einmal regeln</Text>
      <Text style={styles.text}>Hauptaktion: «QR-Codes erstellen»</Text>
      <Text style={styles.text}>Nebenaktion: «Alle QR-Codes drucken» (zu Hause)</Text>
      <Link href="/ticket-kaufen" style={styles.link}>
        Weiter zu «Ticket kaufen»
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
