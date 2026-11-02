import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { abstand, farben } from "@/theme";

export default function Start() {
  return (
    <View style={styles.inhalt}>
      <Text style={styles.titel}>Zooh!</Text>
      <Text style={styles.untertitel}>Klickprototyp, Iteration 1</Text>
      <Link href="/ticket-kaufen" style={styles.link}>
        Ticket kaufen
      </Link>
      <Link href="/tickets" style={styles.link}>
        Mein Ticket
      </Link>
      <Link href="/gruppenbesuch" style={styles.link}>
        Gruppenbesuch
      </Link>
      <Link href="/lageplan" style={styles.link}>
        Lageplan
      </Link>
      <Link href="/fuetterung" style={styles.link}>
        Fütterung
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  inhalt: { padding: abstand.m, gap: abstand.m },
  titel: { fontSize: 24, fontWeight: "700", color: farben.text },
  untertitel: { fontSize: 16, color: farben.textSekundaer },
  link: { fontSize: 18, color: farben.primaer, paddingVertical: abstand.s },
});
