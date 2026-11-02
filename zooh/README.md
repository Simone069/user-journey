# Zooh! – Klickprototyp (Iteration 1)

Low-Fi-Klickprototyp der Zoo-App mit Expo und expo-router. Jeder Key Screen ist eine Route; graue
Platzhalter und Stichworte zeigen Struktur und Ablauf, nicht die Gestaltung.

## Starten

```bash
npm install
npx expo start
```

- QR-Code mit **Expo Go** scannen (Handy und Notebook im gleichen WLAN).
- Mit `w` im Terminal öffnet sich die App im Browser (Plan B).
- Anderes WLAN oder gesperrte Ports: `npx expo start --tunnel`.
- Ohne Node.js (Plan C): Expo Snack im Browser.

## Struktur

| Datei | Route | Aufgabe |
|-------|-------|---------|
| `src/app/_layout.tsx` | – | Stack mit Titel pro Screen |
| `src/app/index.tsx` | `/` | Startscreen mit Link zu jedem Key Screen |
| `src/app/ticket-kaufen.tsx` | `/ticket-kaufen` | Key Screen: Ticket kaufen |
| `src/app/tickets.tsx` | `/tickets` | Key Screen: Mein Ticket (H1) |
| `src/app/gruppenbesuch.tsx` | `/gruppenbesuch` | Key Screen: Gruppenbesuch (H2) |
| `src/app/lageplan.tsx` | `/lageplan` | Key Screen: Lageplan (H3) |
| `src/app/fuetterung.tsx` | `/fuetterung` | Key Screen: Fütterung (H3) |
| `src/theme.ts` | – | Farben und Abstände |
| `src/components/platzhalter.tsx` | – | grauer Kasten mit Beschriftung |

`H1` bis `H3` verweisen auf die Hypothesen der Annahmen-Map V2.

## Dokumentation

- [`docs/annahmen-map-v2.md`](docs/annahmen-map-v2.md): Annahmen, Matrix, drei Hypothesen mit Prüfkriterium, Testszenarien
- [`docs/key-screens.md`](docs/key-screens.md): Key Screens, Herkunft und Anleitung zum Anpassen
- [`docs/checkpoint-fragen.md`](docs/checkpoint-fragen.md): Antworten auf die vier Checkpoint-Fragen

## Regeln im Projekt

- Dateinamen in kebab-case ohne Umlaute und Sonderzeichen, Endung `.tsx`, `export default` vorhanden.
- Text steht nur in `<Text>`; Styles mit `StyleSheet.create`; tippbare Elemente mit `Pressable`.
- Vor dem Commit: `npx tsc --noEmit` und `npm run lint`.

## Abgabe

ZIP ohne `node_modules` (im Repo-Hauptordner, nur eingecheckte Dateien):

```bash
git archive --format=zip --output=zooh.zip HEAD:zooh
```

Dazu der Link zur Annahmen-Map V2 (Leserecht für die Lehrperson). Eine Abgabe pro Gruppe.
