# Key Screens – Zooh!

Die Key-Screen-Tabelle aus Aufgabe 5.1 lag bei der Umsetzung nicht vor. Die fünf Screens sind aus dem
Aufgabentext 6.1 (Tickets, Lageplan, Fütterung) und den Inhalten des Miro-Boards (Beispiel-Zoo-Flow
mit Karte, Warenkorb und Bezahlen; Opportunity Areas; Design-Studio-Idee «QR-Code für jede
Schüler:in») abgeleitet. **Bitte mit der eigenen 5.1-Tabelle abgleichen.**

| Screen | Datei | Titel im Stack | Zweck | Hauptaktion |
|--------|-------|----------------|-------|-------------|
| Ticket kaufen | `ticket-kaufen.tsx` | Ticket kaufen | Eintritt vorab in der App kaufen | «Jetzt bezahlen» |
| Mein Ticket | `tickets.tsx` | Mein Ticket | Ticket am Drehkreuz schnell vorzeigen | «Ticket zeigen» |
| Gruppenbesuch | `gruppenbesuch.tsx` | Gruppenbesuch | Eintritt für die ganze Gruppe auf einmal regeln | «QR-Codes erstellen» |
| Lageplan | `lageplan.tsx` | Lageplan | Weg zur Fütterung finden | «Route starten» |
| Fütterung | `fuetterung.tsx` | Fütterung | nächste Fütterung finden | «Zum Gehege navigieren» |

## Journey als Links

Startscreen → jeder Key Screen. Zusätzlich folgt die Journey diesen Links:
Gruppenbesuch → Ticket kaufen → Mein Ticket sowie Lageplan ↔ Fütterung.

## Screen anpassen, umbenennen oder ergänzen

1. Datei in `src/app/` anlegen oder umbenennen (kebab-case, keine Umlaute, `.tsx`, `export default`).
2. In `src/app/_layout.tsx` ein `Stack.Screen` mit gleichem `name` und Titel eintragen.
3. In `src/app/index.tsx` einen `Link` mit `href="/dateiname"` ergänzen.
4. `npx tsc --noEmit` ausführen: Typed Routes melden jeden `href`, der zu keiner Datei passt.

## Flow in Iteration 1 (6.2)

- Hauptflow: Start → Ticket kaufen (Zähler, E-Mail-Feld, Button) → Mein Ticket (Anzahl, Total, «Ticket zeigen»).
- Gruppenbesuch (Feld, Zähler) → Ticket kaufen (Anzahl als Parameter vorbelegt).
- Lageplan → Fütterung (Switch «Erinnerung», Liste mit Link zu `programm/[id]`).
- Jeder Screen hat den Zurück-Pfeil des Stacks, zusätzlich Buttons mit `router.back()` bzw. «Zurück zum Start».
