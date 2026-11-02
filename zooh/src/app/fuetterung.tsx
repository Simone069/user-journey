// H3: Weg zur Fütterung – Fütterungszeit finden und von dort zum Lageplan wechseln.
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { abstand, farben } from "@/theme";

export default function Fuetterung() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Text style={styles.titel}>Fütterung</Text>
      <Platzhalter label="Liste: Fütterungszeiten heute" hoehe={160} />
      <Platzhalter label="Foto des Tieres" hoehe={120} />
      <Text style={styles.text}>Zweck: nächste Fütterung finden</Text>
      <Text style={styles.text}>Hauptaktion: «Zum Gehege navigieren»</Text>
      <Link href="/lageplan" style={styles.link}>
        Zurück zum «Lageplan»
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
