// H3: Weg zur Fütterung – Fütterungszeit finden und von dort zum Lageplan wechseln.
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { Platzhalter } from "@/components/platzhalter";
import { PrimaerButton } from "@/components/primaer-button";
import { programm } from "@/daten/programm";
import { abstand, farben } from "@/theme";

export default function Fuetterung() {
  const router = useRouter();
  const [erinnerung, setErinnerung] = useState(false);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.inhalt}
    >
      <Text style={styles.titel}>Fütterung</Text>
      <Text style={styles.text}>Fütterungszeiten heute</Text>
      {programm.map((p) => (
        <Link
          key={p.id}
          href={{ pathname: "/programm/[id]", params: { id: p.id } }}
          style={styles.link}
        >
          {p.zeit} Uhr: {p.titel}
        </Link>
      ))}
      <Platzhalter label="Foto des Tieres" hoehe={120} />
      <View style={styles.zeile}>
        <Text style={styles.text}>Erinnerung vor der Fütterung</Text>
        <Switch
          value={erinnerung}
          onValueChange={setErinnerung}
          accessibilityLabel="Erinnerung vor der Fütterung"
        />
      </View>
      <Text style={erinnerung ? styles.erfolg : styles.hinweis}>
        {erinnerung ? "Erinnerung aktiv" : "Keine Erinnerung"}
      </Text>
      <PrimaerButton titel="Zurück zum Lageplan" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.m },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  text: { fontSize: 16, color: farben.text },
  hinweis: { fontSize: 16, color: farben.textSekundaer },
  erfolg: { fontSize: 16, color: farben.primaer },
  link: { fontSize: 18, color: farben.primaer, paddingVertical: abstand.s },
  zeile: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
});
