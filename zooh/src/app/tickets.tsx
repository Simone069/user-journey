// H1: Ticket finden – Besucher finden das QR-Ticket allein und zeigen es am Drehkreuz vor.
import { ScrollView, StyleSheet, Text } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { abstand, farben } from "@/theme";

export default function Tickets() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Text style={styles.titel}>Mein Ticket</Text>
      <Platzhalter label="QR-Code des Tickets (gross, gut scanbar)" hoehe={240} />
      <Platzhalter label="Ticketdaten: Datum und Anzahl Personen" hoehe={80} />
      <Text style={styles.text}>Zweck: Ticket am Drehkreuz schnell vorzeigen</Text>
      <Text style={styles.text}>Hauptaktion: «Ticket zeigen»</Text>
      <Text style={styles.text}>Nebenaktion: «Ticket drucken» (zu Hause)</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.m },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  text: { fontSize: 16, color: farben.text },
});
