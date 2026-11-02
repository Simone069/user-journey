import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Zooh!" }} />
      <Stack.Screen name="ticket-kaufen" options={{ title: "Ticket kaufen" }} />
      <Stack.Screen name="tickets" options={{ title: "Mein Ticket" }} />
      <Stack.Screen name="gruppenbesuch" options={{ title: "Gruppenbesuch" }} />
      <Stack.Screen name="lageplan" options={{ title: "Lageplan" }} />
      <Stack.Screen name="fuetterung" options={{ title: "Fütterung" }} />
      <Stack.Screen name="programm/[id]" options={{ title: "Programmpunkt" }} />
    </Stack>
  );
}
