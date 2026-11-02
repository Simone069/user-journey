// Hauptflow Schritt 1: Personen wählen (Zähler), E-Mail eingeben (Feld), bezahlen → «Mein Ticket».
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Feld } from "@/components/feld";
import { PrimaerButton } from "@/components/primaer-button";
import { Zaehler } from "@/components/zaehler";
import { abstand, farben } from "@/theme";

const PREIS = 30;

export default function TicketKaufen() {
  const router = useRouter();
  // Parameter sind immer Text; eine Vorgabe kommt z. B. vom Gruppenbesuch.
  const { anzahl: vorgabe } = useLocalSearchParams<{ anzahl?: string }>();
  const start = Number(vorgabe);
  const [anzahl, setAnzahl] = useState(
    Number.isInteger(start) && start > 0 ? Math.min(start, 10) : 1,
  );
  const [email, setEmail] = useState("");

  // Nur die Eingaben sind State; alles andere wird bei jedem Rendern abgeleitet.
  const total = anzahl * PREIS;
  const emailGueltig = /^\S+@\S+\.\S+$/.test(email);
  const fehler =
    email.length > 0 && !emailGueltig
      ? "Bitte eine E-Mail-Adresse mit @ und Endung eingeben, z. B. name@beispiel.ch."
      : undefined;
  const bereit = anzahl > 0 && emailGueltig;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titel}>Ticket kaufen</Text>
      <Zaehler label="Personen" wert={anzahl} onChange={setAnzahl} />
      <Text style={styles.total}>Total: CHF {total}</Text>
      {anzahl === 0 ? (
        <Text style={styles.hinweis}>Wählen Sie mindestens eine Person mit «+».</Text>
      ) : null}
      <Feld
        label="E-Mail für das Ticket"
        placeholder="name@beispiel.ch"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        fehler={fehler}
      />
      <PrimaerButton
        titel="Jetzt bezahlen"
        deaktiviert={!bereit}
        onPress={() =>
          router.push({
            pathname: "/tickets",
            params: { anzahl: String(anzahl), total: String(total), email },
          })
        }
      />
      {!bereit ? (
        <Text style={styles.hinweis}>
          Der Button wird aktiv, sobald Personen und eine gültige E-Mail-Adresse gewählt sind.
        </Text>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.l },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  total: { fontSize: 20, color: farben.text },
  hinweis: { fontSize: 14, color: farben.textSekundaer },
});
