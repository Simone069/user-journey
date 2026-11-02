// H2: Klassenticket – Lehrpersonen bestellen die Eintritte für eine ganze Klasse in einem Durchgang.
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Feld } from "@/components/feld";
import { PrimaerButton } from "@/components/primaer-button";
import { Zaehler } from "@/components/zaehler";
import { abstand, farben } from "@/theme";

const MAX_PERSONEN = 30;

export default function Gruppenbesuch() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [personen, setPersonen] = useState(0);
  const [beruehrt, setBeruehrt] = useState(false);

  const nameLeer = name.trim().length === 0;
  const fehler =
    beruehrt && nameLeer ? "Bitte einen Gruppennamen eingeben, z. B. Klasse 3b." : undefined;
  const bereit = !nameLeer && personen > 0;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.titel}>Gruppenbesuch</Text>
      <Feld
        label="Gruppenname"
        placeholder="Klasse 3b"
        value={name}
        onChangeText={(neu) => {
          setName(neu);
          setBeruehrt(true);
        }}
        onBlur={() => setBeruehrt(true)}
        fehler={fehler}
      />
      <Zaehler label="Personen" wert={personen} onChange={setPersonen} max={MAX_PERSONEN} />
      <Text style={styles.text}>
        {personen > 0
          ? `${personen} QR-Codes werden erstellt (einer pro Person).`
          : "Wählen Sie die Anzahl Personen mit «+»."}
      </Text>
      <PrimaerButton
        titel="QR-Codes erstellen"
        deaktiviert={!bereit}
        onPress={() =>
          router.push({
            pathname: "/ticket-kaufen",
            params: { anzahl: String(personen) },
          })
        }
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.l },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  text: { fontSize: 16, color: farben.text },
});
