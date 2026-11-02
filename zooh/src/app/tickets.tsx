// H1: Ticket finden – Besucher finden das QR-Ticket allein und zeigen es am Drehkreuz vor.
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { PrimaerButton } from "@/components/primaer-button";
import { abstand, farben } from "@/theme";

export default function Tickets() {
  const router = useRouter();
  const { anzahl, total, email } = useLocalSearchParams<{
    anzahl?: string;
    total?: string;
    email?: string;
  }>();
  const [gezeigt, setGezeigt] = useState(false);
  const hatTicket = Boolean(anzahl && total);

  if (!hatTicket) {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.inhalt}
      >
        <Text style={styles.titel}>Mein Ticket</Text>
        <Text style={styles.text}>Sie haben noch kein Ticket gekauft.</Text>
        <PrimaerButton titel="Ticket kaufen" onPress={() => router.push("/ticket-kaufen")} />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Text style={styles.titel}>Mein Ticket</Text>
      <Text style={styles.erfolg}>Bezahlt: CHF {total}. Das Ticket ist gültig.</Text>
      <Platzhalter label="QR-Code des Tickets (gross, gut scanbar)" hoehe={240} />
      <Text style={styles.text}>Anzahl Personen: {anzahl}</Text>
      {email ? <Text style={styles.text}>Bestätigung an: {email}</Text> : null}
      <PrimaerButton titel="Ticket zeigen" onPress={() => setGezeigt(true)} />
      {gezeigt ? (
        <Text style={styles.erfolg}>Ticket am Drehkreuz bereit: QR-Code an den Scanner halten.</Text>
      ) : null}
      <PrimaerButton titel="Zurück zum Start" onPress={() => router.dismissTo("/")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.m },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  text: { fontSize: 16, color: farben.text },
  erfolg: { fontSize: 16, color: farben.primaer },
});
